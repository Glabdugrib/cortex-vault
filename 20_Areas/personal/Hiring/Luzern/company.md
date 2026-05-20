# Luzern eCommerce — Full-Stack Developer Interview Brief

---

## 1. Company Snapshot

|Field|Detail|
|---|---|
|**Legal name**|Luzern Technology Solutions Ltd|
|**Brand**|Luzern eCommerce (luzern.co)|
|**Founded**|2002/2003|
|**HQ**|Floor 2, Block B, Ashtown Gate, Navan Road, Dublin 15|
|**Other offices**|Galway (R&D) · London · Barcelona · Texas|
|**Size**|~100–140 employees (est.) · ~13 in IT/Engineering|
|**Stage**|Private, PE-backed (Cardinal Capital Group, Mar 2021)|
|**Revenue target**|~€80m (FY 2024, per Business Post)|
|**Self-positioning**|"Europe's #1 eCommerce Accelerator"|

---

## 2. Leadership

- **Ken Doyle** — Founder; currently Founder / Chief Strategy Officer (former CEO; transition unannounced)
- **David Ryan** — Current CEO (per his own LinkedIn; not yet confirmed via press release)
- **Feargal Mooney** — Executive Chair; former CEO of Hostelworld
- **Pat Sherlock** — Co-Founder & Chief Product Officer
- **Mike Scally** — CTO; BEng Computer Engineering + MSc AI (UL); .NET background → relevant to legacy migration

> ⚠️ CEO ambiguity: Irish press still lists Doyle as CEO (as of Nov 2024). Clarify in the interview.

---

## 3. Business Model

- **Managed-service accelerator**, not pure SaaS
- Acts as **merchant of record** (3P seller) on behalf of brands on Amazon and other marketplaces
- **Revenue mix:**
    - Platform/managed-service fees (Channel Optimizer)
    - Margin share on goods sold as merchant of record
    - Services fees (content, advertising, strategy, fulfillment)
- **Clients:** global consumer brands — Nestlé, Philips Hue (Signify), Fossil, JDE Coffee, On Running, Mattel, Panasonic, HTC, Wella, PetSafe
- **Post-Tambo (Nov 2024):** now covers both **1P** (Amazon vendor/retail) and **3P** (marketplace seller) — a rare unified offering

---

## 4. Core Product — Channel Optimizer™

**Architecture:** modular, headless, composable, API-first

**Capabilities:**

- Amazon Seller Partner API integration (Buy Box management, listing optimisation, ACoS analysis)
- Dynamic pricing / algorithmic repricer
- Automated returns (ERP-integrated)
- Prescriptive analytics + automated quick-fix triggers
- Multi-currency checkout (130+ currencies), VAT/tax, in-country payments
- **Margin Optimizer** — GenAI-powered (released Nov 2024)
- **Tambo Compass** — AMC (Amazon Marketing Cloud) analytics, post-acquisition

**Marketplace integrations:** Marketplacer · ChannelEngine · Effect Connect · Myrakl

---

## 5. Recent Events

|Date|Event|
|---|---|
|**Nov 2024**|Acquired **Tambo** (London-based Amazon Ads / AMC specialist); deal ~€5m; Tambo fully rebranded to Luzern in 2025|
|**Oct 2024**|Partnership with **POTOO Solutions** for Amazon brand protection|
|**May 2023**|Major Channel Optimizer release at Shoptalk Europe (Barcelona); partnership with **Marketplacer**|
|**Mar 2021**|**Cardinal Capital Group** investment; Cardinal becomes ultimate controlling party|
|**2021**|Revenue €71.1m (FY ending Feb 2021); Sunday Times front page|
|**2008**|€2.5m funding from Delta Partners|

---

## 6. Tech Stack

### Current (modern)

- **Backend:** Node.js · NestJS · TypeScript
- **Frontend:** Vue.js
- **Database:** MySQL (relational)
- **Cloud:** AWS Lambda · AWS Amplify
- **Testing:** Jest (TDD)
- **AI/LLM:** OpenAI Codex · Claude Code (agentic development — explicitly required)

