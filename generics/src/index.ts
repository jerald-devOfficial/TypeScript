// function doThing(thing: number | string): number | string {

// }

// const nums: number[] = []
const nums: Array<number> = [];
const colors: Array<string> = [];

const inputEl = document.querySelector<HTMLInputElement>("#username")!;
console.dir(inputEl);
inputEl.value = "Hacked";

const btn = document.querySelector<HTMLButtonElement>(".btn")!;

function numberIdentity(item: number): number {
  return item;
}

function stringIdentity(item: string): string {
  return item;
}

function booleanIdentity(item: boolean): boolean {
  return item;
}

// function identity(item: any): any {
//     return item
// }

interface Cat {
  name: string;
  breed: string;
}

function identity<Type>(item: Type): Type {
  return item;
}

identity<number>(7);
identity<string>("hello");
identity<Cat>({ name: "MyCat", breed: "AsCat" });

function getRandomElement<K>(list: K[]): K {
  const randIndx = Math.floor(Math.random() * list.length);
  return list[randIndx];
}

const getRandomTSElement = <T>(list: T[]): T => {
  const randIndx = Math.floor(Math.random() * list.length);
  return list[randIndx];
};

console.log(getRandomElement<string>(["a", "b", "c"]));
console.log(getRandomElement<number>([5, 6, 43, 2, 34, 46, 3, 1, 23, 43]));

getRandomElement(["a", "v", "sad"]); // TS can actually infer this
getRandomElement([1, 2, 4, 6]); // TS can actually infer this

function merge<T, U>(obj1: T, obj2: U) /* : T & U -- infer the return type */ {
  return {
    ...obj1,
    ...obj2,
  };
}

const comboObj = merge({ name: "colt" }, { pets: ["blue", "elton"] });

// you don't need to do this
// merge<{name: string}, {pets: string[]}>({name: 'colt'}, {pets: ['blue', 'elton']})

console.log(merge({ name: "Colt" }, 9)); // will only return obj1, but not a second obj2
// to implicitly make sure it receives objects
function mergeExtends<T extends object, U extends object>(
  obj1: T,
  obj2: U
) /* : T & U -- infer the return type */ {
  return {
    ...obj1,
    ...obj2,
  };
}

const comboObjExtends = mergeExtends(
  { name: "colt" },
  { pets: ["blue", "elton"] }
);

// console.log(mergeExtends({ name: "Colt" }, 9)); now, this will not work
console.log(mergeExtends({ name: "Colt" }, { num: 9 }));

interface Lengthy {
  length: number;
}

const printDoubleLength = <T extends Lengthy>(thing: T): number => {
  return thing.length * 2;
};

// can be rewritten as this
const printDoubleLength2 = (thing: Lengthy): number => {
  return thing.length * 2;
};

printDoubleLength("asaddfd");
// printDoubleLength(2343);

const makeEmptyList = <T>(): T[] => {
  return [];
};

const strings = makeEmptyList<string>();
strings.push("asd");

// unknown type
const unknown = makeEmptyList();

const makeEmptyListDefault = <T = number>(): T[] => {
  return [];
};

const numsD = makeEmptyListDefault();
const bools = makeEmptyListDefault<boolean>();

interface Song {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class VideoPlayList {
  public videos: Video[] = [];
}

class SongPlayList {
  public songs: Song[] = [];
}

class Playlist<T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }
}

const songs = new Playlist<Song>();

const videos = new Playlist<Video>();

videos.add;
