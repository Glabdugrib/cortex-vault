# Cypress

2 approaches:
- True E2E
- Mocked E2E/UI Integration

Strategia E2E con mock / stub (Cypress) + contract testing (Pact).

A che punto del SDLC eseguire i test e con quale frequenza?

---

|Aspetto|[EnrollmentView.cy.ts](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html)|[EnrollmentFlow.cy.ts](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html)|
|---|---|---|
|Obiettivo|Copre molti scenari della vista|Copre 1 flusso end-to-end specifico|
|Struttura suite|Più describe/it, file grande|Struttura compatta e focalizzata|
|Setup iniziale|beforeEach con visit semplice|beforeEach con stub di auth/bootstrap completi|
|Mock API|Intercept distribuiti nei test, a volte dopo azioni|Intercept principali definiti prima delle azioni|
|Sincronizzazione|Molti wait annidati con then|Sequenza lineare di wait su alias chiari|
|Selettori|Prevalenza di data-testid + contains testuale|Prevalenza di data-cy stabili|
|Robustezza ai cambi UI/copy|Media (contains su testo può rompersi)|Alta (selector semantici e meno legati al copy)|
|Manutenibilità|Più debito tecnico (blocchi commentati/TODO)|Più pulito e pronto per CI|
|Chiarezza narrativa|Copertura ampia ma eterogenea|Flusso leggibile “Arrange-Act-Assert”|
|Allineamento best practice E2E|Parziale|Più allineato (mock-first, deterministico, selector stabili)|

---

## As Is
### 1) Stato generale

Il progetto è strutturalmente solido e maturo per delivery continuo, con pipeline CI/CD presenti, ambienti runtime gestiti e osservabilità integrata.  

I principali gap attuali sono su:
1. qualità statica TypeScript (deprecazione configurazione),
2. igiene documentazione (molti warning markdownlint),
3. hardening sicurezza/consenso (PII Sentry, token/config client-side da governare meglio).

Valutazione sintetica:
1. Architettura: Buona.
2. Operatività CI/CD: Buona.
3. Qualità automatica: Discreta.
4. Sicurezza/configuration hygiene: Discreta con punti di attenzione.

### 2) Architettura e struttura applicativa

Struttura FE modulare e coerente:
1. Entry/app bootstrap in [main.ts](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html).
2. Routing centralizzato con guard di auth/autorizzazione in [index.ts](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html).
3. Moduli funzionali verticali in [modules](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html): dashboard, enrollment, exams, patients, report, settings.
4. Core condiviso in [core](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html) (store, servizi, provider, composables, layout).
5. Convenzioni documentate in [conventions.md](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html).

Punti architetturali rilevanti:
1. Runtime config dinamica: caricamento di config.js lato container e risoluzione env in bootstrap.
    Evidenze: [entrypoint.sh](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html), [env-config.ts](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html), [main.ts](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html).
2. Plugin app ben incapsulati (Pinia, Router, i18n, PrimeVue, CASL).  
    Evidenza: [vue-plugins.ts](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html).
3. Controllo versione SPA via Service Worker e check su navigazione.  
    Evidenze: [service-worker.js](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html), [index.ts](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html), [nginx.conf](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html).

### 3) Stack, dipendenze e build

Stack principale:
1. Vue 3 + TypeScript + Vite.
2. Pinia, Vue Router, PrimeVue, Tailwind.
3. Axios e client OpenAPI generato.
4. Vitest e Cypress.
5. Sentry + Google Analytics con cookie consent.

Evidenze: [package.json](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html), [vite.config.ts](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html), [vitest.config.ts](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html), [README.md](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html).

Build e packaging:
1. Build Vite con sourcemap hidden e upload sourcemap su Sentry.
2. Compressione gzip via plugin.
3. Base path applicativo impostato per deploy sotto /fe.  
    Evidenza: [vite.config.ts](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html).

API client:
1. Generazione automatica da OpenAPI via script Dockerizzato.
2. Dipendenza operativa da repository fratello contracts.  
    Evidenze: [generate-api.sh](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html), [telmed.yaml](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html), [client](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html).

### 4) Qualità tecnica (test, lint, typing)

