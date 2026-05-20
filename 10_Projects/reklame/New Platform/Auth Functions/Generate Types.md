
Lo script npm esegue il file Node contenuto nel pacchetto `packages/schema-generator/`.
```bash
"gen:types": "node ../../packages/schema-generator/generate-types.mjs"
```

Lo script legge tutti i file .json all'interno della cartella `src/schema` e genera automaticamente il file `src/types.d.ts`.

Il file ha formato `.mjs` per indicare che usa i moduli ECMAScript (ESM) sempre, a prescindere da quanto indicato nel valore `type` del file `package.json`. E' particolarmente utile nelle monorepo dove alcuni pacchetti potrebbero essere di tipo `commonjs` e altri `module`.

---