### Legacy (still in use)

- ASP.NET / C# · NUnit · jQuery

> 🔑 Channel Optimizer is mid-migration from .NET/jQuery → Node.js/NestJS/Vue. The job ad explicitly states "Upgrading existing Channel Optimizer features to state of art technologies."

---

## 7. Full-Stack Developer Role — Key Points

**Requirements (from job ad, Feb 2026):**

- 5+ years software development experience
- Strong Node.js + TypeScript
- Vue.js (or equivalent JS framework)
- MySQL + relational data modelling
- AWS (preferred)
- Agile
- **Agentic LLM development** (OpenAI Codex, Claude Code) — explicitly listed as required

**Day-to-day responsibilities:**

- Backend development with Node.js / NestJS
- Frontend with Vue.js
- Third-party API integrations (Amazon SP-API, marketplace connectors)
- Upgrading legacy features
- Client platform configuration
- TDD with Jest

**Locations:** Dublin · London · Barcelona (hybrid)  
**Recruiter contact:** Mark Byrne (join.com)

---

## 8. Interview Preparation

### Technical topics to prioritise

- **NestJS:** DI, modules, guards, interceptors, async patterns
- **Vue.js:** Composition API, state management, end-to-end UI delivery
- **MySQL:** multi-tenant data modelling, pricing per country/marketplace, inventory, returns
- **API integrations:** rate limits, retries, idempotency, eventual consistency (Amazon SP-API is brittle)
- **AWS Lambda:** cold starts, event-driven architectures, async repricing/returns workflows
- **Agentic LLM:** how you use Codex / Claude Code in production, prompt engineering for code, agent design
- **Legacy migration:** strangler-fig pattern, contract-driven decoupling, parallel-run testing

### Domain knowledge to review

- Amazon Buy Box mechanics
- 1P (vendor) vs 3P (seller) distinction
- ACoS / advertising metrics
- Merchant-of-record flows
- ERP integration patterns

### Questions to ask (non-technical, interview-positive)

**On the product & architecture:**

- "How is the team integrating Tambo Compass data into Channel Optimizer post-acquisition — are you unifying the data models or keeping them separate?"
- "What does the migration path from .NET to Node.js look like — are you running both stacks in parallel, or is there a feature-freeze on the legacy side?"
- "Can you walk me through how the Margin Optimizer GenAI feature is architected — is it using LLM inference at request time or offline batch?"

**On the team & process:**

- "How is the engineering team structured across Dublin, London and Barcelona — are there dedicated squads per product area, or is it a shared pool?"
- "What does the on-call model look like, especially for the merchant-of-record flows that run 24/7?"
- "How does Pat Sherlock's product function and Mike Scally's engineering function collaborate day-to-day — do engineers own discovery, or does product hand over specs?"

**On growth & strategy:**

- "With the Tambo acquisition broadening the offering to 1P + 3P, is the plan to build deeper Amazon tooling or to expand into other marketplaces like Zalando and TikTok Shop?"

---

## 9. Salary Benchmark

- **Source:** Glassdoor (Dublin, 303 salaries, Nov 2025)
- **Senior Software Developer, Dublin median:** €74,000
- **IQR:** €63,000 – €87,000
- **90th percentile:** ~€100,750
- Luzern's posted marketing roles in London (£30–47k) suggest conservative comp; anchor fullstack expectations at Dublin median and negotiate from there

---

## 10. Key Caveats

- **CEO transition unconfirmed** — prepare for either Doyle or Ryan
- **Engineering headcount (~13)** is scraped from LinkedIn via RocketReach; treat as approximate
- **Tech stack** inferred from job ads + CTO background; no public engineering blog exists
- **€80m revenue** is a forward target (Business Post, Feb 2024), not a filed result
- **"Europe's #1"** is self-reported marketing
- **€5m Tambo deal value** is Business Post's estimate, not officially disclosed