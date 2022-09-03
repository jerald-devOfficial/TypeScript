function square(num: number) {
  return num * num;
}
function greet(person: string = "stranger") {
  return `Hi there, ${person}`;
}

const doSomething = (person: string, age: number, isFunny: boolean) => {};

square(3);
// square("asd");
// square(true);
greet("Tonya Harding");
// doSomething("ChickenFace");

greet();

function rando(num: number) {
  if (Math.random() < 0.5) {
    return Number.toString();
  }

  return num;
}

const add = (x: number, y: number): number => {
  return x + y;
};
