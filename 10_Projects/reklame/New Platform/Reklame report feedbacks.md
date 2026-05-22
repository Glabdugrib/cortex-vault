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

### 10. Goals non calcolati

Chiamata
```bash
curl -X 'GET' \ 'http://localhost:3000/v2/reports/offers?startDate=2025-02-01&endDate=2025-02-28&periodAggregation=year&includePlanningsWithoutStats=true&sortBy=%2Bname%2C-createdAt&optionalFields=offerFile&optionalFields=advertiser&offerIds=6800&offerIds=7163&offerIds=7380&offerFileIds=65278&page=1&limit=50' \ -H 'accept: application/json' \ -H 'x-auth: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjI1LCJpbnN0YWxsYXRpb25faWRfc2ciOjIsImxhbmciOiJpdCIsImlhdCI6MTc3NTYzODk3MCwiZXhwIjo5OTk5OTk5OTk5fQ.o__H4-G9gkIO2oybqTuo8LW0jeUwSDDfBiHzbgNFDWsyDdx7wOixkTTrADA5mKbYWq45SIke3LFU7JSOZGrDtp_81ES3yESjlT5UCX4ng30A0cgOAa1YwBKh-Ym57Yerq8rQDSGyrWt92Iaup25exhJUQEcPX8g9WReGjuT-XBFzCp8BXz7XVUEkKQbSFBYZww_VC5WfM7madhaSXnAopRqZCpE0_VMN1kJArHgzsiCUkQWK8wisRzbZ6kq6R9_GwM4-Fr87RWqOitoZNSOFWTzyyHzkgcKDsNlV64y8pOY9mEf3UqICRv3PQs0G9z-wt2E17F7UqEZEUq5Mny5Gqw'
```

Response
```json
{
   "meta":{
      "total":1,
      "page":1,
      "limit":50,
      "totalPages":1
   },
   "data":[
      {
         "clicks":8202,
         "conversions":256,
         "cr":0.031212,
         "ctr":0.010741,
         "ecpmAdvertiser":0.7067397109967477,
         "ecpmAffiliate":0.3979757017820499,
         "impressions":763581,
         "margin":1767.2,
         "or":0.13341236471263473,
         "payout":2277.8,
         "year":2025,
         "revenue":4045,
         "volume":5723465,
         "sales":0,
         "goals":[
            {
               "id":"0",
               "name":"CPL altre città",
               "offerId":"7163",
               "offerFileId":"65278",
               "advertiserId":"1526",
               "conversions":160,
               "cr":0.019507,
               "year":2025,
               "key":"7163-65278-1526--2025"
            },
            {
               "id":"2192",
               "name":"CPL Bergamo e Genova Città",
               "offerId":"7163",
               "offerFileId":"65278",
               "advertiserId":"1526",
               "conversions":5,
               "cr":0,
               "year":2025,
               "key":"7163-65278-1526--2025"
            },
            {
               "id":"2181",
               "name":"CPL Zone Partner",
               "offerId":"7163",
               "offerFileId":"65278",
               "advertiserId":"1526",
               "conversions":20,
               "cr":0,
               "year":2025,
               "key":"7163-65278-1526--2025"
            },
            {
               "id":"2180",
               "name":"CPL Napoli Città",
               "offerId":"7163",
               "offerFileId":"65278",
               "advertiserId":"1526",
               "conversions":22,
               "cr":0,
               "year":2025,
               "key":"7163-65278-1526--2025"
            },
            {
               "id":"2045",
               "name":"CPL Milano città",
               "offerId":"7163",
               "offerFileId":"65278",
               "advertiserId":"1526",
               "conversions":49,
               "cr":0,
               "year":2025,
               "key":"7163-65278-1526--2025"
            }
         ],
         "offerId":7163,
         "offer":"Realhizza NEW | Geotarget - Italia (7163)",
         "offerFileId":65278,
         "offerFile":"Termosifone - dal 04.01 - NON UTILIZZARE (65278)",
         "advertiser":"Homepanda Srl (1526)",
         "advertiserId":1526
      }
   ],
   "totals":{
      "clicks":8202,
      "conversions":256,
      "cr":0.0312119,
      "ctr":0.01074149,
      "ecpmAdvertiser":0.7067397109967477,
      "ecpmAffiliate":0.3979757017820499,
      "impressions":763581,
      "margin":1767.2,
      "or":0.13341236471263473,
      "payout":2277.8,
      "revenue":4045,
      "volume":5723465,
      "sales":0
   }
}
```

