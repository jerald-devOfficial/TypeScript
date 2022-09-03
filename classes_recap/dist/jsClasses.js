class Player {
  static description = "Player in Our Game";
  #score = 0;
  #numLives = 10;
  constructor(first, last) {
    this.first = first;
    this.last = last;
    this.#secret();
  }
  static randomPlayer() {
    return new Player("Andy", "Samberg");
  }
  get fullName() {
    return `${this.first} ${this.last}`;
  }
  set fullName(newName) {
    const [first, last] = newName.split(" ");
    this.first = first;
    this.last = last;
  }
  get score() {
    return this.#score;
  }
  set score(newScore) {
    if (newScore < 0) {
      throw new Error("Score must be positive");
    }
    this.#score = newScore;
  }
  getScore() {
    return this.#score;
  }
  updateScore(newScore) {
    this.#score = newScore;
  }
  taunt() {
    console.log("Booyah");
  }
  loseLife() {
    this.#numLives -= 1;
  }
  #secret() {
    console.log("Secret!!!");
  }
}

class AdminPlayer extends Player {
  isAdmin = true;
  constructor(first, last, powers) {
    super(first, last);
    this.powers = powers;
  }
}
const admin = new AdminPlayer("admin", "Jerald", ["delete", "restore world"]);

const player1 = new Player("Jerald", "Baroro");
// player1.taunt();
// console.log(player1.first);
// console.log(player1.last);
// console.log(player1);
// console.log(player1.numLives);
// player1.loseLife();
// console.log(player1.numLives);
console.log(player1.getScore());
console.log(player1.updateScore(28));
console.log(player1.getScore());
player1.getScore();
console.log(player1.secret);
console.log(player1.fullName);
console.log((player1.score = 30));
console.log(player1.score);

console.log(player1.fullName);
console.log((player1.fullName = "Charlie Puth"));
console.log(player1.fullName);

const player2 = new Player("Charlie", "Brown");
player2.taunt();
console.log(player2.first);
console.log(player2.last);
