### Ti è mai capitato di pubblicare pacchetti node su un repo pubblico e di gestirne il versionamento? Se si quali?

Sì, mi è già capitato: ho forkato la libreria codice-fiscale-js e l’ho ripubblicata in un repository privato, gestendone il semantic versioning, per correggere bug e introdurre nuove funzionalità necessarie al progetto.

Di recente ho iniziato a lavorare come side-project ad una libreria completa e open-source per la gestione del codice fiscale italiano in JavaScript/TypeScript. È ancora in fase di definizione e raccolta requisiti, ma nasce dall’esigenza di coprire casi che le librerie esistenti gestiscono in modo incompleto, come le omocodie, alcuni edge case legati ai comuni e la mancanza di manutenzione attiva.

### Rispetto alla domanda precedente, motiva la tua scelta indicando gli aspetti su cui ti piacerebbe lavorare

Con l’aumentare della mia seniority mi sono reso sempre più conto di quanto sia difficile mantenere un livello di eccellenza sia sul backend che sul frontend: le aree di competenza crescono rapidamente e richiedono un focus sempre maggiore, per questo preferisco spostarmi verso un ruolo più frontend-oriented.

Pur avendo esperienza e interesse per il backend, oggi il ruolo di software engineer richiede un investimento costante su temi architetturali e di basso livello e trovo che a lungo termine sia più efficace verticalizzarmi sul frontend dove sento di poter dare il massimo contributo.
Inoltre mi interessa molto lavorare sulla definizione e implementazione della business logic lato applicativo e sull’esperienza utente.

Sul frontend sento di avere un’attitudine più naturale: ho un buon senso estetico, mi piace lavorare sull’interazione diretta con l’utente e sul rendere i flussi chiari, efficienti e piacevoli da usare. Nel medio periodo vorrei anche rafforzare le mie competenze trasversali in ambito UX, UI e accessibility, per collaborare in modo più efficace con design e prodotto e crescere come Frontend Engineer con una visione più ampia.

### Qual è l'architettura software più complessa sulla quale hai lavorato ed in particolare quale è stato il tuo contributo individuale?

Durante le mie esperienze ho lavorato su diverse tipologie di architetture, sia frontend che backend: monolith, modular monolith, microservizi, monorepo, serverless, SPA e SSR.

L’architettura più complessa, sulla quale lavoro attualmente, è quella di un tool di email marketing che gestisce invii massivi, analisi e reportistica. Il sistema legacy, sia frontend che backend, è in fase di sostituzione graduale tramite strangler pattern, con l’obiettivo di un rifacimento completo.

Attualmente l’architettura è a microservizi, dove convivono sistemi legacy (frontend e backend in versioni precedenti di JavaScript) e nuovi componenti a cui ho contribuito direttamente:
- Nuovo backend NestJS (modular monolith, contribuzione ~30%)
- Nuovo frontend SPA Vue 3 (contribuzione ~90%)

Per garantire un’esperienza utente fluida, il routing consente la navigazione tra legacy e nuova piattaforma con unica sessione; in questo contesto mi sono occupato dell’autenticazione custom tramite AWS Cognito, Lambda Functions e JWT.

Ho inoltre sviluppato in autonomia:
- Servizi containerizzati con AWS ECS per import massivo utenti da CSV (PHP Laravel) e gestione blacklisting (TypeScript/Node)
- Diverse Lambda Functions (TypeScript) deployate con Serverless Framework

Ho partecipato attivamente al processo decisionale sull’architettura, suggerendo soluzioni e best practice, ma la definizione complessiva è stata guidata dal CTO. Il mio ruolo principale è stato implementare e integrare i diversi componenti, spesso in autonomia, garantendo coerenza, scalabilità e manutenibilità.

### Descrivi la tua esperienza nell'utilizzo di strumenti AI-based nello sviluppo

L’utilizzo di AI è completamente integrato nel mio flusso di lavoro. Impiego principalmente Copilot (tramite Visual Studio Code) e ChatGPT per assistermi nella scrittura del codice, debugging, test, documentazione e pull request.

So scrivere prompt efficaci e so valutare eventuali hallucinations, senza prendere mai l'output come oro colato. Ho integrato nel mio IDE alcuni MCP relativi alle documentazioni di strumenti e framework che utilizzo quotidianamente. Ho anche sperimentato con approcci spec-based. 

Inoltre in azienda ho introdotto strumenti di vibe coding (es. Lovable) per la generazione di mockup interagibili da mostrare ai clienti, per raccogliere feedback e verificare requisiti prima dello sviluppo effettivo.