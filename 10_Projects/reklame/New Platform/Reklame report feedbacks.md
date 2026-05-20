### 1. Tune status

> _Il report non mostra la campagna di Refine “Agos Prestiti | Privata | solo email - Italia (7146)_

DONE - Filtro stati Tune errato, non rispetta la documentazione. Aggiornato

---
### 2. Ordinamento colonne

> Nuovo ordinamento colonne

DONE - Applicato sia alla tabella FE che all'export CSV, è diverso rispetto a quello ricevuto il 13 Febbraio.

> _In generale, è corretto l’ordinamento per revenue, ma a parità di revenue vorremmo vedere prima la riga con il volume più alto.

TBD - Sorting secondario per volume oneroso da implementare ora, non richiesto inizialmente.

> _Quando clicchiamo sulla colonna Periodo, l’ordinamento deve essere in ordine cronologico, quindi nel caso in cui prendiamo 2 anni, da gennaio 2025 a dicembre 2026 e non accorpato per mesi come in questo caso._

DONE - Bug FE, invertito ordine tra `month` e `year` nella composizione del payload.

---
### 3. Offer File ID

> _Manca ID sul nome crea, importante per capire a quale crea esatta ci si riferisce_

DONE - Aggiunto decoratore

---
### 4. Affiliate ID

> _Manca ID su Affiliate_

DONE - Aggiunto decoratore. Attenzione che nel caso l'ID fosse aggiunto manualmente sarebbe doppio, inoltre altri campi (Advertiser) ce l'hanno in modo discostante, devo metterlo pure lì? Gestire anche report. Export CSV??

---
### 5. Planning Senza Statistiche

> Includi Planning Senza Statistiche: così com’è strutturato non ci è utile perché spegnendolo continuiamo comunque a vedere anche gli invii con zero volume. Inoltre, provando a tenere il filtro attivo e poi spegnendolo, non cambia nulla nei dati. Cosa dovrebbe mostrare?

> Potremmo convertirlo in un bottone che escluda gli invii con volume zero? Di default lo teniamo acceso come quello di adesso.

DONE - Il bottone non serve a nascondere/mostrare gli invii con 0 volume ma ad includere anche le righe dei plannings che non hanno corrispondenza su Tune (con solo il volume popolato e tutte le altre stats a 0). Queste righe sono sempre poste nelle ultime pagine del report, a prescindere dall'ordinamento. Richiesta di Alberto Porelli il 18 Marzo.

---
### 6. Report Offer - offer files assenti nella multiselect

> Report offer: Se faccio report con tutte le crea mi escono anche creatività che però su filtro non mi trova, come mai? Come per le campagne paused, abbiamo il dubbio che ci stiamo perdendo i dati anche delle creatività non più attive.

DONE - Risolto con il punto 1, era un tema di filtri sugli status.

---
### 7. Report Offer - Countries

> Report Offer: Selezionando il country su un report diviso per mesi, per alcuni mesi il volume e le impressions sono su righe separate.

DONE - Bug fixato, problema nella gerazione delle key di ZeroStatsDto (mese string vs intero)

---
### 8. Report Affiliate

> Report Affiliate: seleziono periodo, divisione per mesi, selezione affiliato, campi opzionali solo DB source, genera.
> Vediamo anche tutte le offerte e non è possibile estrarre un report che metta a confronto le rese dei DB di un affiliato.
> Nel report che ci aspettiamo, ci deve essere solo una riga per ogni DB, con i dati totali aggregati. Se la divisione è sui mesi, un DB su ogni mese. Come facciamo ad avere questo report?

DONE - Aggiungere campo opzionale Offer in Report Affiliate

---
### 9. Scrollbar orizzontale

TODO