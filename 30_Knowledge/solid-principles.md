---
title: SOLID Principles
aliases:
  - SOLID
  - solid
---
# SOLID Principles

Five principles, applied to object-oriented programming, to make code more understandable, flexible and maintainable.

Originally introduced by Robert C. Martin in _Design Principles and Design Patterns_ (2000).

---
## Single Responsibility Principle

> _A class should have one, and only one, reason to change._

>[!info] Pros
>- **Maintainability**: single and well-defined responsibility are easier to understand and modify.
>- **Testability**: easier to write tests with a single focus.
>- **Flexibility**: changes to one responsibility doesn't affect other parts of the system.

> [!summary]- Example
> If a class handles both business logic and persistence, a change in the DB schema forces you to touch business logic too. Split them, one class per concern.
> > [!failure]- Bad
> ```typescript
> class UserService {
> 	async register(email: string) {
> 		// business logic
> 		const user = { email, createdAt: new Date() };
> 		
> 		// DB concern mixed in
> 		await db.query( "INSERT INTO users ...", [user.email] );
> 		
> 		// Email concern mixed in
> 		await mailer.send({ to: email, subject: "Welcome!" });
> 		
> 		return user;
> 	}
> }
> ```
> > [!success]- Good
>```typescript
>class UserRepository {
>	async save(user: User) {
>		await db.query( "INSERT INTO users ...", [user.email] );
>	}
>}
>
>class EmailService {
>	async sendWelcome(email: string) {
>		await mailer.send({ to: email, subject: "Welcome!" });
>	}
>}
>
>class UserService {
>	constructor(
>		private repo: UserRepository,
>		private email: EmailService
>	) {}
>	
>	async register(email: string) {
>		const user = { email, createdAt: new Date() };
>		await this.repo.save(user);
>		await this.email.sendWelcome(email);
>		return user;
>	}
}
>```

---
## Open/Closed Principle

> _Software entities should be open for extensions, but closed for modification.

> [!info] Pros
> - **Extensibility**: new features can be added without modifying existing ones.
> - **Stability**: reduced risk of introducing regressions.
> - **Flexibility**: adapts to changing requirements more easily. 

> [!summary]- Example
> Adding a new payment method should not require editing existing, already-tested code. Define a contract (interface/abstract class) and extend it instead (e.g. **strategy pattern**).
> >[!failure]- Bad
>```typescript
>function processPayment(method: string, amount: number ) {
>	// Adding "crypto" later means editing this function
>	if (method === "stripe") {
>		stripe.charge(amount);
>	} else if (method === "paypal") {
>		paypal.send(amount);
>	}
>	// else if ("crypto") { ... }
>}
>```
>> [!success]- Good
>```typescript
>interface PaymentProvider {
>	charge(amount: number): Promise<void>;
>}
>
>class StripeProvider implements PaymentProvider {
>	charge(amount: number) {
>		return stripe.charge(amount);
>	}
>}
>
>class PayPalProvider implements PaymentProvider {
>	charge(amount: number) {
>		return paypal.send(amount);
>	}
>}
>
>// New provider = new file, zero edits above
>class CryptoProvider implements PaymentProvider {
>	charge(amount: number) { ... }
>}
>
>function processPayment( provider: PaymentProvider, amount: number ) {
>	return provider.charge(amount);
>}
>```

---
## Liskov Substitution Principle

> _Derived classes must be able to replace their base class without altering correctness (not only in terms on signature but also in terms of expected behavior)._

> [!info] Pros
> - **Polymorphism**: enable the uso of polymorphic behavior, making code more flexible and reusable.
> - **Reliability**: ensure that subclasses adhere to the contract defined by the superclass.
> - **Predictability**: guarantees that replacing a superclass object with a subclass one won't break the code.

