var pt = { x: 123, y: 324 };
var thomas = {
    first: "Thomas",
    last: "Hardy",
    nickname: "Tom",
    id: 1232,
    sayHi: function () { return "Hello"; }
};
thomas.first = "Laymean";
var shoes = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
};
console.log(shoes.applyDiscount(0.4));
