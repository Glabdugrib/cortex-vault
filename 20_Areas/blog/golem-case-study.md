# Golem Booking — Sistema di prenotazione tavoli per ludoteca

<!-- HOOK -->

Un'associazione di volontariato gestiva le prenotazioni della propria ludoteca tramite fogli Excel sparsi su Google Sheets: overbooking, conflitti tra volontari, zero visibilita sui posti disponibili. Serviva un sistema che rendesse la gestione autonoma, in tempo reale, e a costo zero infrastrutturale.

---
## The Context

- **Chi aveva il problema** — Un'associazione no-profit che gestisce una ludoteca reale, con volontari che coordinano sale, tavoli e fasce orarie
- **Cosa esisteva prima** — Fogli Google Sheets multipli, gestiti manualmente, soggetti a errori di concorrenza e overbooking
- **Perche costruirlo** — Eliminare la gestione manuale caotica; dare visibilita immediata sulla disponibilita sia allo staff che ai giocatori

---
## The Users

- **Staff/volontari** — Configurano le sale (tavoli, posti, fasce orarie), generano le disponibilita per date specifiche, gestiscono le prenotazioni
- **Giocatori** — Consultano la disponibilita, prenotano un posto a un tavolo in autonomia, gestiscono i propri dati (nome, contatto Telegram)
- **Vincoli** — Interfaccia semplice e immediata; nessun login richiesto (al momento); supporto multi-lingua (IT/EN)

---
## The Solution — Overview

- **Cosa fa** — Applicazione web che permette di visualizzare e prenotare posti ai tavoli di una ludoteca, organizzati per sala, data e fascia oraria (mattina/pomeriggio/sera)
- **Come risolve il problema** — Sostituisce i fogli Excel con una griglia interattiva in tempo reale: ogni tavolo mostra i posti occupati e disponibili, con gestione dei conflitti di concorrenza
- **Flusso principale** — L'utente seleziona una data → visualizza la griglia sale/fasce/tavoli → clicca su uno slot libero → aggiunge il proprio nome come partecipante

---
## Under the Hood — Implementation

### Architecture

- **Monorepo** gestito con Turborepo + pnpm workspaces
- **Frontend**: Vue 3 SPA (Vite) → chiama API REST via Axios
- **Backend**: 14 AWS Lambda functions (Node.js 20) dietro API Gateway HTTP v2
- **Database**: 2 tabelle DynamoDB (rooms, reservations) con billing on-demand
- **Shared types**: package `@golem/common` condiviso tra frontend e backend (DTOs, enums, request types)
- **CI/CD**: GitHub Actions → deploy backend via Serverless Framework (OIDC, no credenziali statiche)

### Key Decisions

| Decisione | Motivazione |
|---|---|
| **Serverless (Lambda + DynamoDB on-demand)** | Costo ~zero per un'associazione no-profit; nessun server da mantenere; scaling automatico |
| **Monorepo con shared types** | Contratto API garantito a compile-time tra frontend e backend; singolo repo da gestire |
| **DynamoDB con partitioning per data** | Le query sono quasi sempre per data; la partition key `date` + sort key `id` copre il pattern di accesso principale |
| **14 Lambda separate (1 per operazione)** | IAM roles per-function (principio del least privilege); deploy indipendente; cold start ridotto per funzione |
| **Zod + Middy per validazione** | Validazione schema-driven all'ingresso di ogni handler; type inference automatica |
| **TanStack Query (frontend)** | Cache, refetch, invalidation automatica; gestione stato server senza store globale |
| **tsyringe (DI nel backend)** | Singleton dei servizi riutilizzati tra invocazioni warm della Lambda; testabilita tramite mock injection |

### Problems Encountered

- **Concorrenza sulle prenotazioni** — Due utenti che modificano lo stesso partecipante contemporaneamente possono sovrascriversi a vicenda (classico lost update su DynamoDB)
- **Batch write con throttling** — La configurazione di una sala genera un prodotto cartesiano (date x fasce x tavoli) che puo superare i limiti di batch write di DynamoDB (25 items/batch)
- **Monorepo setup** — Coordinare build order, shared types, e TypeScript project references tra 4 package con toolchain diverse (Vite, esbuild, tsc)

### How You Solved Them

- **Optimistic locking** — `UpdateItem` con `ConditionExpression` su `updatedAt`: se il record e cambiato dal momento della lettura, ritorna 409 CONFLICT. Error type custom (`ConcurrencyConflictError`) propagato al client
- **Chunking + retry con backoff** — Batch writes spezzati in chunk da 25 item; utility `retry()` con max 4 tentativi; i chunk falliti vengono tracciati nella risposta (`reservations_error`) per gestione parziale
- **Turborepo task pipeline** — `turbo.json` definisce le dipendenze tra task (`build` di `common` prima di `api` e `frontend`); `pnpm workspaces` per la risoluzione dei package locali

---

## Stack

| Technology | Why |
|---|---|
| **Vue 3 + Composition API** | Composables per logica riutilizzabile; reattivita granulare; ecosistema maturo |
| **Vite** | HMR istantaneo; build veloce; plugin ecosystem (Tailwind, Vue DevTools) |
| **TanStack Vue Query** | Gestione stato server (cache, refetch, mutations) senza boilerplate |
| **PrimeVue + Tailwind CSS** | Componenti pronti (dialog, skeleton, button) + utility classes per layout custom |
| **AWS Lambda (Node.js 20)** | Pay-per-invocation: costo proporzionale all'uso reale; zero costo a riposo |
| **DynamoDB (on-demand)** | Nessun provisioning; latenza single-digit ms; partition key = data per query efficienti |
| **Serverless Framework** | IaC dichiarativa per Lambda + API Gateway + DynamoDB; plugin per IAM per-function |
| **Turborepo + pnpm** | Build caching; task orchestration; workspace protocol per shared packages |
| **TypeScript** | Type safety end-to-end; contratto API condiviso via `@golem/common` |
| **Zod** | Schema validation con type inference; integrato con Middy middleware |
| **Vitest + MSW** | Test runner veloce (compatibile Vite); MSW per mock HTTP realistici nel frontend |
| **GitHub Actions** | CI/CD con OIDC per deploy sicuro su AWS senza credenziali statiche |

---

## The Result

- **Stato attuale** — In sviluppo attivo; backend deployato su AWS (eu-central-1); frontend funzionante in locale con mock (MSW) e connessione a API reali
- **Cosa funziona oggi** — CRUD completo su sale, tavoli, prenotazioni e partecipanti; griglia di prenotazione interattiva; gestione conflitti di concorrenza; configurazione batch delle disponibilita; i18n IT/EN
- **Cosa cambierei** — Nessun rimpianto sulle scelte tecnologiche; lo stack serverless e appropriato per il contesto no-profit e il pattern di utilizzo

---

## What's Next

- **Autenticazione** — Integrazione AWS Cognito per distinguere admin (volontari) e utenti (giocatori)
- **Feature mancanti** — Completare i dialog di aggiornamento prenotazione; gestione orari di apertura per fascia; notifiche
- **Polish** — Rifinitura UX (loading states, background dinamico per fascia oraria, hover effects); accessibility audit; ottimizzazione bundle size
- **Go-live** — Deploy frontend (presumibilmente S3 + CloudFront); testing end-to-end; onboarding dei volontari
