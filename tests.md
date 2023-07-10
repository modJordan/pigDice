Describe: rollDice()

Test: "If a 1 is rolled, the score is set to 0 and returned. "
Code:
let roll = 1;
rollDice(roll);
Expected output: "Your score is 0"

Test: "If a 2 is rolled, the score of 2 is added to the previous result until 100 is reached."
Code:
let roll = 2;
rollDice(roll);
Expected output: "Your score is 100"


