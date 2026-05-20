
Strumento per analizzare e correggere automaticamente problemi di **qualità del codice** JavaScript e TypeScript.

Regole di linting:
- globali (`globals`)
- raccomandate (`@eslint/js`)
- per `Typescript` (`typescript-eslint`)
- per `Vitest` (`eslint-plugin-vitest`)

## Files
- `/packages/eslint-config-custom/eslint.config.mjs`: pacchetto di configurazione condiviso.
- `eslint.config.js`: file caricato automaticamente nella root della repo, utilizza la configurazione comune.
- `eslint-config-custom-eslintrc.d.ts`: dichiara il modulo in modo esplicito e consente a  Typescript di supportare il file di tipo `.mjs`