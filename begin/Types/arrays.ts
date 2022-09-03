// const activeUsers: [] = []; // saying expecting an empty array
// activeUsers.push("Tone"); // won't work because activeUsers is expecting only empty []

const activeUsers: string[] = [];
activeUsers.push("Tony");

const ageList: number[] = [45, 56, 13];
ageList[0] = 99;
// ageList[0] = 'asd' // will get an error, type not nummber

// const bools: Array<boolean> = []
const bools: boolean[] = [];

type Point = {
  x: number;
  y: number;
};

const coords: Point[] = [];
coords.push({ x: 23, y: 8 });

// 2 dimensional array
const board: string[][] = [
  ["X", "0", "0"],
  ["X", "0", "0"],
  ["X", "0", "0"],
];
// 3 dimensional array
const demo: number[][][] = [[[1]]];
