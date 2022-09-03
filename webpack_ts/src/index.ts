import { Dog } from "./Dog";
import ShelterDog from "./ShelterDog";
import { add, multiply, divide } from "./utils";

console.log("From index file");

const elton = new Dog("Dog", "Aussie", 0.5);
elton.bark();

console.log(add(4, 5));
console.log(multiply(4, 5));
console.log(divide(4, 5));

const buffy = new ShelterDog("Buffy", "Pitbull", 0.5, "Desert Springs Shelter");
