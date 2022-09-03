let age: number | string = 21;
age = 23;
age = "23";

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.334 };

const printAge = (age: number | string): void => {
  console.log(`You are ${age} years old`);
};

printAge(23);

// Type narrowing by checking with typeof
const calcTax = (price: number | string, tax: number) => {
  // if(typeof price === "string") {
  // } else {
  //    price =  price.replace("$", "")
  //     price * tax
  // }

  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;
};

// const nums: number[] =[1, 2, 3, 4, 5]
// const stuff: any[] =[1, 2, 3, 4, 5, "assds", {}] // avoid any if we can

// const stuff: (number | string[]) = [1] // parenthesis is important here
// const stuff: (number | string)[] = [1] // parenthesis is important here, correct way here
// const stuff: (number[] | string[]) = [1] // parenthesis is important here, this will only by array if one type, say number, but not combined

const coords: (Point | Loc)[] = [];
coords.push({ lat: 321.213, long: 23.334 });

// Literal Types
let zero: 0 = 0;
let hi: "hi" = "hi";
// zero = 2
let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";
// mood = 'Angry' // error

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let today: DayOfWeek = "Wednesday";
