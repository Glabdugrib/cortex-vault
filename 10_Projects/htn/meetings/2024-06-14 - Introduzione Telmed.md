HTN: Health Telematic Network, piattaforma Telmed

Servizi di telemedicina dalla consegna ai pazienti finali di device medici, dati portati sui database e creato un tracciato/workflow che coinvolge determinati attori.

Clienti principali: operatori sanitari (principalmente farmacie)

Un paziente è contraddistinto da un'anagrafica e da un diario clinico (che racchiude lo storico dei dati clinici, con grafici e tabelle).

Arruolamento: contratto - prodotto - device

Prodotto: modello del device. Device: specifica instanza unica

Workflow:
- Paziente torna in farmacia
- Paziente viene arruolato (associazione paziente-servizio associato ad un device)
- Controllo seriale macchina fisica connessa tramite usb e seriale indicato nell'arruolamento
- 

Il software (?) viene eseguito al di fuori della sendbox con opportuni grant per evitare limitazione direttamente dentro la macchina client.

Utenze:
	- admin
	- operatore sociosanitario
	- call center (assegna workflow manualmente ad uno specialista)
	- specialista (esegue analisi e produce referto)

Workflow dei dati

Interfaccia opzionale per i pazienti oppure app android per visualizzare i referti.

Tasto "Specialista" nel caso di urgenza se uno specialista non ha un pc sottomano

Refertatore occupato, possibile assegnare più referti ad uno specialista, assegnazione sempre manuale.

Alcuni tracciati vengono inviati in automatico, altri finiscono nella lista tracciati da inviare dove viene fatta un'ulteriore validazione ed inserimento dati prima dell'invio (viene inviata anche una notifica push se il paziente ha scaricato l'app).

E' possibile configurare un'assegnazione automatica dei tracciati associando specifici tipi di device a specifici specialisti per saltare la validazione del call center.