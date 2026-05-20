# Dependency Injection

> _Technique where an object receives its dependencies from the outside rather creating them itself._

When a class construct its own dependencies, it's tightly coupled to them.

> [!summary]- Example
> > [!failure]- Bad
> ```typescript
> class OrderService {
> 	private repo = new MySQLOrderRepository(); // hard-wired
> 	private mailer = new SendGridMailer(); // hard-wired
> 	
> 	async createOrder(data: OrderDto) {
> 		const order = await this.repo.insert(data);
> 		await this.mailer.send(order.userEmail, 'Order confirmed');
> 		return order;
> 	}
> }
> ```
> > [!success]- Good
>```typescript
>class OrderService {
>	constructor(
>		private repo: OrderRepository, // abstraction
>		private mailer: MailerService // abstraction
>	) {}
>	
>	async createOrder(data: OrderDto) {
>		const order = await this.repo.insert(data);
>		await this.mailer.send(order.userEmail, 'Order confirmed');
>		return order;
>	}
>}
>
>// Caller wires it together
>const service = new OrderService(
>	new MySQLOrderRepository(),
>	new SendGridMailer()
>);
>
>// In tests, swap with fakes — zero changes to OrderService
>const service = new OrderService(
>	new InMemoryOrderRepository(),
>	new FakeMailer()
>);
>```

---
## DI Container

Manual DI gets tedious at scale. If a class needs 4 deps, each of which needs 3 more, you end up wiring a tree of objects by hand. A DI container automates that wiring.

---
## Dependency Injection vs Dependency Inversion

[[solid-principles#Dependency Inversion Principle|Dependency Inversion principle]]: high level class (or modules) should depend on abstractions, not concrete class.

DIP tells what your architecture should look like. DI is a mechanism to achieve it. You can do DI without DIP (inject a concrete class directly), and you can follow DIP without DI container (manual wiring). In practice they're commonly used together.