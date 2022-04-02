var computerPlay = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 3;
  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);
  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var randomNumber = randomInteger + 1;

  var secretWord = "Banana";
  if (randomNumber == 1) {
    secretWord = "chisel";
  } else if (randomNumber == 2) {
    secretWord = "faucet";
  }
  return secretWord;
};

var numberOfGuessesLeft = "";

//Outputs for  options
//if player == secretWord
// `you guessed the word ${input} and the secret word is ${secretWord}! Congrats! you have ${numberOfGuessesLeft} more guess to win!`

//if player != secretword
// you guessed the word ${input} and the secret word is ${secretWord}! I'm sorry it's wrong, please try again!`

//if player gets 1 right and 1 wrong
//you guessed the word ${input} and the secret word is ${secretWord}! I'm sorry you but you have ${numberOfGuessesLeft} more guess to win!`

var bingoTimes = 0;
var secretWordBaseMain = function (input) {
  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.
  // "banana", "chisel", and "faucet"

  var oppPlay = computerPlay();
  var message = `you guessed the word ${input} and the secret word is ${oppPlay}! `;

  if (input == oppPlay && bingoTimes == 0) {
    bingoTimes = 1;
    message += "Congrats! you have 1 more guess to win!";
  } else if (input == oppPlay && bingoTimes == 1) {
    bingoTimes = 0;
    message += "Congrats! You win!";
  } else {
    message += "I am sorry it is wrong, please try again!";
  }
  return message;
};

var secretWordTwiceRowMain = function (input) {
  // Complete the Comfortable: Secret Word Twice in a Row exercise below with secretWordTwiceRowMain as the main function.
  var oppPlay = computerPlay();
  var message = `you guessed the word ${input} and the secret word is ${oppPlay}! `;

  if (input == oppPlay && bingoTimes == 0) {
    bingoTimes = 1;
    message += "Congrats! you have 1 more guess to win!";
  } else if (input != oppPlay) {
    bingoTimes = 0;
    message += "I am sorry it is wrong, please try again!";
  } else if (input == oppPlay && bingoTimes == 1) {
    bingoTimes = 0;
    message += "Congrats! You win!";
  }

  return message;
};

var secretWordXRowMain = function (input) {
  // Complete the Comfortable: Secret Word X in a Row exercise below with secretWordXRowMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceWithinMain = function (input) {
  // Complete the More Comfortable: Dice Within exercise below with diceWithinMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceWithin2DiceMain = function (input) {
  // Complete the More Comfortable: Dice Within with 2 Dice exercise below with diceWithin2DiceMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var dice4DMain = function (input) {
  // Complete the More Comfortable: Dice 4D exercise below with dice4DeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordTwice2Main = function (input) {
  // Complete the More Comfortable: Secret Word Twice in a Row 2 exercise below with secretWordTwice2Main as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