Copertura test rilevata nel codice:
1. Unit test: 7 file spec.  
    Esempi in [api.service.spec.ts](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html), [useEnrollmentSteps.spec.ts](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html).
2. E2E test: 4 spec Cypress.  
    Evidenze in [e2e](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html).

CI di verifica:
1. Workflow PR su main esegue install, lint, build.  
    Evidenza: .gitea/workflows/verify-build.yml.

Issue qualità attualmente emerse dal language/lint system:
1. Deprecazione TypeScript su baseUrl in [tsconfig.app.json](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html) (riflessa anche su [tsconfig.vitest.json](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html)).
2. Numerosi warning markdownlint in [README.md](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html) e [conventions.md](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html).

Nota importante:
1. Non ho eseguito test runtime; la fotografia è basata su configurazioni, workflow e diagnostica editor.

### 5) Sicurezza e gestione segreti/config

Controlli positivi:
1. Header di sicurezza base e policy cache robuste per asset/versioning/config.  
    Evidenza: [nginx.conf](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html).
2. Flow consenso cookie implementato e gating dei provider osservabilità.  
    Evidenze: [cookie-banner.provider.ts](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html), [cookie-consent.storage.ts](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html).

Punti di attenzione:
1. Sentry configurato con invio PII abilitato.  
    Evidenza: [sentry.provider.ts](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html).
2. Valori di configurazione sensibili/non-segreti ma delicati (dsn, tracking id, token dotvocal) presenti in file runtime env client-side.  
    Evidenze: [env.stage.ts](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html), [env.prod.ts](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html), [env.dev.ts](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html), [env.e2e.ts](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html).
3. In ambiente E2E è attivo skipAuth, corretto per test ma da evitare fuori perimetro.  
    Evidenza: [env.e2e.ts](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html).
4. Tipo EnvConfig molto permissivo per via indice any, riduce la protezione di tipo.  
    Evidenza: [env-config.interface.ts](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html).

### 6) CI/CD e lifecycle rilascio

Workflow presenti e ben separati:
1. Build/publish immagine FE: .gitea/workflows/build-and-publish.yml.
2. Build/publish immagine Prism mock: .gitea/workflows/build-and-publish-prism.yml.
3. Release automation: .gitea/workflows/release-please.yml.
4. Maintenance dipendenze browserlist: .gitea/workflows/update-browserslist.yml.
5. Pulizia tag docker: .gitea/workflows/docker-cleanup.yml.
6. Esecuzione locale workflow via act documentata in .actrc.

Valutazione:
1. Pipeline completa per build/release/maintenance.
2. Buona automazione, con margine di rafforzamento su quality gates aggiuntivi (type-check/test come gate obbligatori in PR, se desiderato).

### 7) Rischi prioritari (ordinati)

Alta priorità:
1. Allineamento TypeScript su deprecazione baseUrl prima di TS 7.  
    Evidenze: [tsconfig.app.json](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html), [tsconfig.vitest.json](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html).

Media priorità:
1. Verifica compliance privacy su sendDefaultPii in Sentry.  
    Evidenza: [sentry.provider.ts](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html).
2. Hardening typing config ambiente (rimozione any index signature e tipizzazione completa sentry/mock map).  
    Evidenza: [env-config.interface.ts](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html).
3. Riduzione warning markdownlint per mantenibilità docs.  
    Evidenze: [README.md](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html), [conventions.md](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html).

Bassa priorità:

1. Revisione coerenza documentazione vs implementazione (es. consenso analytics/sentry).  
    Evidenze: [README.md](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html), [cookie-banner.provider.ts](vscode-file://vscode-app/c:/Users/simon/AppData/Local/Programs/Microsoft%20VS%20Code/6928394f91/resources/app/out/vs/code/electron-browser/workbench/workbench.html).

### 8) Conclusione operativa

Stato attuale complessivo: progetto in buona salute, pronto per evoluzione continua, con alcune attività di rifinitura tecnica da pianificare nel breve.

Se vuoi, nel prossimo step posso prepararti anche:

1. una versione executive da condividere a stakeholder non tecnici,
2. una backlog tecnica priorizzata in formato task (owner, effort, impatto),
3. una checklist di hardening qualità/sicurezza pronta per PR template.