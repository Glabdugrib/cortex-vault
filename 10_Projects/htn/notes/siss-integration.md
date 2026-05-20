# SISS Integration - Functional requirements

## Scopo  
Questa integrazione consente agli operatori accreditati presso Regione Lombardia di inviare specifici tracciati al repository SISS, garantendo la conformità ai requisiti regionali e la gestione sicura delle sessioni di autenticazione SISS.

## Contesto  
- L’operatore deve essere accreditato presso Regione Lombardia ed essere in possesso di credenziali SISS.
- L’invio dei tracciati è consentito solo per pazienti assistibili dalla Regione Lombardia (verifica tramite API dedicata, accessibile solo con sessione SISS attiva).
- I tracciati devono essere inviati entro 24h dalla loro generazione.

---

## Features

### 1. Gestione Login SISS
- Dopo il login applicativo standard (Telmed) e alla selezione di un prodotto abilitato SISS, deve essere proposto un popup di login SISS.
- Il popup di login SISS è bloccante: nessuna altra operazione è consentita finché non viene completato o annullato.
- Il popup può essere chiuso dall’utente (azione di cancel).
- Il frontend deve reagire alla callback di login SISS aggiornando lo stato di autenticazione.

### 2. Stato SISS nell’Header
- L’header dell’applicazione deve mostrare lo stato della sessione SISS (loggato/non loggato).
- Lo stato è visibile solo agli operatori che soddisfano le condizioni di accreditamento e selezione prodotto abilitato.

### 3. Gestione Coda Tracciati
- I tracciati che non possono essere inviati per assenza di sessione SISS vengono messi in coda.
- La coda viene processata automaticamente al successivo login SISS.
- L’utente non gestisce manualmente la coda; la gestione è automatica.
- Se un tracciato resta in coda oltre 24h, deve essere segnalato tramite log tecnico (vedi terminale Electron).

### 4. Notifiche e Feedback
- Il frontend deve notificare all’operatore la presenza di tracciati in coda tramite badge numerico persistente nell’header.
- Deve essere notificato anche l’invio avvenuto dei tracciati (es. messaggio temporaneo o log).
- Non è necessario distinguere visivamente i referti SISS da altri, salvo quanto sopra.

### 5. Terminale Electron
- Ogni evento rilevante (es. tracciato in coda oltre 24h, invio riuscito, errori di autenticazione) deve essere registrato come log tecnico nel terminale Electron.

### 6. Sicurezza e Token
- Il token SISS deve essere separato dalla sessione applicativa standard.
- Il frontend deve gestire la scadenza del token SISS e richiedere nuovamente il login quando necessario.

---

## Implicazioni Frontend

- Implementazione di un popup modale bloccante per il login SISS.
- Aggiornamento dinamico dello stato SISS nell’header.
- Visualizzazione badge numerico per tracciati in coda.
- Gestione automatica della coda e delle notifiche di invio.
- Logging tecnico su terminale Electron per eventi chiave.

---