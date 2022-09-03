// const printName = (person: { first: string; last: string }) => {
//   console.log(`${person.first} ${person.last}`);
//   return "blah";
// };

// printName({ first: "Thomas", last: "Jenkins" });

// let coordinate: { x: number; y: number } = { x: 34, y: 2 };

// const randomCoordinate = (): {x:number, y:number} => {
//     return {
//         x: Math.random(), y: Math.random()
//     }
// }

// printName({ first: "Mick", last: "Jagger", age: 31 });
// printName({ last: "Jagger", first: "Mick" });
// const singer = { first: "Mick", last: "Jagger", age: 31 };
// printName(singer);
// printName({});

// type Point = {
//   x: number;
//   y: number;
// };

// let coordinate: Point = { x: 34, y: 2 };

// const randomCoordinate = (): Point => {
//   return {
//     x: Math.random(),
//     y: Math.random(),
//   };
// };

// const doublePoint = (point: Point): Point => {
//   return { x: point.x * 2, y: point.y * 2 };
// };

// type MyNum = number;
// let age: MyNum = 12343;

// type Song = {
//   title: string;
//   artist: string;
//   numStreams: number;
//   credits: {
//     producer: string;
//     writer: string;
//   };
// };

// const calculatePayout = (song: Song): number => {
//   return song.numStreams * 0.0033;
// };

// function printSong(song: Song): void {
//   console.log(`${song.title} - ${song.artist}`);
// }

// const mySong: Song = {
//   title: "Unchained Melody",
//   artist: "Righteous Brothers",
//   numStreams: 123214,
//   credits: {
//     producer: "Phil Spector",
//     writer: "Alex North",
//   },
// };

// const earnings = calculatePayout(mySong);
// console.log(earnings);

// printSong(mySong);

// type Point = {
//   x: number;
//   y: number;
//   z?: number;
// };

// const myPoint: Point = { x: 1, y: 3 };

// type User = {
//     readonly id: number,
//     username: string
// }

// const user: User = {
//     id: 12343,
//     username: 'catgirl'
// }

// console.log(user.id);
// user.id = 13434

type Circle = {
  radius: number;
};
type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "yellow",
};

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat &
  Dog & {
    age: number;
  };

const christy: CatDog = {
  numLives: 7,
  breed: "Husky",
  age: 9,
};
