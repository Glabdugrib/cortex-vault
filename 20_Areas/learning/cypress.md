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