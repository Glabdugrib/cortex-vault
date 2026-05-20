# Software Engineer - Product Minded | 2hire

Software Engineer - Product Minded: entra in 2hire per plasmare la piattaforma di mobilità globale. Remoto o Roma, focus backend, autonomia, crescita e impatto reale.

## Prodotto

**Hai mai lavorato in un'azienda di prodotto (startup, scale-up o simile)? Descrivi brevemente il contesto: dimensione del team, cosa costruivate, e qual era il tuo perimetro di responsabilità reale.**

Sì, ho lavorato in Contents.com, una scale-up nel settore AI. Team di 20+ persone tra developer, data scientist e PM. Costruivamo una piattaforma SaaS e diverse soluzioni B2B Enterprise per la creazione di contenuti tramite modelli di AI generativa, pipeline e flussi di lavoro integrati pensati anche per utenti non tecnici, con focus su marketing, copywriting e content generation.

Il mio perimetro era sviluppo feature end-to-end, frontend e backend. Mi coordinavo attivamente con i PM per bilanciare la velocità di rilascio richiesta dalla crescita aziendale con la necessità di consolidare la codebase. Ho guidato la definizione di design pattern e convenzioni di progetto su entrambi i lati dello stack su mia proposta, ad esempio:
- Backend: RESTful API secondo le linee guida Zalando
- Frontend: container-presentational pattern, composition API, composable riutilizzabili e store management.

Ho anche sviluppato da zero progetti B2B Enterprise per clienti specifici, contribuendo a farli evolvere in una piattaforma whitelabel multi-tenant standalone.

---

## Decisioni

**Raccontaci un caso in cui hai dovuto prendere una decisione tecnica in autonomia: un trade-off su architettura, tecnologia o approccio. Come hai ragionato e cosa è successo dopo?**

Nel progetto di una piattaforma di email marketing multi-tenant B2B in 3 Caravelle (società di consulenza per cui attualmente lavoro), dovevo progettare un flusso SSO custom con AWS Cognito che si integrasse sia con la piattaforma legacy a microservizi (Node.js e PHP) sia con la nuova piattaforma in NestJS (ancora in fase di sviluppo). Il requisito chiave era che fosse un modulo autonomo e flessibile, disaccoppiato da entrambi i sistemi.

L'alternativa più immediata era un servizio containerizzato, ma il volume di utenti non giustificava un container attivo 24/7 visto che si tratta di un prodotto B2B utilizzato da pochi operatori. Ho proposto l'utilizzo di Lambda functions con Serverless Framework, uno stack che l'azienda non aveva mai adottato. Ho strutturato il progetto con Turborepo per gestire i package condivisi tra le diverse Lambda, e integrato Middy per middleware condivisi.

Ho studiato l'approccio da documentazione ufficiale, blog tecnici e AI, poi ho presentato pro e contro al CTO e, dopo i feedback, limato la soluzione per renderla ancora più ottimale. Ho implementato l'intera soluzione in autonomia, il progetto è andato da poco in produzione.

---

## AI

**Come utilizzi oggi gli strumenti AI nel tuo lavoro quotidiano? Sii specifico/a: non ci interessa il nome del tool, ci interessa come lo integri nel tuo processo, dove metti il tuo giudizio e come pensi abbia cambiato il tuo approccio al lavoro.**

L'AI è parte integrante del mio processo, che non utilizzo in modalità "autopilot" ma come strumento di ragionamento e supporto. La uso molto prima ancora di scrivere codice: per studiare nuovi argomenti, fare brainstorming, analizzare requisiti tecnici e di prodotto, e soprattutto per mettere sotto stress le mie idee e convinzioni, per verificare se reggono e se ci sono aspetti che non ho considerato.

Una volta chiariti requisiti, approccio e step di implementazione, procedo in modalità agent nell'IDE, uno step alla volta e in modo controllato. Revisiono ogni output, correggo, miglioro le indicazioni in modo iterativo. Non accetto mai nulla passivamente ma verifico eventuali allucinazioni facendo cross-reference tra fonti e modelli diversi.

Ho scritto prompt riutilizzabili per task ripetitive come scrittura di test, documentazione, email, task description in modo che rispettino standard e convenzioni coerenti e applichino una sorta di mio "brand identity".

Un esempio concreto di utilizzo non convenzionale: su un progetto di telemedicina enterprise, in assenza di un designer e con requisiti UX ancora vaghi, ho usato il vibe coding per costruire un mockup navigabile da mostrare direttamente al cliente. Ha fatto emergere aspettative e dubbi che una raccolta requisiti classica non avrebbe intercettato, riducendo significativamente il rischio di rework. Da quel momento è diventato lo standard adottato dal team.

---

## Interazione

**Hai mai dovuto interagire con una parte del sistema che non conoscevi (legacy, infrastruttura, protocollo di terze parti) senza avere documentazione chiara? Com'è andata?**

Mi è successo spesso e capita ancora oggi. A tutti piace scrivere codice da zero usando lo stack più recente, ma la realtà è che spesso ci si trova a confrontarsi con prodotti legacy invecchiati male e soprattutto mal documentati.

Uno dei casi più significativi: sempre nel progetto di email marketing B2B in 3 Caravelle, mi è stato chiesto di riscrivere da zero un servizio containerizzato (prodotto da l'ex partner IT del nostro cliente) che gestiva l'import massivo di utenti da file CSV, nell'ordine delle centinaia di migliaia di record. Prima di scrivere una riga di codice ho ricostruito l'intero flusso dati del servizio legacy tramite diagrammi Mermaid, perché senza documentazione era l'unico modo per capire davvero cosa facesse. Questa fase di analisi ha messo in luce non solo problemi implementativi ma anche aspetti di prodotto del flusso che potevano essere migliorati.

Più in generale, quando devo mettere mano a codice legacy non mio e senza documentazione, il mio approccio è partire dall'alto: uso l'AI per analizzare la repository e ottenere una prima visione d'insieme e poi entro progressivamente nel dettaglio in modo granulare, file per file e metodo per metodo, fino ad avere un quadro chiaro prima di toccare qualsiasi cosa.

---

## RAL Desiderata

**Che desiderata hai in termini di RAL? (inserisci una cifra esatta oppure un range)**

La mia desiderata è di 50-55k, anche dipendentemente da eventuali benefit, equity e piani di crescita.

---

## Cover Letter

Ciao! Sono Simone, full-stack software engineer con 5 anni di esperienza ed expertise in diversi domini di prodotto e realtà aziendali, dalla scale-up alla consulenza. Ho lavorato con stack tecnologici molto variegati ma sicuramente do il mio meglio con Typescript.

Dopo due anni in consulenza voglio tornare a lavorare in un contesto di prodotto dove posso avere un impatto reale. Mi intriga il tema della mobilità connessa perché è un tipo di complessità diverso da qualsiasi cosa su cui abbia lavorato finora. Non siete un MVP alla ricerca di validazione e neanche una realtà troppo strutturata dove si finisce a fare l'ingranaggio, ma della dimensione giusta per quello che sto cercando.

Mi viene naturale chiedermi perché si sta costruendo qualcosa, non solo come, e questo mi ha portato spesso a contribuire oltre il perimetro tecnico. Il modo in cui vi raccontate, diretto, orientato ai risultati, è il modo in cui lavoro anch'io.

Inoltre lo stack è praticamente lo stesso, quindi posso apportare valore aggiunto fin da subito.