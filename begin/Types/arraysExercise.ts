// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
const ages: number[] = [];

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
const gameBoard: string[][] = [];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}
type Product = {
  name?: string;
  price: number;
};

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
// my solution using .reduce()
const getTotal = (products: Product[]): number => {
  return products.reduce((acc, { price }: Product) => acc + price, 0);
};

const getTotal1 = (products: Product[]): number => {
  let total = 0;
  for (let product of products) {
    total += product.price;
  }

  return total;
};

console.log(
  getTotal([
    { price: 21 },
    { price: 12 },
    { price: 34 },
    { price: 45 },
    { price: 87 },
  ])
);
console.log(
  getTotal1([
    { price: 21 },
    { price: 12 },
    { price: 34 },
    { price: 45 },
    { price: 87 },
  ])
);
