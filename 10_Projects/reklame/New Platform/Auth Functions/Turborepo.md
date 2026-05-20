
**Turborepo** è uno strumento open-source creato da Vercel per **gestire monorepo** JavaScript/TypeScript in modo efficiente e scalabile. È progettato per sviluppatori che lavorano su **più pacchetti o progetti** all'interno dello stesso repository, ad esempio frontend, backend, librerie condivise, Lambda, ecc.

Turborepo ottimizza la build e il test dei pacchetti in un monorepo sfruttando:
- caching intelligente (basato su input/output)
- esecuzione parallela
- deduplicazione dei task già eseguiti

Un **monorepo** (monolithic repository) è un repository Git unico che contiene **più progetti o pacchetti** logicamente separati ma **sviluppati e mantenuti insieme**.

## Scaffolding
```bash
.
├── functions/           # lambda functions
├── packages/            # libreria condivisa
├── pnpm-workspace.yaml  # Configurazione workspaces Pnpm
└── turbo.json           # configurazione Turborepo
```

## Configurazione
Definisce **le pipeline dei task** per un monorepo. Ogni task può avere dipendenze, output da cache, input per invalidare il caching, ecc.

- **`tasks`**: ogni chiave è un task (es. `build`, `test`, `lint`, ecc.) eseguibile con `turbo run`. Infatti nel `package.json` globale sono presenti le versioni turbo dei comandi.
- **`outputs`**: indica file/cartelle prodotti da un task per salvarli nella cache e riutilizzarli nel caso gli input non cambino. Se omesso il task non sarà cachato e sarà rieseguito ogni volta.
- **`inputs`**: indica quali file influenzano l'esecuzione del task per tracciarne i cambiamenti ed eventualmente saltare l'esecuzione del task utilizzando la cache. Se omesso includerà tutti i file del pacchetto eccetto `node_modules`, `dist` e `build`.
- **`dependsOn`**: indica quali task da eseguire prima di questo.
- **`cache`**: abilita/disabilita il caching.

`turbo.json`:
```json
{
  "tasks": {
  
    "gen:types": {
      "outputs": ["src/types.d.ts"]
    },
    
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },

    "test": {
      "dependsOn": ["build"],
      "inputs": ["src/**/*.ts", "src/__tests__/**/*.ts"]
    },

    "dev": {
      "dependsOn": ["^watch"],
      "cache": false
    },

    "package": {
      "dependsOn": ["build", "test", "lint"],
      "cache": false
    },

    "deploy:staging": {
      "dependsOn": ["package"],
      "cache": false
    },

	...
  }
}
```