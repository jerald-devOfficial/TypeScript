// class Player {
//   public readonly first: string;
//   public readonly last: string;
//   private score: number = 0;
//   //   #score: number = 0; for me, this is a better solution because it's a pure JS and will translate to private class property, white private TS will not

//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//   }

//   private secretMethod(): void {
//     console.log("Secred Method!!!");
//   }
// }

class Player {
  constructor(
    public first: string,
    public last: string,
    // private _score: number
    protected _score: number
  ) {}

  private secretMethod(): void {
    console.log("Secred Method!!!");
  }

  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score cannot be negative!");
    }

    this._score = newScore;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 9999;
  }
}

const elton = new Player("Elton", "Steele", 100);
elton.fullName;
elton.score;
// elton.secretMethod();
elton.score = 123;

interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

// implements means to also declare what class Properties are there from the source of implements
class Bike implements Colorful {
  constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}

  print() {
    console.log(`${this.color} ${this.brand} jacket`);
  }
}

const bike1 = new Bike("red");

const jacket1 = new Jacket("Prada", "read");

interface Payaleble {
  getPay(): number;
}
// abstract will not allow you to create a new instance
abstract class Employee {
  constructor(public first: string, public last: string) {}

  abstract getPay(): number;
  greet() {
    console.log(`Hello`);
  }
}

// Employee
// - FullTimeEmployee
// - PartTimeEmployee

class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }
  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    first: string,
    last: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

const betty = new FullTimeEmployee("Betty", "White", 9500);
console.log(betty.getPay());

const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);

console.log(bill.getPay());
