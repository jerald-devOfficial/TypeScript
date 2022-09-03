"use strict";
const triple = (value) => {
    if (typeof value === "string") {
        return value.repeat(3);
    }
    return value * 3;
};
// truthy
const el = document.getElementById("idk");
if (el) {
    el;
}
else {
    el;
}
// optional chaining
const printLetters = (word) => {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    }
    else {
        word;
        console.log("You did not pass in a word");
    }
};
// Equality Narrowing
function someDemo(x, y) {
    if (x === y) {
        x.toUpperCase();
        y;
    }
}
someDemo(3, "3");
function getRuntime(media) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}
console.log(getRuntime({ title: "Amadeus", duration: 140 }));
console.log(getRuntime({ title: "Spongebob", numEpisodes: 80, episodeDuration: 30 }));
// instanceOf will work for class, any that has new Some()
function printFullDate(date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else {
        console.log(new Date(date).toUTCString());
    }
}
class User {
    constructor(username) {
        this.username = username;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    // if('username' in entity) {
    // }
    if (entity instanceof User) {
        entity;
    }
    else {
        entity;
    }
}
// animal is Cat
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        animal;
        return "Meow";
    }
    else {
        animal;
        return "Aww";
    }
}
function getFarmAnimalSound(animal) {
    switch (animal.kind) {
        case "pig":
            return "Oink";
        case "cow":
            return "Mooo!";
        case "rooster":
            return "Cockadoodledoo!";
        case "sheep":
            return "Baa!";
        default:
            // We should never make it here, if we handled all cases correctly
            //   const shouldNeverGetHere: never = animal;
            //   return shouldNeverGetHere
            const _exhaustiveCheck = animal;
            return _exhaustiveCheck;
    }
}
const stevie = {
    name: "Stevie Chicks",
    weight: 2,
    age: 1.5,
    kind: "rooster",
};
console.log(getFarmAnimalSound(stevie));
