//Business Logic

class Player {
  constructor(name) {
    this.name = name;
  }

  name = "";
  totalScore = 0;
  currentScore = 0;
  diceRoll;
  playerTurn = false;
  addPlayer = addPlayer;

  rollDice() {
    this.diceRoll = Math.floor(Math.random() * 6) + 1;
  }

  playTurn() {
    this.rollDice();
    if (this.diceRoll === 1) {
      this.resetScore();
      this.playerTurn = false;
    } else {
      this.currentScore += this.diceRoll;
    }
  }

  hold() {
    this.totalScore += this.currentScore;
    this.resetScore();
    this.playerTurn = false;
  }

  resetScore() {
    this.currentScore = 0;
  }

  addPlayer() {
    this.name = document.getElementById("#player2").removeAttribute("hidden");

  }
}

class Game {
  constructor() {

  }
}

window.addEventListener("load", () => {
  const rollButton = document.getElementById("roll-dice");
  const holdButton = document.getElementById("hold");
  const addPlayerButton = document.getElementById("add-player");
  const currentScoreElement = document.getElementById("current-score");
  const totalScoreElement = document.getElementById("total-score");

  const player = new Player(this.name);
  currentScoreElement.innerText = player.currentScore;
  totalScoreElement.innerText = player.totalScore;

  rollButton.addEventListener("click", () => {
    player.playTurn();
    currentScoreElement.innerText = player.currentScore;
  });

  holdButton.addEventListener("click", () => {
    player.hold();
    currentScoreElement.innerText = player.currentScore;
    totalScoreElement.innerText = player.totalScore;
  });

  addPlayerButton.addEventListener("click", () => {
    player.addPlayer()
  });