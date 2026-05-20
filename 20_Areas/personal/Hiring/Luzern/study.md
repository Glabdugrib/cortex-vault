
## Topics
### <span style="color:rgb(255, 192, 0)">Javascript</span>

1. How executes code
2. Event loop
3. Async behaviour
	1. Promises
	2. setTimeout
	3. microtasks vs macrotasks
4. Closures
5. Scope & lexical scope
6. Memory management
7. Memory leaks (awareness & how to prevent)

---
### <span style="color:rgb(255, 192, 0)">Node.js</span>

1. Handling large data (e.g. streams)
2. Backpressure
3. API best practices
	1. Validation
	2. Sanitisation
4. Security considerations when handling requests

---
### <span style="color:rgb(255, 192, 0)">Typescript</span>

1. Generics

---
### <span style="color:rgb(255, 192, 0)">Misc</span>

1. Fundamentals over frameworks
2. Performance
3. Scalability
4. Clean code

---
---
---

## Explanations

### <span style="color:rgb(255, 192, 0)">Javascript</span>

#### <span style="color:rgb(255, 192, 0)">How executes code</span>
- high level
- interpreted
- just-in-time (JIT) compiled

Code processed by JavaScript engine (e.g. V8 for Chrome) in steps:
1. **Parsing** (syntax analysis)
2. Early Error Checking:
	1. variable declarations
	2. reserved keyword usage
	3. block scope violation (e.g. using let before declaration)
	4. incorrect function calls
3. **Compilation**:
	1. **Interpreter** (baseline compiler): converts code into machine code for fast startup
	2. **Optimizer** (JIT compiler): analyzes repeated code patterns and optimizes them for performance
4. **Execution**:
	1. **Creation**:
		1. global execution context is created
		2. `this` keyword is assigned a value (e.g. `window` in browser, `global` in Node.js)
		3. memory is allocated for variables and functions
		4. defines variables' scope before execution
		5. `var` variables are hoisted to the top of their scope and initialized with `undefined`
		6. `let` and `const` variables are hoisted but not initialized (Temporal Dead Zone error if accessed before declaration)
	2. **Code Execution**:
		1. code is executed line by line
		2. variables and functions calls are resolved
		3. call stack is used to track execution (one at a time)

---
#### <span style="color:rgb(255, 192, 0)">Event Loop</span>

<strong style="color:rgb(255, 192, 0)">Node.js</strong>: Javascript runtime built on Chrome V8 Javascript engine that allows it to run outside the browser.

<strong style="color:rgb(255, 192, 0)">Event Loop</strong>: mechanism for handling asynchronous operations, enabling non-blocking I/O and concurrency on a single thread.

<strong style="color:rgb(255, 192, 0)">Inside a phase</strong>:
	1. internal operations
	2. check callbacks queue
	3. execute callbacks one by one (FIFO)
	4. stops when:
		1. queue empty
		2. limit reached
	5. move to next phase

<strong style="color:rgb(255, 192, 0)">Phases</strong>:
	1. <strong style="color:rgb(255, 192, 0)">Timers</strong>: execute `setTimeout()` and `setInterval()` callbacks
	2. <strong style="color:rgb(255, 192, 0)"></strong><strong style="color:rgb(255, 192, 0)">Pending callbacks</strong>: execute I/O callbacks deferred to next iteration
	3. <strong style="color:rgb(255, 192, 0)">Idle/Prepare</strong>: only used internally
	4. <strong style="color:rgb(255, 192, 0)">Poll</strong>:
		1. retrieve new I/O events
		2. execute I/O related callbacks (except close callbacks and ones set by timers and `setImmediate()`)
	5. <strong style="color:rgb(255, 192, 0)">Check</strong>: invoke `setImmediate()` callbacks
	6. <strong style="color:rgb(255, 192, 0)">Close callbacks</strong>: some close callbacks (e.g. `socket.on('close', ...)`)

<strong style="color:rgb(255, 192, 0)">setImmediate() vs setTimeout()</strong>:
	- within I/O cycle:  `setImmediate()` always run first
	- not within I/O cycle (e.g. main module): non-deterministic, performance-bounded 

<strong style="color:rgb(255, 192, 0)">process.nextTick()</strong>: outside of event loop, separate queue, run just after the current operation is completed and then resume event loop current phase.

<strong style="color:rgb(255, 192, 0)">setImmediate() vs process.nextTick()</strong>:
	- `setImmediate()`:
		- run on the following iteration (or tick) of the event loop `check` phase
		- pros:
			- do not starve the event loop
			- safer
			- more predictable
		- cons:
			- higher latency
			- less immediate
	- `process.nextTick()`:
		- run immediately on the same phase
		- pros:
			- very low latency
			- useful for async API normalization
			- can starve event loop with recursion

<strong style="color:rgb(255, 192, 0)">Execution order</strong>:
	1. Current synchronous code
	2. `process.nextTick()`
	3. Promise microtasks
	4. Macrotasks (event loop phases)

