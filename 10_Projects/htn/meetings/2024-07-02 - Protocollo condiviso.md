REST API

Standard HATEOAS
	Tema refs ?

1. embed diretto entity + codice http
2. ritornare di default 200

[Zalando REST API guidelines](https://opensource.zalando.com/restful-api-guidelines/#table-of-contents)

Nel caso vengano inviate più info del necessario dal frontend: validazione rigida, strongly typed. Richiedi sviluppo in parallelo perché provoca breaking changes

Versioni API

PUT/PATCH: se serve, caso per caso

Convenzione attributi snake_case x json, parsing fatto da Axios

Tipo boolean: solo true/false, no stringhe

Date: [convenzione ISO](https://opensource.zalando.com/restful-api-guidelines/#data-formats)

Internazionalizzazione: salvataggio a database della lingua preferita

Mapping dei codici degli errori a frontend con descrizione tradotta corrispondente
Il backend restituisce un codice di errore?

Non esporre ID entità

Idempotenza API

Definizione next step?
	- lettura guida Zalando
	- consolidare quanto detto in documentazione
	- autenticazione + autorizzazione + SSO (solo endpoint, ottenere info se loggato o meno chiamando /user-info)
	- 