// function getRandomElement<K>(list: K[]): K {
//     const randIndx = Math.floor(Math.random() * list.length);
//     return list[randIndx];
//   }

// generic in TSX needs to have a trailing comma <T,>
const getRandomJSXElement = <T,>(list: T[]): T => {
  const randIndx = Math.floor(Math.random() * list.length);
  return list[randIndx];
};
