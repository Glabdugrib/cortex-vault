## 1. AS-IS

### 1.1 Struttura dati

Il report backend combina due domini distinti:

1. Dati **statistici consuntivi** da Tune (`TuneService.getStats`)
2. Dati **pianificati/operativi** da legacy planning DB (`PlanningService`)

Il dato `volume` non proviene da Tune, ma da planning, con priorità:

1. somma `planning.dbSources[].quantity` se presenti
2. `planning.actualVolume` se `useFirehose=true`
3. fallback su `planning.volume`

### 1.2 Costruzione righe report

Per ciascuna riga ritornata da Tune:

1. si mappa la riga in DTO report (`ReportOfferResponseDto`, `ReportAdvertiserResponseDto`, `ReportAffiliateResponseDto`)
2. si calcola volume cercando planning coerenti con dimensioni della riga Tune e periodo
3. si calcolano KPI derivati (es. eCPM, OR) usando volume come denominatore

Conseguenza: una riga esiste solo se esiste una riga Tune.

---

## 2. Problema

Oggi il report mostra solo le righe per cui Tune ha prodotto dati: se un planning esiste ma Tune non ha registrato nulla, la riga non compare.

Questo rende difficile per l'utente fare validazioni e controlli di routine, perché non si riesce a distinguere tra "non c'era niente in piano" e "c'era qualcosa in piano ma non ha generato statistiche".

---

## 3. TO-BE

### 3.1 Obiettivo

Includere nel report righe sintetiche di planning quando:

1. esiste almeno un planning coerente con filtro+periodo
2. non esiste alcuna riga Tune per la stessa chiave di aggregazione report
3. il checkbox globale "includi planning senza statistiche" è attivo (default true)

### 3.2 Requisiti

1. Scope: tutti i report (Offer, Advertiser, Affiliate)
2. Modalità: solo tabella
3. Aggregazione: coerente con aggregazione report corrente (monthly/yearly/total)
4. Non creare righe sintetiche per volumi `<=0`
5. Rendering righe: righe reale mischiate con righe sintetiche ma messe in coda
6. KPIs righe sintetiche: volume valorizzato, metriche Tune null
7. Introduzione filtro boolean globale `includePlanningsWithoutStats` attivato da checkbox lato frontend (default `true`)
8. Export: l'implementazione non è necessaria per la generazione del CSV (a meno che non sia praticamente gratis)
9. Sorting: le righe sintetiche sono sempre in coda indipendentemente dal sort.

### 3.3 Punti aperti
1. Creazione righe sintetiche per volumi` =0`?
2. Totali: le righe sintetiche concorrono al calcolo?

---

## 4. Implementazione

### 4.1 Modifica contratto API

Aggiunta parametro query (boolean) `includePlanningsWithoutStats=true` in DTO query report standard (default backend: `true`).

### 4.2 Nuovo flusso costruzione dati

Per ciascun endpoint report:

1. Recupero tutte le righe da Tune utilizzando l'aggregazione selezionata nei filtri e facendo select di un solo KPI (es. impressions) per ottimizzare
2. Costruzione set chiavi Tune presenti (`TuneKeys`)
3. Recupero planning coerenti con filtri e periodo
4. Aggregazione planning per chiave report (`PlanningKeys`)
5. Sottrazione insiemistica: `0StatsKeys = PlanningKeys - TuneKeys`
6. Creazione righe sintetiche DTO per chiavi residue
7. Merge: `TuneRows + PlanningOnlyRows`
8. Ordinamento finale con regola "planning-only in fondo"
9. Paginazione calcolata sul set di righe mergiato
10. Calcolo totali coerenti con volume complessivo