> [!summary]- Example
> If Square extends Rectangle but overrides setWidth to also change height, callers using Rectangle reference get unexpected behavior. The subclass break the contract.
> >[!failure]- Bad
>```typescript
>class Rectangle {
>	constructor( protected w: number, protected h: number ) {}
>	setWidth(w: number) { this.w = w; }
>	setHeight(h: number) { this.h = h; }
>	area() { return this.w * this.h; }
>}
>
>class Square extends Rectangle {
>	// Breaks the Rectangle contract: changing width also changes height
>	setWidth(v: number) {
>		this.w = v;
>		this.h = v; // ← side-effect!
>	}
>	setHeight(v: number) {
>		this.w = v;
>		this.h = v;
>	}
>}
>
>// caller expects area = 4*6 = 24, gets 6*6 = 36 with a Square
>function resize(r: Rectangle) {
>	r.setWidth(4);
>	r.setHeight(6);
>	console.log(r.area()); // not 24!
>}
>```
>> [!success]- Good
>```typescript
>interface Shape {
>	area(): number;
>}
>
>class Rectangle implements Shape {
>	constructor( private w: number, private h: number ) {}
>	area() { return this.w * this.h; }
>}
>
>class Square implements Shape {
>	constructor(private side: number) {}
>	area() { return this.side ** 2; }
>}
>
>// Both are valid Shapes — no shared mutable contract to break function printArea(s: Shape) {
>	console.log(s.area()); // always correct
>}
>```

---
## Interface Segregation Principle

> _Clients should not be forced to depend upon interface methods they do not use._

> [!info] Pros
> - **Decoupling**: reduces dependencies between classes, making the code more modular and maintainable.
> - **Flexibility**: allow for more targeted implementations of interfaces.
> - **Avoids unnecessary dependencies**: clients don't have to depend on methods they don't use.

> [!summary]- Example
> A bloated interface forces every implementor to stub out methods it doesn't need. Split interface into focus, role-specific contracts.
> >[!failure]- Bad
>```typescript
>interface Worker {
>	work(): void;
>	eat(): void; // robots don't eat
>	sleep(): void; // robots don't sleep
>}
>
>class Robot implements Worker {
>	work() { /* real logic */ }
>	eat() { throw new Error("N/A"); }
>	sleep(){ throw new Error("N/A"); }
>}
>```
>> [!success]- Good
>```typescript
>interface Workable { work(): void; }
>interface Eatable { eat(): void; }
>interface Sleepable { sleep(): void; }
>
>// Human needs all three
>class Human implements Workable, Eatable, Sleepable {
>	work() { /* ... */ }
>	eat() { /* ... */ }
>	sleep() { /* ... */ }
>}
>
>// Robot only needs Workable
>class Robot implements Workable {
>	work() { /* ... */ }
>}
>```

---
## Dependency Inversion Principle

> _High-level modules should not depend on low-level modules. Both should depend on abstractions._

> [!info] Pros
> - **Loose coupling**: reduces dependencies between modules, making the code more flexible and easier to test.
> - **Flexibility**: enables changes to implementations without affecting clients.
> - **Maintainability**: makes code easier to understand and modify.

> [!summary]- Example
> If OrderService instantiates MySQLRepository directly, swapping to Postgres means editing business logic. Inject the dependency through an abstraction instead.
> >[!failure]- Bad
>```typescript
>// High-level module coupled to a concrete low-level module
>class OrderService {
>	private db = new MySQLRepository(); // hard dependency
>	async createOrder(data: OrderDto) {
>		return this.db.insert("orders", data);
>	}
>}
>```
>> [!success]- Good
>```typescript
>// 1. Define the abstraction
>interface OrderRepository {
>	insert(data: OrderDto): Promise<Order>;
>}
>
>// 2. Low-level module implements it
>@Injectable()
>class MySQLOrderRepository implements OrderRepository {
>	insert(data: OrderDto) { /* MySQL */ }
>}
>
>// 3. High-level module depends on the abstraction, not the impl
>@Injectable()
>class OrderService {
>	constructor(
>		@Inject("ORDER_REPO")
>		private repo: OrderRepository
>	) {}
>	createOrder(data: OrderDto) {
>		return this.repo.insert(data);
>	}
>}
>```