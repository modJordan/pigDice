// Business Logic 

function Dice(result) {
  this.result = result;
  this.score = [];
}

function rollDice(dice, roll) {
  let sum = 0;

  if (roll === 1) {
    sum = 0;
  } else {
    sum + roll;
  }
  dice.score.push(sum)
}

function addTotals() {
  let num = [this.score];
  let numTotal = []
  num.forEach(function (num) {
    for (i = 0; i < sumTotal; i++)
      numTotal.addTotals(num)
  })
}

let dice = new Dice();


