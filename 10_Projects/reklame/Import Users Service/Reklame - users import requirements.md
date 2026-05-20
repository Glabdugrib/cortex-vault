### Product Requirements Document

#### Application Overview

The application processes a CSV file containing a list of users to import them into the database. It validates the data, saves it temporarily in a buffer table, performs necessary checks, and then moves the data to the main users table. It handles email validations, blacklist checks, and updates user data based on various rules. The application also generates a report of excluded users and supports different strategies for handling field values and updates. Additionally, it keeps the user informed about the import operation's intermediate statuses and exports a CSV backup of all modified rows before the import.

#### Functional Requirements

1. **CSV File Handling**
    - The application must support different delimiters for the CSV file: comma, semicolon, and tab.
    - Each row in the CSV must match the format defined by the selected delimiter.
    - Each row must have the same number of fields as the header row.
    - Rows that do not match the header format should be discarded.
2. **User Validation and Filtering**
    - Validate email addresses; blacklist users with invalid emails and set their status to 'HB'.
    - Blacklist users whose email addresses or domains match specific blacklist patterns.
    - Exclude users without a linked partner.
    - Exclude users with statuses that are not in the allowed list (IS, DI, SB, HB, CO).
    - Exclude duplicate users based on email addresses.
3. **User Data Management**
    - Update imported user data with data from associated partners in the application.
    - Update imported user data with existing user data if users already exist in the system.
    - Apply different strategies for updating user data fields:
        - **Value From Options:**
            - `noValue`: Ignore the column.
            - `fromFile`: Use the value from the CSV file.
            - `fixedValue`: Use a specified default value.
            - `deleteValue`: Set the value to "null".
        - **Update Type Options:**
            - `Merge`: Only update if the new value is not null; merge JSON fields or overwrite non-JSON fields.
            - `Merge Sendgoon`: Merge JSON fields or overwrite non-JSON fields (unless the current value is not null and the column is not 'interests').
            - `Overwrite`: Always update with the new value.
            - `Don't update`: Do not update the field.
4. **Data Storage and Reporting**
    - Save new users in the main users table.
    - Update existing users based on the defined update rules.
    - Generate a report of excluded users, detailing:
        - New users inserted
        - Duplicate users
        - Existing users updated
        - Users without partners
        - Users with bad status
5. **User Notification and Backup**
    - Keep informed about the intermediate statuses of the import operation.
    - Export a CSV file containing a backup of all the modified rows before the import process.

### Questions

1. When `Value From` is set to `noValue`, the field should be ignored, hence choosing an `Update Type` would be irrelevant and should not be allowed.

---

### Requisiti di Prodotto

#### Panoramica

La feature di import elabora un file CSV contenente un elenco di utenti da importare nel database. Valida i dati, li salva temporaneamente in una tabella di buffer, esegue controlli necessari e poi sposta i dati nella tabella principale degli utenti.
Gestisce le validazioni degli indirizzi email, controlli di blacklist e aggiorna i dati degli utenti in base a varie regole. L'applicazione genera anche un rapporto degli utenti esclusi e supporta diverse strategie per gestire i valori dei campi e gli aggiornamenti. Inoltre, tiene informato l'utente sugli stati intermedi dell'operazione di importazione ed esporta un backup CSV di tutte le righe modificate prima dell'import.

#### Requisiti Funzionali

1. **Gestione dei File CSV**
    - L'import deve supportare diversi delimitatori per il file CSV: virgola, punto e virgola e tab.
    - Ogni riga nel CSV deve corrispondere al formato definito dal delimitatore selezionato.
    - Ogni riga deve avere lo stesso numero di campi della riga di intestazione.
    - Le righe che non corrispondono al formato dell'intestazione devono essere scartate.
2. **Validazione e Filtraggio degli Utenti**
    - Valida gli indirizzi email; inserisce in blacklist gli utenti con email non valide e imposta il loro stato su "HB".
    - Mette in blacklist gli utenti i cui indirizzi email o domini corrispondono a determinati pattern di blacklist.
    - Esclude gli utenti senza partner collegati.
    - Esclude gli utenti con stati non presenti nell'elenco consentito (IS, DI, SB, HB, CO).
    - Esclude gli utenti duplicati (basandosi sugli indirizzi email).
3. **Gestione dei Dati degli Utenti**
    - Aggiorna i dati degli utenti importati con i dati dei partner associati nell'applicazione.
    - Aggiorna i dati degli utenti importati con i dati degli utenti già esistenti nel sistema.
    - E' possibile applicare diverse strategie per l'aggiornamento dei campi dati degli utenti:
        - **Opzioni Value From:**
            - `noValue`: Ignora la colonna.
            - `fromFile`: Utilizza il valore presente nel file CSV.
            - `fixedValue`: Utilizza un valore predefinito specificato.
            - `deleteValue`: Imposta il valore su "null".
        - **Opzioni Update Type:**
            - `Merge`: Aggiorna solo se il nuovo valore non è nullo; effettua il merge dei campi JSON o sovrascrive i campi non JSON.
            - `Merge Sendgoon`: effettua il merge dei campi JSON o sovrascrive i campi non JSON (a meno che il valore corrente non sia nullo e la colonna non sia "interests").
            - `Overwrite`: Aggiorna sempre con il nuovo valore.
            - `Don't update`: Non aggiorna il campo.
4. **Archiviazione dei Dati e Reporting**
    - Salva i nuovi utenti nella tabella principale degli utenti.
    - Aggiorna gli utenti esistenti in base alle regole di Update Type definite.
    - Genera un rapporto degli utenti esclusi, dettagliando:
        - Nuovi utenti inseriti
        - Utenti duplicati
        - Utenti esistenti aggiornati
        - Utenti senza partner
        - Utenti con stato non valido
5. **Notifica all'Utente e Backup**
    - Tiene informato l'utente sugli stati intermedi dell'operazione di import.
    - Esporta un file CSV contenente un backup di tutte le righe modificate prima dell'inizio del processo di importazione.

### Domande

1. Quando `Value From` è impostato su `noValue`, il campo dovrebbe essere ignorato, quindi scegliere un `Update Type` sarebbe irrilevante e non dovrebbe essere consentito?