## Company
- product technology company
- software used by internal customers to improve
	- automation
	- workflow efficiency
	- digital operations at scale

---
## Questions
1. What does the <u>core product</u> do?
2. How do they manage <u>AWS infrastructure</u>? Are they heavily <u>serverless</u> or a mix?
3. What's the team's approach to <u>code reviews</u> and <u>knowledge sharing</u>
4. What's the <u>biggest challenge</u> the team is currently facing?
5. Do engineers get time or <u>budget for learning</u>, conferences, or certifications?
6. How many <u>days on-site</u> is the expectation?
7. What the <u>next steps</u> in the selection process will be, and approximately <u>how long each stage</u> is expected to be.

---
## Other
- I currently work for a <u>consultancy</u> based in Italy. 
- My <u>notice period</u> is 2 months.

---

### Scope
The region of code where a variable can be accessed from.
- **Global:** everywhere
- **Function scope:** only inside the function
- **Block scope:** only inside the brackets bloc

### Lexical Scope
A function's scope is determined by <u>where it is written in the source code</u>, not where is called from.
(inner functions can see outer ones' scoped variables).

---
### Event Loop
Node.js is a <u>single-threaded</u>: it uses a <u>non-blocking event loop</u> so I/O doesn't stop execution.
<u>CPU-heavy work</u> is the danger, not I/O.

Phases:
- <u>Timers</u>
- <u>Pending callbacks</u> (from previous iterations)
- (<u>Idle/Preare</u>)
- <u>Poll</u>: fetch new events and process callbacks
- <u>Check</u>: execute `setImmediate()` callback
- <u>Close</u>: handle closing events

#### Avoid blocking the loop
- Move CPU work to <u>workers</u>
- Use <u>streams for large files</u> processing (never load entire files into memory)
- <u>Chunk heavy synchronous work</u> with `setImmediate` to yield between iterations

#### Data processing
- <u>DB insert in chunks</u> (not one-by-one)
- Use <u>Promise.all</u> for parallel async
- <u>Limit concurrency</u> with a semaphore

---

## Secure API

#### Auth & authorisation
- Prefer <u>short-lived **JWTs**</u> + refresh tokens; store refresh tokens server-side so they can be revoked
- <u>Never put sensitive data in JWT payload</u> — it's only base64-encoded, not encrypted
- Use `httpOnly` + `Secure` + `SameSite=Strict` cookies for web clients

#### Input validation & injection
- Validate and <u>sanitise all input</u> at the boundary (e.g. **Zod**, **Joi**)
- Use <u>parameterised queries</u> — never string-interpolate SQL
- <u>Whitelist expected fields</u>; strip unknown keys before they reach business logic

#### Rate limiting
- Apply <u>rate limiting</u> per IP and per user (different limits)
- Set <u>payload size limits</u> (`express.json({ limit: '100kb' })`)

---
## Robust API

#### Error handling
- <u>Centralised error middleware</u>
- <u>Never leak stack traces in prod</u>
- <u>Structured error responses</u> (code + message)

#### Observability
- <u>Correlation IDs</u> on every request
- <u>Structured JSON logs</u> (no `console.log` in prod)
- <u>Health endpoint</u> & readiness endpoint

---

## Typescript
### Key type-system concepts to know

- **Structural typing** — TS checks shape, not names. Two unrelated types are compatible if their shapes match.
- **Type vs interface** — prefer `interface` for objects (it's extendable, gives better error messages); use `type` for unions, intersections, mapped types.
- **Discriminated unions** — the go-to pattern for modelling state machines and API responses.

```
type Result<T> =
  | { status: 'ok'; data: T }
  | { status: 'error'; message: string };

function handle(r: Result<User>) {
  if (r.status === 'ok') r.data; // narrowed to T
  else r.message;                // narrowed to string
}
```

### Generics

Use generics to write reusable, type-safe utilities without losing specificity.

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(res.statusText);
  return res.json() as Promise<T>;
}

const user = await fetchJson<User>('/api/me'); // typed!

### Utility types worth knowing

- `Partial<T>` — all optional
- `Required<T>` — all required
- `Pick<T, K>` — subset
- `Omit<T, K>` — exclude keys

- `Readonly<T>` — immutable
- `Record<K, V>` — dict type
- `ReturnType<F>` — infer return
- `NonNullable<T>` — strip null

### Practical strictness tips

- Enable `strict: true` — catches `any` drift, null issues, implicit returns
- Avoid `as` casts; use type guards or `satisfies` operator instead
- Use `unknown` over `any` for external data — forces you to narrow before use

function isUser(val: unknown): val is User {
  return typeof val === 'object' && val !== null && 'id' in val;
}
