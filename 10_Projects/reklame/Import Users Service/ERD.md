```mermaid
erDiagram
	dgb_task ||--|| gen_imports : ""
	gen_imports ||--|| dbg_file : ""
	gen_imports }o--|| gen_import_mask : ""
	gen_imports ||--o{ gen_users_import : ""
	gen_users_import |o--o| gen_users : ""
	gen_users_import }o--o| gen_partners : ""
	gen_users }o--o| gen_partners : ""
	gen_users_removed }o--o| gen_partners : ""
	gen_users_removed |o--o{ gen_users_import : ""
```