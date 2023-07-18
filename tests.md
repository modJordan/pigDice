Describe: rollDice()

Test: "If a 1 is rolled, the score is set to 0 and returned. "
Code:
let roll = 1;
rollDice(roll);
Expected output: "Your score is 0"

Test: "If a number of 2-6 is rolled, it is added to the score array in the dice object."
let roll = 2;
rollDice(roll);
console.log(dice.score);
Expected output: 2


