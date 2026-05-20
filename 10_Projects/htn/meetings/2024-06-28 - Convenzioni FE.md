### 1. Project Setup and Scaffolding

- **Framework**: *Vue* 3 con *composition API*
- **Language**: *Typescript*
- **Build Tool**: *Vite*
- **Project Structure**: struttura modulare (core + moduli extra). Ogni modulo contiene (potenzialmente) layouts, views, SFCs, services and store. *Axios* invocato all'interno dei metodi dello store.
- **State Management**: [*Pinia*](https://pinia.vuejs.org/)
- **Routing**: [*Vue Router*](https://router.vuejs.org/)

### 2. Coding Conventions

- **Component Naming**: *PascalCase* peri i SFCs `.vue`, kebab-case per tutti gli altri files `.js`. Prefisso *Base* per i componenti custom appartenenti al modulo core.
- **Folder Naming**: *kebab-case*.
- **Styling**: [*Tailwind*](https://tailwindcss.com/) (da verificare integrazione con *PrimeVue*)
- **Components Library**: [*PrimeVue*](https://primevue.org/)
- **Linting and Formatting**: ESLint + Prettier. Pre-commit hooks con Husky che esegue linting con errori bloccanti. Lint del messaggio di commit per forzare utilizzo di *conventional commit* (+ cli?)

### 3. Version Control and Repository Setup

- **Git Branching Strategy**: GitFlow.
- **Commit Messages**: Conventional Commits
- **PR Review Process**: PR manuale prima di effettuare un merge su dev con automazione per generazione report di test coverage (ecc.) per Sonarqube. Da verificare checklist PR suggerita da Alberto.

### 4. Dependency Management

- **Package Manager**: [*pnpm*](https://pnpm.io/).
- **Environment Variables**: `.env` files.

### 5. Development Workflow

- **Local Development**: Vite server (`pnpm run dev`) (no Docker, chiedere conferma ad Alberto)
- **Hot Reloading**: gestito da Vite
- **Testing**: [*Vitest*](https://vitest.dev/) per unit test, E2E test ([*Cypress*](https://vitest.dev/)), opzionale components testing ([*Storybook*](https://storybook.js.org/))

### 6. Build and Deployment

- **CI/CD**: Definire pipeline, tools (es. GitHub Actions) e deployment strategies. Da verificare Alberto e sys.

### 7. Documentation

- **Code Documentation**: *JSDoc* convention
- **Project Documentation**: *README* per startup del progetto + cartella *docs* con [*Mkdocs*](https://www.mkdocs.org/).
- **Style Guide**: [*Vue style guide*](https://vuejs.org/style-guide/)

### 8. Performance and Optimization

- **Lazy Loading**: Implement lazy loading for components and routes.
- **Code Splitting**: Use code splitting to optimize loading times.
- **Performance Monitoring**: Necessario? (es. [*Lighthouse*](https://developer.chrome.com/docs/lighthouse/overview)).

---

### TODO:

- prova struttura repository
- mkdocs
- test
- prime vue
- tailwind
- husky

---

### Domande:

- SSO fornisce vista?
- Docker
- Automation build
- Reporting