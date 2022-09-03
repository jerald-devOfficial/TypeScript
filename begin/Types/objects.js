// const printName = (person: { first: string; last: string }) => {
//   console.log(`${person.first} ${person.last}`);
//   return "blah";
// };
var calculatePayout = function (song) {
    return song.numStreams * 0.0033;
};
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 123214,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
};
var earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);
