var introScopeMain = function (input) {
  // Attempt the Follow Along exercise from the Intro to Scope module below with introScopeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
var rollDice = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 5 ... add 1
  var diceNumber = randomInteger + 1;

  return diceNumber;
};
var appSetupMain = function (input) {
  // Attempt the Base: App Setup exercise from the Program Lifecycle and State module below with appSetupMain as the main function.
  var randomDiceNumber = rollDice();
  var myOutputValue = "you lose";

  if (randomDiceNumber == input) {
    myOutputValue = "you win";
  }

  return myOutputValue;
};

//Set a global variable and update the value after each run.
var resultA = 0;
var lastRollMain = function (input) {
  // Attempt the Base: Last Roll exercise from the Program Lifecycle and State module below with lastRollMain as the main function.
  var gameResult = rollDice();
  var message = "hi";
  if (gameResult == input) {
    message = `Last roll is ${resultA}, you rolled a ${gameResult}, guessed ${input}, you win!`;
  } else {
    message = `Last roll is ${resultA}, you rolled a ${gameResult}, guessed ${input}, you lose!`;
  }
  resultA = gameResult;
  return message;
};

var playTimes = 0;
var winningTimes = 0;

var winLossMain = function (input) {
  // Attempt the Base: Win / Loss exercise from the Program Lifecycle and State module below with winLossMain as the main function.
  var gameResult = rollDice();
  playTimes += 1;
  var percentWinning = winningTimes / playTimes;
  var message = "hi";
  if (gameResult == input) {
    winningTimes += 1;
    message = `You win ${percentWinning} % of time, you rolled a ${gameResult}, guessed ${input}, you win!`;
  } else {
    message = `You win ${percentWinning} % of time, you rolled a ${gameResult}, guessed ${input}, you lose!`;
  }
  return message;
};

var rollRecords = [];
var mostRolledMain = function (input) {
  // Attempt the More Comfortable: Most Rolled exercise from the Program Lifecycle and State module below with mostRolledMain as the main function.
  var gameResult = rollDice();
  rollRecords.push(gameResult);
  var modeNumber = rollRecords.mode();
  var message = rollRecords + "and" + modeNumber;

  if (gameResult == input) {
    myOutputValue = "you win";
  }

  var message = rollRecords + "and" + modeNumber;
  return message;
};

var guessingMain = function (input) {
  // Attempt the More Comfortable: Guessing exercise from the Program Lifecycle and State module below with guessingMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var advancedGuessingMain = function (input) {
  // Attempt the More Comfortable: Advanced Guessing exercise from the Program Lifecycle and State module below with advancedGuessingMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Program State for Game Modes module below with followAlongMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var redModeMain = function (input) {
  // Attempt the Red Mode exercise from the Program State for Game Modes module below with redModeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
