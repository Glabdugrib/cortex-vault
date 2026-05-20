---



---

### GenTaskUsersImport
```mermaid
flowchart TD
	START
	A[Get task]
	B{task exists?}
	C["ERROR: Cannot retrieve task {taskId}"]
	D["ERROR: Task not found"]
	E{task.input & task.input.importId exist?}
	F["ERROR: Import not found"]
	G["Update import's status to 'processData'"]
	H["ERROR: Unable to change import status"]
	I["EVENT: 'genImport:dataChanged'"]
	J[Get import with import mask]
	K{import exists?}
	L["ERROR: Unable to find import"]
	M{import is object?}
	N["ERROR: Unable to find import mask with id {import.importMask}"]
	O["GenImportService.importUsersFile(import)"]
	P{success?}
	Q["Update import (status = error, skippedUsersFile, importReport)"]
	R["Update import (status = completed, skippedUsersFile, importReport)"]
	S["EVENT: 'genImport:dataChanged'"]

	START -->|return taskId| A
    A --> |error| C
    A --> B
    B -->|no| D
    B -->|yes| E
    E -->|no| F
    E -->|yes| G
    G -->|error| H
    G --> I
    I --> J
    J --> K
    K -->|no| L
    K -->|yes| M
    M -->|no| N
    M -->|yes| O
    O -->|return skippedUsersFile, importReport| P
    P -->|no| Q
    P -->|yes| R
    Q --> S
    R --> S
    S -->|return taskId| END
    
    
```

---

### GenImportService.importUsersFile
```mermaid
flowchart TD
	START
	A[Get importFile]
	C["ERROR: Unable to find import data file"]
	D[Delete all gen_users_import where id_installation]
	E["GenImportedUser.processImportRows(importFile, importMask)"]
	F["GenImportService.verifyRowsContent(importFile)"]
	G["GenImportedUser.insertUpdateUsersData(importFile, importMask, import.update_existing_users, import.update_users_status)"]
	H["GenImportService.writeSkippedUsersData(importFile, import.update_existing_users, importReport, importMask)"]
	H[Create skippedUsersFile]

	START -->|import| A
	A --> D
	A -->|error| C
	D --> E
	E -->|return importReport| F
	F --> G
	G -->|return importReport| H
	H -->|return skippedUsersFile, importReport| END
	
```

---

### GenImportService.processImportRows
```mermaid
flowchart TD
	A["Get importMask valid fields + fields 'email_invalid' & 'domain'"]
	B["Get delimiters & header labels from importMask.headerColumns and write first row"]
	C["Cycle rows starting from importMask.importFromRow (included)"]
	D{"Row is array?"}
	E[Skip]
	F{"Row has same # of elements of headerColumns?"}
	G[Add to invalid rows]
	H{First element is null/empty}
	I[Cycle all fields]
	L{field.valueFrom?}
	M[Skip]
	N[value=field.value]
	O[value=null]
	P["value=row[field.value]"]
	Q{"Value != null/undefined?"}
	R[Add value to array of values]
	S{field.name?}
	T[Trim & lowecase value]
	U[Validate value as email]
	Z["Extract email domain (if found)"]
	AA["Value=lookup[value]"]
	AB{email invalid?}
	AC[Value=true]
	AD{field.type?}
	AE["Format value with field.format or YYYY-MM-DD HH:mm:ss"]
	AG["Value = Validate date or null"]
	AF["Split value by field.tagSeparator or # into tags"]
	AH[Value = stringify array of tag=true]
	AI{Fields loop ended?}
	AL[Add emailValid to array of values]
	AM[Add domain to array of values]
	AN[Push values to array of valid rows]
	AO{Rows loop ended?}
	AP["Insert valid rows"]

	START -->|importFile, importMask| A
	A --> B
	B --> C
	C --> D
	D -->|no| E
	D -->|yes| F
	F -->|no| G
	F -->|yes| H
	H -->|yes| G
	H -->|no| I
	I --> L
	L -->|null/undefined| M
	L -->|fixedValue| N
	L -->|deleteValue| O
	L -->|other| P
	N --> Q
	O --> Q
	P --> Q
	Q -->|yes| S
	Q -->|no| R
	S -->|email| T
	T --> U
	U --> Z
	Z --> R
	S -->|gender/status| AA
	AA --> R
	S -->|blacklisted| AB
	AB -->|yes| AC
	AB -->|no| R
	AC --> R
	S -->|other| AD
	AD -->|date/datetime| AE
	AE --> AG
	AG --> R
	AD -->|tagsList| AF
	AF --> AH
	AH --> R
	AD -->|other| R
	R --> AI
	AI -->|yes| AL
	AI -->|no| I
	AL --> AM
	AM --> AN
	AN --> AO
	AO -->|no| C
	AO -->|yes| AP
	AP --> END
```

---

### GenImportService.verifyRowsContent
```mermaid
flowchart TD
	A["Get partners by installation"]
	B["Update gen_users_import id_partner where partner (for every partner)"]
	C["Get blacklists by installation"]
	D["Blacklist gen_users_import with every blacklist.pattern (contains % for LIKE, starts w/ @ for domain, other email)"]
	F["Update gen_users_import by installation with status 'HB' and email_invalid=true"]
	G["Look for existing users (by email & installation), update gen_users_import.id_user"]
	H["Look for removed users (by email & installation, where deduplica=true), update gen_users_import.id_user=0"]

	START -->|importFile| A
	A --> B
	B --> C
	C --> D
	D -->|success| G
	D -->|error| F
	F --> G
	G --> H
	H --> END
	
```

---

