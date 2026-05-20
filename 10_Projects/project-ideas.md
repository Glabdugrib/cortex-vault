# Project Ideas
---
## <span style="color:rgb(255, 192, 0)">simonesada.dev</span>
Portfolio personale con blog.
### Views
1. Homepage:
	- Hero section:
		- Subtitle: `Welcome to my lab`
		- Title: `Hi, I'm Simone!`
		- Body: `I'm a Full-Stack Software Engineer who's always tinkering with new ideas and pushing the boundaries of what's possible in development. This portfolio is where I document my creative process, discoveries, and occasional misadventures.`
		- Image on right side:
			- low frame-rate gif
			- hexagon border with me popping out
	- About me section:
		- Paragraphs on the left
		- 2/3 photos stacked photos on the right
		- Tech stack with tags or with [logo clouds](https://tailwindcss.com/plus/ui-blocks/marketing/sections/logo-clouds) 
		- stats block (e.g. 4+ years of experience, ...)
		- [feature section](https://tailwindcss.com/plus/ui-blocks/marketing/sections/feature-sections#component-aa8136c1ee543132391e3a1753723305-dark) (my strongest points) with colored icons
	- My journey section (timeline):
		- [example](https://tailwindcss.com/plus/ui-blocks/marketing/sections/stats-sections)
		- each category of events has unique icon and color 
		- work experiences
		- study experiences
		- certifications
	- Latest projects
		- [Bento box grid](https://tailwindcss.com/plus/ui-blocks/marketing/sections/bento-grids)
		- Publish date
		- Read time
		- Tags
		- View all button
	- From the blog
		- As above
	- Footer:
		- App icons `Github`, `Linkedin` and `Email`
		- Copyright `© 2025 Simone Sada. All rights reserved.`
2. Blog: homepage del blog con articoli più recenti, articoli featured. Gli articoli sono tecnici e non di varia natura
3. Projects: projects case study 

### Features
1. Responsive
2. SEO optimized
3. Visit logs with source registration (e.g. linkedin, google, telegram bio, ecc...)

---

## <span style="color:rgb(255, 192, 0)">Meeting recorder</span>
Software che ascolta i canali audio di input e output, li unisce, li fornisce ad una AI che effettua il transcript e poi lo passa ad una seconda AI che crea un riassunto secondo diversi parametri.


---
## <span style="color:rgb(255, 192, 0)">Feeddo</span>
PWA per aggregare e gestire feed da diverse fonti (RSS, YouTube, Reddit, X, Instagram, LinkedIn) con filtri, ordinamento personalizzato e gestione completa dei post.
### Features

**1. Gestione delle fonti**
- **Aggiungere una fonte**: l’utente può inserire URL o username (YouTube, Reddit, X, Instagram, LinkedIn).
- **Modificare una fonte**: cambiare nome, categorie, tag.
- **Rimuovere una fonte**: cancellazione completa e relativa dei post associati.
- **Categorie e tag**: ogni fonte può avere più categorie o tag per organizzazione.

**2. Aggregazione contenuti**
- Tutti i post vengono mostrati in una **timeline unificata**.
- Possibilità di **ordinamento personalizzato**: per data, popolarità o fonte.
- Filtri lato client per categorie, tag o tipo di fonte.
- Supporto per **refresh manuale** dei feed tramite Lambda.

**3. Gestione dei post**
- **Nascondere** post non desiderati dalla timeline principale.
- **Archiviare** post per consultazione futura.
- Ricerca testuale su titolo e contenuto dei post.

**4. Interfaccia PWA**
- Responsive su mobile e desktop.
- Navigazione fluida tra feed, categorie e post.
- Modalità offline limitata con cache dei post salvati.

**5. AI Integration**
- Un modello analizza le notizie del giorno, ne da una breve descrizione e ne da la priorità

---
## <span style="color:rgb(255, 192, 0)">Fleeter</span>
Backend multi-tenant per la gestione di flotte auto, organizzazioni, store e brand, ottimizzato per noleggi e gestione centralizzata.

---
## <span style="color:rgb(255, 192, 0)">HexMap</span>
Mappa procedurale di un mondo fantasy su griglia esagonale, con terreni, sentieri, eventi casuali influenzati da meteo, periodo e fase del giorno.

---
## <span style="color:rgb(255, 192, 0)">Stratagem AI</span>
Sistema di combattimento RPG a turni con addestramento AI tramite simulazioni computer vs computer, sfruttando tecniche di [**Monte Carlo Tree Search**](https://en.wikipedia.org/wiki/Monte_Carlo_tree_search) o [**Deep Reinforcement Learning**](https://en.wikipedia.org/wiki/Deep_reinforcement_learning) per ottimizzare strategie di battaglia. Logo a forma di **gemma**, ispirata a Obsidian.

---
## <span style="color:rgb(255, 192, 0)">codice-fiscale-js</span>
Alternativa fatta bene a CodiceFiscaleJS. Con il tempo potrebbe includere un sito che permetta di calcolare codice fiscale, inverso e omocodie con informazioni utili.

### Features
1. Calcolo codice fiscale
2. Calcolo codice fiscale inverso
3. Validazione codice fiscale (normalizzato e omocodia)
4. Calcolo omocodie
5. Validazione omocodie
6. Normalizzazione omocodia
7. Lista di comuni (compresi dismessi ecc.)
8. Script per aggiornare lista di comuni
9. Possibilità di accettare lista di comuni anche da fuori (che sostituisca o integri quella interna della libreria)
10. Fuzzy matching nome/cognome più comuni (con relative percentuali), per restituire una stima di nome/cognome appartenente ad un dato codice fiscale
11. Pagina di documentazione con calcolatore per testare tutte le funzioni
12. Libreria minimale utilizzando meno dipendenze esterne possibili
13. Compatibilità Javascript & Typescript
14. Dataset versionati e importabili singolarmente (es. `import { it_2025 } from "@fiscale/datasets/it-2025"`)
15. Struttura `core` + plugins (`@fiscale/core`, `@fiscale/datasets`, `@fiscale/web`, `@fiscale/cli`)
16. Unit test e alto test coverage
17. CI di check regression
18. Semantic versioning
19. Generate random
20. Find similar (errori di digitazione, omocodie, trasposizioni)
21. Validazione verbosa che specifica perché il codice fiscale è sbagliato
---