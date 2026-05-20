## Phase 1 — Foundations

### 1. The AI Landscape
1. AI vs ML vs Deep Learning
2. A Brief History of AI
3. Overview of Major LLMs

### 2. How LLMs Work
1. Tokenization
2. Embeddings and Vector Space
3. The Transformer and Attention
4. Key Parameters

### 3. Core Concepts Every AI Developer Must Know
1. Context Window
2. Hallucination
3. Fine-tuning vs RAG vs Prompt Engineering
4. AI Ethics and Safety

### Milestone Project: LLM Explorer CLI
Build a Python command-line tool that lets you query multiple LLM providers (OpenAI and Anthropic), compare their outputs side by side, adjust generation parameters interactively, and log all results to a local JSON file for later analysis.

---

## Phase 2 — Prompt Engineering Mastery

### 4. Anatomy of a Prompt
1. The Four Components
2. System Prompts and Personas
3. Output Formatting
### 5. Core Prompting Techniques
1. Zero-shot, One-shot, Few-shot
2. Chain-of-Thought (CoT)
3. Tree-of-Thought (ToT)
4. ReAct Pattern

### 6. Advanced Prompt Engineering
1. Meta-prompting and Self-consistency
2. Prompt Chaining
3. Prompt Evaluation
4. Prompt Patterns for Developers

### Milestone Project: Prompt Optimization Workbench
Build a web application (FastAPI backend + simple HTML frontend) where you input a task description, and the system automatically generates 3 prompt variants using different techniques (zero-shot, few-shot, CoT), evaluates them against test cases you define, and ranks them by quality metrics.

---
## Phase 3 — Automation & AI Integration

### 7. AI Automation Landscape
1. No-code Tools
2. When to Code vs When to Use No-code
3. LangChain and LlamaIndex

### 8. RAG — Retrieval-Augmented Generation
1. RAG Architecture
2. Chunking Strategies
3. Vector Databases
4. Embedding Models
5. Retrieval Strategies

### 9. Building Stateful AI Pipelines
1. Memory Types
2. Connecting to External APIs and Databases
3. Streaming Responses

### Milestone Project: AI Knowledge Base Assistant
Build a full RAG pipeline: ingest a folder of PDF and markdown files, chunk and embed them into ChromaDB, expose a FastAPI endpoint, and build a simple chat UI. Support conversational memory across turns so the assistant can reference previous exchanges.

---
## Phase 4 — Building AI Agents & Shipping Products

### 10. AI Agents
1. What Is an Agent?
2. Tool Use and Function Calling
3. Building a Simple Agent from Scratch
4. Agent Failure Modes and Guardrails

### 11. Multi-Agent Systems
1. Orchestration Patterns
2. Frameworks Comparison
3. Inter-agent Communication
4. Practical Use Cases

### 12. Shipping AI Products
1. Architecture Patterns
2. Cost Management
3. Observability

### Milestone Project: Autonomous Research & Content Agent
Build a multi-agent system where an orchestrator delegates to specialized agents: a web research agent, a summarization agent, and a writing agent. Input: a topic. Output: a structured research report saved as both markdown and PDF. Expose the system via a REST API. Include cost tracking per run.