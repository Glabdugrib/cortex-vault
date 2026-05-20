Requisiti:
- gestione custom url
- gestione high frame
- esecuzione app java in locale

SSO
Rest/GraphQL
Documentazione interna
Tenere aperta porta re-branding o white-labelling
Angular/Vue
Microfrontend
Modularity
Definizione task

Da approfondire:
- authorization
- api documentation
- check contratto api
- 
  
**Appunti Alberto:**
- macro-requisiti NF FE
	- modularizzazione e organizzazione repo/progetti
	- rebranding + white label: sia deploy installazioni diverse che customizzazione a runtime -> NB alcune configurazioni ricevute da backend
	- SPA responsive
	- internazionalizzazione
- integrazione BE-FE
	- stabilire e definire modalità comunicazione -> REST + convenzioni formato response/errori/filter etc. - openapi + versioning (nb: validazione contratto https://www.sergigisbert.com/blog/validating-api-requests-and-json-schemas-with-postman/)
	- integrazione SSO
	- authorization
	- framework feature flags e configurazioni -> guida il BE
		- global
		- per installazione
		- per user
- scelta framework FE e lib UI