### GenImportService.insertUpdateUsersData
```mermaid
flowchart TD
	A["Count existing users (isset id_user, id_partner & id_installation & status in IS,DI,SB,HB,CO)"]
	B["Count users w/out partner (id_partner=null & id_installation"]
	C["Count users w/ bad status (id_installation & status !in IS,DI,SB,HB,CO"]
	D["Count duplicated users (id_installation & id_user=0)"]
	E["Count new insertable users (id_user=0, isset id_partner & id_installation & status in IS,DI,SB,HB,CO)"]
	F["Insert insertable users in batch*** (see GenImportedUser.insertNewUsers)"]
	G{Update existing users?}
	H["Update importReport w/ counts"]
	I["Update existing users (see GenImportedUser.updateExistingUsers)"]
	L["Update importReport.updatedExistingUsers to true/false"]
	

	START -->|installation| A
	A --> B
	B --> C
	C --> D
	D --> E
	E --> F
	F --> G
	G -->|no| H
	G -->|yes| I
	I --> L
	L --> H
	H -->|return importReport| END
```

---

### GenImportService.writeSkippedUsersData
```mermaid
flowchart TD
	A["Print list of existing users (if > 0)"]
	B["Print list of users w/out partner (if > 0)"]
	C["Print list of users w/ bad status (if > 0)"]
	D["Print list of duplicated users (if > 0)"]

	START --> A
	A --> B
	B --> C
	C --> D
	D --> END
```

---

### GenImportedUser.insertNewUsers
```mermaid
flowchart TD
	A[Insert rows in gen_users]
	B["Create trace data for each row's user"]
	C["Create log data for row's user"]
	D["Send SNS event"]
	E["Insert rows with status HB to gen_user_bounce_case"]
	F["Increment numUsers of bounceCase 'Utenti bounced da import'"]

	START --> A
	A --> B
	B --> C
	C --> D
	D --> E
	E --> F
	F --> END
```

---

### GenImportedUser.updateExistingUsers
```mermaid
flowchart TD
	A["Cycle rows"]
	B["Cycle row fields"]
	C{"Field = 'complain_date'?"}
	D["Push field to insert array"]
	E{"Status in CO or DI?"}
	F["Push unsubscribing_date ?? now"]
	G["Push unsubscribing_ip ?? ip"]
	H["Push null"]
	I{"Update type?"}
	L{"Type JSON & !empty existing field?"}
	M["Merge JSON"]
	N{"empty gen_users field (old)?"}
	O{"field.mapToName != interests?"}
	Q{"valueFrom = noValue?"}
	S{"Type JSON & !empty existing field?"}
	T["Merge JSON"]
	U{"empty gen_users_import field (new)"}
	W["Send SNS event"]

	START -->|rows| A
	A --> B
	B --> C
	C -->|no| D
	D --> E
	C -->|yes| E
	E -->|yes| F
	F --> G
	G --> I
	E -->|no| H
	H --> I
	I -->|mergeSendgoon| L
	L -->|yes| M
	L -->|no| N
	M --> N
	N -->|yes| SKIP
	N -->|no| O
	O -->|yes| SKIP
	O -->|no| Q
	Q -->|yes| SKIP
	Q -->|no| UPDATE
	I -->|merge| S
	S -->|yes| T
	S -->|no| U
	T --> U
	U -->|yes| SKIP
	U -->|no| Q
	I -->|noUpdate| SKIP
	I -->|overWrite| Q
	UPDATE --> W
	W --> END
	SKIP --> END
```

---

#### Value From:
- **noValue**: ignore file column
- **fromFile**: get value from file
- **fixedValue**: default value
- **deleteValue**: set as null

#### Update Type:
- **Merge**: merge type JSON and overwrite other ones (unless new value is null)
- **Merge Sendgoon**: merge if type JSON and overwrite other ones (unless current value is not null and column label != 'interests')
- **Overwrite**
- **Don't update**


Hanno senso le opzioni updateTypes per noValue?

---

```mermaid
flowchart TD
    A[File Upload and Initial Validation] --> B[Store File Temporarily]
    B --> C[Dispatch Job for Background Processing]
    C --> D[Read and Parse CSV File]
    D --> E[Validate Rows]
    E --> F{Valid Row?}
    F -- No --> G[Discard Row]
    F -- Yes --> H[Blacklist Checks]
    H --> I{Blacklisted?}
    I -- Yes --> J[Mark with Status 'HB' and Discard]
    I -- No --> K[Filter Users]
    K --> L{Valid User?}
    L -- No --> M[Discard Row]
    L -- Yes --> N[Store Valid Rows in Buffer Table]
    N --> O[Load Existing Users from Database]
    O --> P[Update Buffer Table with Existing Data]
    P --> Q[Update Buffer Table with Partner Data]
    Q --> R[Apply 'Value From' and 'Update Type' Options]
    R --> S[Insert New Users into Main Table]
    S --> T[Update Existing Users in Main Table]
    T --> U[Generate Report of Excluded Users]
    U --> V[Export Backup of Modified Rows]
    V --> W[Notify User of Import Status]
    W --> X[Cleanup Temporary Files and Buffer Table]
```

---

```mermaid
flowchart TD
	A{"ImportMask->valueFrom = ?"}
	B["Skip field"]
	C["value = row[field['value']]\n\nIn questo caso, field['value'] rappresenta l'indice nell'array row"]
	D["value = field['value']\n\nIn questo caso, field['value'] rappresenta il valore default"]
	E["value = null"]

	A -->|'noValue', null, undefined| B
	A -->|'fromFile'| C
	A -->|'fixedValue'| D
	A -->|'deleteValue'| E
```