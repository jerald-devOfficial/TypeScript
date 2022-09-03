"use strict";
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
    first;
    last;
    _score;
    constructor(first, last, 
    // private _score: number
    _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secretMethod() {
        console.log("Secred Method!!!");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative!");
        }
        this._score = newScore;
    }
}
class SuperPlayer extends Player {
    isAdmin = true;
    maxScore() {
        this._score = 9999;
    }
}
const elton = new Player("Elton", "Steele", 100);
elton.fullName;
elton.score;
// elton.secretMethod();
elton.score = 123;
// implements means to also declare what class Properties are there from the source of implements
class Bike {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    brand;
    color;
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}
const bike1 = new Bike("red");
const jacket1 = new Jacket("Prada", "read");
// abstract will not allow you to create a new instance
class Employee {
    first;
    last;
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log(`Hello`);
    }
}
// Employee
// - FullTimeEmployee
// - PartTimeEmployee
class FullTimeEmployee extends Employee {
    salary;
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    hourlyRate;
    hoursWorked;
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const betty = new FullTimeEmployee("Betty", "White", 9500);
console.log(betty.getPay());
const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
console.log(bill.getPay());
