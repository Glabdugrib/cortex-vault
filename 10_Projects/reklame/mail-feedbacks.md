Buongiorno Federica,

abbiamo lavorato alla maggior parte dei punti elencati nel pdf, perciò vi diamo visibilità delle modifiche effettuate e rilasciate in ambiente di replica, con eventuale piccolo approfondimento. Alcuni punti sono ancora in fase di valutazione o hanno bisogno di approfondimenti, le domande seguiranno in coda.
Vi anticipo che tutto ciò che riguarda la verifica dei volumi ancora in corso, in quanto abbiamo dato priorità alle altre richieste che avrebbero impattato le nostre verifiche rendole più complesse e meno predicibili.

Punti PDF:

1. ricerca per ID affiliato
    Ora è possibile ricercare per ID, abbiamo accertato che la funzionalità fosse disponibile anche per gli altri campi di ricerca

2. Reset form
    Abbiamo modificato il comportamento delle multiselect per essere più pulite in generale, ora il campo di ricerca si pulirà automaticamente alla chiusura della multiselect

3. Filtro DB source
    Ora il filtro DB source viene applicato correttamente, nei risultati sono presenti solo righe con DB source selezionati.
    L'incongruenza sui volumi totali è ancora in fase di verifica.

4. Volumi 2 campagne stesso affiliato
    Ancora in fase di verifica

5. Verifica volumi new platform e Sendgoon
    Ancora in fase di verifica

6. Toggle planning senza statistiche
    Il toggle è stato rimosso e la logica non applicata ai report generati.

7. Volume anomalo senza optional field
    Ancora in fase di verifica

8. Duplicazione source XXX
    La duplicazione e clonazione dei planning è stata corretta per gestire anche i db source.
    Queste operazioni ora impostano un db source di default nominato XXX con volume a 0 che funga da placeholder.
    Si perderanno quindi tutti i source del planning originale da cui si duplica o clona a favore di quello placeholder.
    A differenza di ciò che era stato concordato quindi la gestione sarà automatica e non sarà necessario mantenere questo db source in tutti i planning per ritrovaselo nei planning duplicati.
    Quindi quando avrete il source definitivo potrete tranquillamente sovrascriverlo.

9. Export excel
    L'export è stato modificato per esplodere i planning che hanno X Db sources in X righe diverse, è stata mantenuta la struttura della prima lavorazione.
    Perciò sulla riga dedicata al db source troverete: tutte le info del planning duplicate, il volume impostato a 0 e le info del db valorizzate (DB source nome, DB source volume, DB source note).
    Inoltre essendo questa modalità di export fissa e che la richiesta di integrazione dei dati db source aggiuntive (click, impressions...) da Tune è ancora in valutazione è stata aggiunta una quarta riga dedicata solo al planning.

    Es. Planning con volume 10.000 con 2 DB source
    Riga 1: Planning volume 10.000
    Riga 2: DB source 1 volume 0 e DB source volume 3.000
    Riga 3: DB source 2 volume 0 e DB source volume 7.000

    Questo è stato fatto perché attualmente le righe db source ereditano i dati del planning, per cui eventuali aggregazioni del csv evidenzierebbero delle metriche duplicate (click, impressions...).
    In questo modo potrete facilmente escludere le righe DB source e far affidamento sulla riga generica del planning che conterrà la somma dei volumi, come è sempre stato.
    Fateci sapere se questo punto è chiaro e soprattutto se va bene o avete richieste.

10. Source senza volume
      Ora i source salavati senza volume saranno correttamente salvati con valore di default 0


I punti del PDF sono conclusi, tuttavia, come anticipato ad inizio mail vi lasciamo in coda tutte le domande che sono sorte in fase di analisi delle richieste.

D1. Relativamente al punto 8, dopo la duplicazione vengono persi tutti i db source a favore del placeholder XXX con volume a 0, anche il volume generale del planning va resettato a 0?

D2. Relativamente al punto 3, da ciò che ci risulta non tutti gli eventi ricevuti da Tune hanno il DB source valorizzato, se ci sono degli eventi ricevuti prima di aggiornare il DB source per esempio quelle righe di Tune non avranno il DB Source
Fateci sapere se il trattino è una soluzione che può andare bene o avete altre richieste in merito

D3. La questione del DB source %%PARTNER%% non ci è molto chiara come dovrebbe funzionare, sia all'interno del vostro flusso di lavoro sia da un punto di vista tecnico.
Tra le altre cose nell'attuale sistema porterebbe ad una sovrastima dei volumi in quanto non sarebbe nota la vera suddivisione dei volumi dinamici al suo interno.