---
#### <span style="color:rgb(255, 192, 0)">Scope</span>

<strong style="color:rgb(255, 192, 0)">Scope</strong>: defines where a variable is accessible from and where it exists in memory:
	- **Global**: variables defined outside any function or block, accessible everywhere
	- **Function**: variables defined inside a function, accessible only inside of it
	- **Block**:  variables defined inside a block, accessible only inside of it (only for `let` & `const`)

<strong style="color:rgb(255, 192, 0)">Lexical Scope</strong>: variable accessibility is based on where functions are defined, rather than where they are called (see **closures**).

<strong style="color:rgb(255, 192, 0)">Closure</strong>: preservation of a lexical scope: a function that remembers a variable from the scope where it was created even after the outer scope has finished executing (attention with memory leaks).

Avoid memory leaks with closures:
- remove listeners
- clear timers
- avoid capturing unnecessary data
- limit cache growth (LRU caches, TTL expiration, WeakMap when appropriate)

<strong style="color:rgb(255, 192, 0)">Variables</strong>:
- var
	- function scoped (or global scoped)
	- ignores block scope
	- can be reassigned
	- can be redeclared
	- hoisted and initialized with `undefined`
- let
	- block, function or global scoped
	- can be reassigned
	- cannot be redeclared
	- hoisted but not initialized (creates Temporal Dead Zone)
- const
	- block, function or global scoped
	- cannot be reassigned (but objects remain mutable)
	- cannot be redeclared
	- hoisted but not initialized (creates Temporal Dead Zone).

<strong style="color:rgb(255, 192, 0)">Hoisting</strong>: processing declarations before code execution.

---

#### <span style="color:rgb(255, 192, 0)">APIs</span>

<strong style="color:rgb(255, 192, 0)">Validation</strong>:
- never skip
- as close to the entry point as possibile
- validation schema is in the contract
- use Zod or class-validator

<strong style="color:rgb(255, 192, 0)">Sanitization</strong>:
- strip
- sanitize HTML
- prevent SQL or NoSQL injection

<strong style="color:rgb(255, 192, 0)">Layered Model</strong>:
- **HTTP layer**: payload size, rate limits, auth headers
- **Middleware**: sanitize-html, mongo-sanitize, CORS
- **DTO / Schema**: shape, types, required fields, enum membership
- **Business layer**: domain rules (e.g. slot not in the past, no double booking)
- **ORM / query layer**: parameterized queries (never string-interpolated SQL)

<strong style="color:rgb(255, 192, 0)">Security</strong>:
- **Transport:** enforce HTTPS
- **Authentication**:
	- Verify identity before touching any business logic
	- Use JWT (header, payload, signature) and always verify signature
	- **Algorithm confusion**: explicitly specify the algorithm
	- **Token storage**: short-lived access tokens (15m)
	- **API keys**: hashed them, never store in plain text
- **Authorization**: Role-Based Access Control (RBAC)
- **HTTP Headers**: set security headers of every response ...
- **CORS**
- **Rate Limiting**: maybe applied per route (login & register endpoints need stricter limits)
- **Sensitive Data Handling**: never log sensitive fields
- **Error handling**: never expose stack traces in production, internal error messages or ORM query details
- **Dependency Security**: audit, Dependabot
- **Secrets Management**:
	- don't hardcode secrets
	- rotate them regularly
	- different secrets per environment

---
#### <span style="color:rgb(255, 192, 0)">Memory management</span>

<strong style="color:rgb(255, 192, 0)">Memory</strong>:
	- Heap: objects, string and closures
	- Stack: function call frames, primitives
	- External: C++ objects references by JS (e.g. Buffers)

<strong style="color:rgb(255, 192, 0)">Common memory leaks</strong>:
	- Forgotten timers and intervals
	- Closures holding large scopes
	- Unbounded caches / global maps
	- Event emitter listeners not removed
	- Circular references
	- Stream not consumed or destroyed

Monitoring:
	- Monitor heap usage in code
	- Take heap snapshots (V8) (e.g. Clinic.js)

---

#### <span style="color:rgb(255, 192, 0)">Primitives & Objects</span>

<strong style="color:rgb(255, 192, 0)">Primitives</strong>:
- string
- number
- bigint
- boolean
- null
- undefined
- symbol

Immutable, copied by value.

<strong style="color:rgb(255, 192, 0)">Objects</strong>:
- object literal
- array
- function
- date
- map/set

Mutable, handled by reference.

<strong style="color:rgb(255, 192, 0)">Shallow Copy</strong>:
- copy only outer level (nested references remain shared)
- e.g. spread operator `const ciao = {...}`
- e.g. `Object.assign()`

<strong style="color:rgb(255, 192, 0)">Deep Copy</strong>:
- recursively copies every level (new object is completely independent)
- e.g. `structuredClode()`
- e.g. `JSON.parse(JSON.stringify())` (old workaround)

---