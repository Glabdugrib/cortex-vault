---
---

## Useful resources
> [!abstract]+ Repositories
> - [SendGoon API (Node.js backend)](https://git.3caravelle.net/Reklame/sendgoon-api)
> - [Dem Sender Service](https://git.3caravelle.net/Reklame/dem-sender-container-service)

> [!abstract]+ Tools
> - [LocalStack AWS](https://docs.localstack.cloud/overview/)
> - [TestContainer](https://testcontainers.com/)

> [!abstract]+ Other
> - [[Documento di funzionamento Laravel DEM.docx]]
> - [[reklame_newplatform_arch.png]]
> - Files:
> 	- GenTaskUsersImport.js
> 	- GenImportService.js

---

> [!example]+ Todo
> - Console commands
> - Detailed readme
> - Requisiti:
> 	- Procedura avanzamento per eventi con percentuale esecuzione
> 	- Mappare filtro che blocca insert utenti
> 	- CSV che contiene backup utenti sovrascritti

> [!warning]+
> 

> [!success]+
> - Docker setup w/ Laravel Sail
> - Supervisor
> - Health check (app & db, see Spatie library)


Row validation:
- is array
- same number of elements of header row
- first element not null/empty/invalid
- valid email (if not blaclisted)
- filter out by blacklists's patterns(like or =, email or domain)
- filter out removed users (gen_users_removed.deduplica=true & gen_users_import.id_user=0)
- filter out existing users (isset is_user, id_partner)
- filter out users w/out partner (id_partner=null)
- filter out user w bad status (status !in IS,DI,SB,HB,CO)
- filter out duplicated user (id_user=0)

---

`docker exec -it {container name} bash`
`mysql -u root -p`
`SHOW DATABASES;`
`CREATE SCHEMA IF NOT EXISTS `dbsendgoon-import`;`
`GRANT ALL PRIVILEGES ON `dbsendgoon-import`.* TO 'reklame'@'%' IDENTIFIED BY 'reklame';`
`FLUSH PRIVILEGES;`
`exit`

---

- Upsert SELECT FOR UPDATE con database lock
- Vedi come esegue query in GenImportedUser.setBlacklisted()

---