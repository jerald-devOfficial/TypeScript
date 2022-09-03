// works only with objects
interface PointInterface {
  x: number;
  y: number;
}

const pt: PointInterface = { x: 123, y: 324 };

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  //   sayHi: (name: string) => string
  sayHi(): string; // same
}

const thomas: Person = {
  first: "Thomas",
  last: "Hardy",
  nickname: "Tom",
  id: 1232,
  sayHi: () => "Hello",
};

thomas.first = "Laymean";
// thomas.id = 43234 // error, id is readonly

interface ProductInterface {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: ProductInterface = {
  name: "Blue Suede Shoes",
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

console.log(shoes.applyDiscount(0.4));

interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

const elthon: Dog = {
  name: "Elthon",
  age: 0.5,
  breed: "Australian Shepherd",
  bark: () => {
    return "Woof Woof";
  },
};

interface ServiceDog extends Dog {
  job: "Drugs sniffer" | "Bomb" | "Guide dog";
}

const chewy: ServiceDog = {
  name: "Chewy",
  age: 4.5,
  breed: "Labrador",
  bark: () => {
    return "Bark!";
  },
  job: "Guide dog",
};

interface Human {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

// multiple inheritance
interface Engineer extends Human, Employee {
  level: string;
  languages: string[];
}

const pierre: Engineer = {
  name: "Pierre",
  id: 2343,
  email: "pierre@gmail.com",
  level: "senior",
  languages: ["JS", "Python"],
};

// Interfaces can only describe the shape of an object, Types can of any
// Union Types that are not object can't be done by Interfaces
// Interfaces can reopen and add-on, that can't be done by Types
// Interfaces can use extends just like Classes, while Types can use ampersand, to include multiple Types

// interface Person extends Name {}
// type Person = Name & {}
