# Simone Sada — Background Notes

## Personality & Working Style

- Proactive: consistently proposes improvements to standards, conventions, and processes
- Comfortable owning things end-to-end: requirements gathering, demo with clients, implementation, testing
- Works well in flat, trust-based team structures where engineers have high autonomy
- Prefers environments where technical decisions are discussed and justified, not just handed down

---

## Experience Details

### 3 Caravelle (Apr 2024 – Present)

Full-remote consulting shop. Simone is embedded as a software engineer in two distinct product teams.

#### HTN — Telemedicine Platform

- Role: Frontend engineer (backend involvement starting soon with Java)
- Full rewrite of a legacy frontend platform
- Platform serves 15,000+ pharmacies in Italy; hundreds of thousands of patients use it
- Features: telemedicine services, medical device rental, online medical reporting, patient/doctor/pharmacy/device management, reporting dashboards
- Integrations with the Italian national health system (SSN) and some regional health authorities
- Stack: Vue.js, TypeScript, Vitest (unit tests), Axios client auto-generated via OpenAPI Generator from backend YAML spec
- Microservices architecture
- Simone conducts client demos and handles product requirements gathering directly
- Team: 1 CTO, 1 PM, 2 backend devs, 2 frontend devs (including Simone)

#### Reklame — Email Marketing Platform

- Role: Full-stack engineer
- Multi-tenant SaaS platform used by ~15 companies
- Platform capabilities: bulk email sending (millions), advertising campaign management, bulk user acquisition (millions of contacts), blacklisting, planning, reporting, analytics
- DB contains 33M+ email contacts (total historical)
- Migration approach: Strangler Fig pattern — incremental replacement of legacy system, both FE and BE
- Custom Cognito SSO shared between legacy and new platform, with dynamic routing between them via sidebar without losing session
- Services developed by Simone from scratch:
    - Bulk user import microservice (CSV)
    - Granular blacklisting engine (users, emails, domains — rule-based)
    - Multiple AWS Lambda support functions
    - New frontend (full rewrite)
    - Custom Cognito SSO
- Stack: Vue.js, TypeScript, NestJS, Serverless Framework, Turborepo, Tilt (local orchestration), Docker, AWS (ECS, ECR, Lambda, S3, Cognito, CloudWatch, SNS, SQS), Tanstack Vue Query, Laravel (legacy service maintenance)
- Microservices architecture
- Simone conducts client demos and handles product requirements gathering directly
- Team: 1 CTO, 2 full-stack engineers (including Simone)

#### Cross-project notes

- CI/CD: pipelines cover build automation, semantic versioning, static code analysis, Docker image management — via GitHub Actions
- Engineering standards: collaborative process; Simone is an active, proactive contributor — proposes improvements to conventions, code review practices, technical documentation
- Architecture decisions validated by CTO; implementation and engineering choices largely owned by the engineers
- Java: Simone is currently self-studying Java to contribute to HTN backend — not yet in production, do not include in CV until active

---

### Contents (Jul 2023 – Apr 2024)

...

### Beecreative (Jul 2021 – Jul 2023)

...

### Carrefour (Oct 2016 – May 2020)

...

---

## Technical Skills & Tools

- Strong: TypeScript, Vue.js, NestJS, PHP/Laravel, AWS (ECS, ECR, Lambda, S3, Cognito, CloudWatch, SNS, SQS), Docker, Serverless Framework, GitHub Actions
- Familiar: Turborepo, Tilt, Tanstack Vue Query, GraphQL, Redis, MySQL, DynamoDB
- Testing: Vitest (unit), TDD mindset
- Tooling: OpenAPI Generator, Axios, Semantic Versioning
- Learning: Java

---

## Projects & Side Work

### Golem Booking

- Booking web app for a local board game club in Bologna
- Users can reserve tables across time slots
- Admin dashboard: manage rooms, tables, reservations
- Stack: Vue.js, TypeScript, AWS Lambda (Serverless Framework), DynamoDB

---

## Education & Training

- Full-Stack Web Development Bootcamp — Boolean Careers (Nov 2020 – Jun 2021), 700 hours, final project: Airbnb clone
- B.S. Management Engineering — Politecnico di Milano (2012–2016), 150/180 ECTS, coursework in algorithms, linear algebra, statistics, operations research
- Vue.js Developer Certificate – Level 1 (2024)

---

## Cover Letter Angles

- Strong full-stack ownership: requirements → implementation → demo → delivery
- Proven in complex migration scenarios (Strangler Fig, legacy rewrites)
- Healthcare/regulated domain experience (SSN integrations, telemedicine)
- Comfortable in small, high-trust, high-autonomy teams
- Proactive on standards and engineering quality without being dogmatic

---

## Unused but Relevant Info

- Java self-study underway (for HTN backend) — worth mentioning in cover letters for roles that involve Java or backend expansion, but not in CV yet
- Carrefour background gives unusual data literacy for a software engineer — useful angle for data-heavy or analytical roles
- Management Engineering degree (even if incomplete) signals systems thinking and analytical foundation