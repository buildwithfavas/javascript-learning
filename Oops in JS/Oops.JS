// OOP in JavaScript — 4 Pillars explained
// Short definition: Object-Oriented Programming (OOP) is a style of organizing code around objects (data + behavior).
// JavaScript supports OOP via objects, prototypes, and ES6 class syntax.

// Encapsulation
// Definition: keep an object's internal state private and expose only a controlled interface (methods) to interact with that state.
// Why: prevents outside code from messing up internal details, makes invariants easier to maintain.
// Real-world analogy: a bank account — you don’t directly change the internal balance; you use deposit() and withdraw().
// JS examples: (By Closure)

function createBankAccount(initialBalance = 0) {
  let balance = initialBalance; // private

  return {
    deposit(amount) {
      if (amount > 0) balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > 0 && amount <= balance) balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    }
  };
}

const acc = createBankAccount(100);
acc.deposit(50);      // 150
console.log(acc.balance); // undefined (encapsulated)

// Private class fields (modern JS, # makes fields private):


class BankAccount {
  #balance;
  constructor(initial = 0) { this.#balance = initial; }
  deposit(a) { if (a>0) this.#balance += a; return this.#balance; }
  withdraw(a) { if (a>0 && a<=this.#balance) this.#balance -= a; return this.#balance; }
  getBalance() { return this.#balance; }
}

const b = new BankAccount(100);
console.log(b.getBalance()); // 100
//console.log(b.#balance);     // SyntaxError — truly private
// Use case: protect sensitive fields (passwords, tokens, balances), provide validation logic centrally.

// Get & Set

let person = {
  firstName: "John",
  lastName: "Doe",

  // Getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // Setter
  set fullName(value) {
    let parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(person.fullName); // John Doe  (calls getter)
person.fullName = "Jane Smith"; // (calls setter)
console.log(person.firstName);  // Jane


// Abstraction
// Definition: expose a simple API that hides complex underlying implementation details.
// Why: callers use a simple interface without caring about the steps or complexity behind it.
// Real-world analogy: driving a car — you press an accelerator, you don’t care about fuel injection logic.
// JS example: API client

class ApiClient {
  constructor(baseUrl) { this.baseUrl = baseUrl; }
  async get(path) {
    const res = await fetch(this.baseUrl + path);
    if (!res.ok) throw new Error('Network error');
    return res.json();
  }
  // user of ApiClient doesn't need to know about fetch, headers, retries etc.
}

// Use case: build modules (database layer, HTTP client, payment gateway) that let other parts of your app call simple methods instead of repeating logic.
// Note: Encapsulation and abstraction are related — abstraction uses encapsulation to hide complexity.

// Inheritance
// Definition: let one object/class reuse and extend another's properties and behavior.
// Why: avoid duplicate code and create specialized types based on a common base.
// Real-world analogy: a Vehicle base, with Car and Motorcycle inheriting common parts (engine, start()).
// JS example (ES6 classes):

class Animal {
  constructor(name) { this.name = name; }
  speak() { return `${this.name} makes a noise.`; }
}

class Dog extends Animal {
  speak() { return `${this.name} barks.`; } // override
}

const d = new Dog('Rex');
console.log(d.speak()); // "Rex barks."

// Prototype note: under the hood JS uses prototypes — class is syntactic sugar over prototype chains.
// Use case: UI frameworks (BaseComponent → Button, Modal), domain models (Person → Employee → Manager).
// Caveat: deep inheritance hierarchies can get brittle; prefer composition when behavior varies a lot.

// Polymorphism
// Definition: different classes implement the same interface/methods, and you can use them interchangeably.
// Why: write generic code that works with many concrete types.
// Real-world analogy: a remote control that can "play" different devices (TV, DVD, Podcast) — you call play() and each device does its own thing.
// JS example:

class Shape {
  getArea() { throw new Error('implement me'); }
}
class Circle extends Shape {
  constructor(r){ super(); this.r = r; }
  getArea(){ return Math.PI * this.r * this.r; }
}
class Rectangle extends Shape {
  constructor(w,h){ super(); this.w = w; this.h = h; }
  getArea(){ return this.w * this.h; }
}

const shapes = [new Circle(2), new Rectangle(3,4)];
for (const s of shapes) {
  console.log(s.getArea()); // circle area, rectangle area — same call, different result
}

// Use case: rendering different UI components with a shared render() method, or processing different payment methods with a common pay() API.