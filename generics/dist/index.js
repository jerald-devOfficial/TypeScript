"use strict";
// function doThing(thing: number | string): number | string {
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// }
// const nums: number[] = []
var nums = [];
var colors = [];
var inputEl = document.querySelector("#username");
console.dir(inputEl);
inputEl.value = "Hacked";
var btn = document.querySelector(".btn");
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
function identity(item) {
    return item;
}
identity(7);
identity("hello");
identity({ name: "MyCat", breed: "AsCat" });
function getRandomElement(list) {
    var randIndx = Math.floor(Math.random() * list.length);
    return list[randIndx];
}
var getRandomTSElement = function (list) {
    var randIndx = Math.floor(Math.random() * list.length);
    return list[randIndx];
};
console.log(getRandomElement(["a", "b", "c"]));
console.log(getRandomElement([5, 6, 43, 2, 34, 46, 3, 1, 23, 43]));
getRandomElement(["a", "v", "sad"]); // TS can actually infer this
getRandomElement([1, 2, 4, 6]); // TS can actually infer this
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var comboObj = merge({ name: "colt" }, { pets: ["blue", "elton"] });
// you don't need to do this
// merge<{name: string}, {pets: string[]}>({name: 'colt'}, {pets: ['blue', 'elton']})
console.log(merge({ name: "Colt" }, 9)); // will only return obj1, but not a second obj2
// to implicitly make sure it receives objects
function mergeExtends(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var comboObjExtends = mergeExtends({ name: "colt" }, { pets: ["blue", "elton"] });
// console.log(mergeExtends({ name: "Colt" }, 9)); now, this will not work
console.log(mergeExtends({ name: "Colt" }, { num: 9 }));
var printDoubleLength = function (thing) {
    return thing.length * 2;
};
// can be rewritten as this
var printDoubleLength2 = function (thing) {
    return thing.length * 2;
};
printDoubleLength("asaddfd");
// printDoubleLength(2343);
var makeEmptyList = function () {
    return [];
};
var strings = makeEmptyList();
strings.push("asd");
// unknown type
var unknown = makeEmptyList();
var makeEmptyListDefault = function () {
    return [];
};
var numsD = makeEmptyListDefault();
var bools = makeEmptyListDefault();
var VideoPlayList = /** @class */ (function () {
    function VideoPlayList() {
        this.videos = [];
    }
    return VideoPlayList;
}());
var SongPlayList = /** @class */ (function () {
    function SongPlayList() {
        this.songs = [];
    }
    return SongPlayList;
}());
var Playlist = /** @class */ (function () {
    function Playlist() {
        this.queue = [];
    }
    Playlist.prototype.add = function (el) {
        this.queue.push(el);
    };
    return Playlist;
}());
var songs = new Playlist();
var videos = new Playlist();
videos.add;
