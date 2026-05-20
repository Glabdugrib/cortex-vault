Roadmap pragmatica per comprendere e usare strumenti AI/LLM nel workflow quotidiano, con enfasi su applicazioni pratiche e conoscenze teoriche essenziali.

---

## 1. LLM
Spiegazione essenziale su come funzionano gli LLM senza entrare nella matematica complessa.  

- [ ] Token
  - [ ] Differenza tra token e parola
  - [ ] Implicazioni sul costo e contesto
- [ ] Autoregressione
  - [ ] Perché il modello predice il prossimo token
- [ ] Pre-training vs fine-tuning
- [ ] RAG (Retrieval-Augmented Generation)
  - [ ] Perché serve per ridurre hallucination
- [ ] Tokenizzazione
  - [ ] Come funziona BPE o SentencePiece
  - [ ] Impatto su lunghezza prompt e contesto
- [ ] Self-attention
  - [ ] Comprendere dipendenze tra parti del testo
- [ ] Hallucination
  - [ ] Perché l’LLM può inventare informazioni
  - [ ] Quando serve grounding con RAG

---

## 2. Prompt Engineering
Massimizzare l’efficacia dell’LLM nel produrre output corretti e strutturati.  

- [ ] Role design
  - [ ] `system prompt` vs `user prompt`
- [ ] Output strutturato
  - [ ] JSON schema e validazione
- [ ] Few-shot e zero-shot
  - [ ] Esempi concreti per casi tecnici
- [ ] Parametri di controllo
  - [ ] Temperature, top_p, determinismo
- [ ] Test e versionamento dei prompt
  - [ ] Creare repository di prompt
  - [ ] Automatizzare regressioni output

---

## 3. Embedding e Semantic Search
Usare vettori per rappresentare testo e fare retrieval intelligente.

- [ ] Creazione embedding
  - [ ] OpenAI embeddings o SentenceTransformers
- [ ] Strategie di chunking
  - [ ] Dimensione, overlap, filtraggio
- [ ] Similarità e ricerca
  - [ ] Cosine similarity
- [ ] Costruire un index locale o remoto
  - [ ] FAISS, Pinecone, Weaviate
- [ ] Test su dataset reale
  - [ ] Esempio: documentazione AWS

---

## 4. RAG Architecture
Progettare pipeline che combinano retrieval e generazione (per riduzione errori, hallucination e aumento accuratezza).

- [ ] Pipeline retrieval
  - [ ] Pre-processing dei documenti
  - [ ] Query embedding e ranking
- [ ] Context injection nel prompt
- [ ] Prompt template robusti
- [ ] Evaluation pipeline
  - [ ] Metriche di qualità output
  - [ ] Logging e monitoraggio
- [ ] Errori comuni da evitare
  - [ ] Chunk troppo grandi
  - [ ] Nessun filtro dei risultati
  - [ ] Prompt monolitici

---

## 5. Function Calling e Tool Use
Permettere agli LLM di interagire con sistemi esterni in modo controllato.

- [ ] Chiamare API interne
- [ ] Generare query SQL validate
- [ ] Interagire con AWS SDK
- [ ] Output strutturato e validazione
- [ ] Logging e sicurezza
  - [ ] Controllo parametri e rate limiting

---

## 6. AI nel Workflow
Applicare LLM e strumenti AI per aumentare produttività personale e team.

- [ ] Generatore di test unitari da codice
- [ ] Generatore di commit message strutturati
- [ ] Refactor analyzer automatico
- [ ] Log summarizer
- [ ] Generazione automatica di ADR e documentazione tecnica
- [ ] Automazione micro-task con workflow CI/CD

---

## 7. Fine-Tuning
Capire quando e perché il fine-tuning è utile.  

- [ ] Fine-tuning vs RAG
- [ ] LoRA e quantization (concept)
- [ ] Quando il fine-tuning è giustificato
- [ ] Costi e complessità vs vantaggi

---

## 8. Tool e LLM per Software Engineer  
Conoscere lo stato dell’ecosistema AI/LLM aggiornato al 2026, strumenti e modelli più rilevanti.
  
### Modelli LLM Principali  
- [ ] **GPT (OpenAI)** — Generale, coding e reasoning avanzato  
- [ ] **Claude (Anthropic)** — Coerenza e output tecnico  
- [ ] **Gemini (Google)** — Modelli multimodali e contesti estesi  
- [ ] **Open Source LLM (LLaMA3, Code-tuned variants)** — Uso locale o self-hosted  
  
### Framework e Librerie  
- [ ] **LangChain** — Orchestrazione LLM, retrieval e agenti
- [ ] **LlamaIndex / Langflow / CrewAI** — Alternative per gestione agenti e workflow
  
### Vector DB e Retrieval  
- [ ] **Chroma DB** — Open-source, API uniforme
- [ ] **FAISS** — Ricerca vettoriale ad alte prestazioni
- [ ] **Pinecone** — Cloud managed, low-latency
- [ ] **Milvus (Zilliz)** — Distribuito, supporto GPU
  
### Coding Assistant e Productivity  
- [ ] **GitHub Copilot** — Completamento, refactoring, test generation
- [ ] **Perplexity.ai** — Semantic search con citazioni
- [ ] **OpenAI Codex / AI Agents** — Automatizzazione coding, bugfix, test
- [ ] **Claude Code** — Modello specifico per sviluppo software, refactoring, test e analisi di codice
  
### AI per Workflow e Dev Productivity
- [ ] **Red Hat Developer Lightspeed** — Docs, debugging, test planning  
- [ ] **AI IDE con Claude integrato (IBM + Anthropic)** — IDE avanzato per SDLC completo  