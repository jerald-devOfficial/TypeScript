// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
// my solution using .reduce()
var getTotal = function (products) {
    return products.reduce(function (acc, _a) {
        var price = _a.price;
        return acc + price;
    }, 0);
};
var getTotal1 = function (products) {
    var total = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        total += product.price;
    }
    return total;
};
console.log(getTotal([
    { price: 21 },
    { price: 12 },
    { price: 34 },
    { price: 45 },
    { price: 87 },
]));
console.log(getTotal1([
    { price: 21 },
    { price: 12 },
    { price: 34 },
    { price: 45 },
    { price: 87 },
]));