Chiamata Tune
```bash
curl https://reklame.api.hasoffers.com/Apiv3/json?NetworkToken=NETLfJOxbbKEdGyWsFayvQpLsyQllP&Target=Report&Method=getStats&fields[]=Stat.advertiser_id&fields[]=Advertiser.company&fields[]=OfferFile.display&fields[]=Stat.offer_file_id&fields[]=Stat.year&fields[]=Goal.name&fields[]=Stat.goal_id&fields[]=Stat.offer_id&fields[]=Stat.ltr&fields[]=Stat.conversions&filters[Stat.offer_file_id][conditional]=EQUAL_TO&filters[Stat.offer_file_id][values]=65278&filters[Stat.offer_id][conditional]=EQUAL_TO&filters[Stat.offer_id][values]=7163&filters[Stat.date][conditional]=BETWEEN&filters[Stat.date][values][]=2025-02-01&filters[Stat.date][values][]=2025-03-28&limit=1000&page=1&totals=0
```

Response Tune
```json
{
  "request": {
    "Target": "Report",
    "Format": "json",
    "Service": "HasOffers",
    "Version": "2",
    "NetworkToken": "NETLfJOxbbKEdGyWsFayvQpLsyQllP",
    "Method": "getStats",
    "fields": [
      "Stat.advertiser_id",
      "Advertiser.company",
      "OfferFile.display",
      "Stat.offer_file_id",
      "Stat.year",
      "Goal.name",
      "Stat.goal_id",
      "Stat.offer_id",
      "Stat.ltr",
      "Stat.conversions"
    ],
    "filters": {
      "Stat.offer_file_id": {
        "conditional": "EQUAL_TO",
        "values": "65278"
      },
      "Stat.offer_id": {
        "conditional": "EQUAL_TO",
        "values": "7163"
      },
      "Stat.date": {
        "conditional": "BETWEEN",
        "values": [
          "2025-02-01",
          "2025-03-28"
        ]
      }
    },
    "limit": "1000",
    "page": "1",
    "totals": "0",
    "_": "1779439436563"
  },
  "response": {
    "status": 1,
    "httpStatus": 200,
    "data": {
      "page": 1,
      "current": 1000,
      "count": 5,
      "pageCount": 1,
      "data": [
        {
          "Stat": {
            "advertiser_id": "1526",
            "offer_file_id": "65278",
            "year": "2025",
            "goal_id": "2192",
            "offer_id": "7163",
            "ltr": "0.00000",
            "conversions": "6"
          },
          "Advertiser": {
            "company": "Homepanda Srl (1526)"
          },
          "OfferFile": {
            "display": "Termosifone - dal 04.01 - NON UTILIZZARE"
          },
          "Goal": {
            "name": "CPL Bergamo e Genova Città"
          }
        },
        {
          "Stat": {
            "advertiser_id": "1526",
            "offer_file_id": "65278",
            "year": "2025",
            "goal_id": "2045",
            "offer_id": "7163",
            "ltr": "0.00000",
            "conversions": "68"
          },
          "Advertiser": {
            "company": "Homepanda Srl (1526)"
          },
          "OfferFile": {
            "display": "Termosifone - dal 04.01 - NON UTILIZZARE"
          },
          "Goal": {
            "name": "CPL Milano città"
          }
        },
        {
          "Stat": {
            "advertiser_id": "1526",
            "offer_file_id": "65278",
            "year": "2025",
            "goal_id": "2180",
            "offer_id": "7163",
            "ltr": "0.00000",
            "conversions": "27"
          },
          "Advertiser": {
            "company": "Homepanda Srl (1526)"
          },
          "OfferFile": {
            "display": "Termosifone - dal 04.01 - NON UTILIZZARE"
          },
          "Goal": {
            "name": "CPL Napoli Città"
          }
        },
        {
          "Stat": {
            "advertiser_id": "1526",
            "offer_file_id": "65278",
            "year": "2025",
            "goal_id": "2181",
            "offer_id": "7163",
            "ltr": "0.00000",
            "conversions": "20"
          },
          "Advertiser": {
            "company": "Homepanda Srl (1526)"
          },
          "OfferFile": {
            "display": "Termosifone - dal 04.01 - NON UTILIZZARE"
          },
          "Goal": {
            "name": "CPL Zone Partner"
          }
        },
        {
          "Stat": {
            "advertiser_id": "1526",
            "offer_file_id": "65278",
            "year": "2025",
            "goal_id": "0",
            "offer_id": "7163",
            "ltr": "1.92820",
            "conversions": "197"
          },
          "Advertiser": {
            "company": "Homepanda Srl (1526)"
          },
          "OfferFile": {
            "display": "Termosifone - dal 04.01 - NON UTILIZZARE"
          },
          "Goal": {
            "name": "CPL altre città"
          }
        }
      ]
    },
    "errors": [],
    "errorMessage": null
  }
}
```