var randomPlay = function () {
  // Generate a decimal from 0 through 3, inclusive of 0 and exclusive of 3.
  var randomDecimal = Math.random() * 3;
  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 2 inclusive.
  var randomInteger = Math.floor(randomDecimal);
  return randomInteger;
};

// list of options
var gameList = ["Scissors", "Paper", "Stone"];

//emoji generator
var generateEmoji = function (option) {
  if (option == "Scissors") {
    return "✂️";
  } else if (option == "Paper") {
    return "📃";
  } else if (option == "Stone") {
    return "💎";
  }
};

// set global variables to record the number of wins and turns.
var userWins = 0;
var compWins = 0;
var draws = 0;
var turns = 0;
var userName = "";
// Store the user and computer's options in array
var userOption = [
  "Scissors",
  "Paper",
  "Stone",
  "Reversed Scissors",
  "Reversed Paper",
  "Reversed Stone"
];
//set var to store game status
var gameStatus = "username";
var main = function (input) {
  if (gameStatus == "username") {
    userName = input;
    gameStatus = "gamestart";
    return `Hello ${userName} ! You may start the game.`;
  } else if (gameStatus == "gamestart") {
    // computer plays according to the random number
    var compPlay = gameList[randomPlay()];
    // activate AI if selected
    if (input == "AI") {
      input = gameList[randomPlay()];
    }
    var emojiOne = generateEmoji(input);
    var emojiTwo = generateEmoji(compPlay);
    // setup basic message to output
    var message = `${input} ${emojiOne} versus ${compPlay} ${emojiTwo}!`;
    //validations -> check if the user wins
    if (userOption.indexOf(input) == -1) {
      return "Error input! Please try again with Scissors, Paper or Stone~";
    } else {
      //update the number of gameplays
      turns += 1;
      // winning condition -> output you win and update userWins
      if (
        (input == "Scissors" && compPlay == "Paper") ||
        (input == "Paper" && compPlay == "Stone") ||
        (input == "Stone" && compPlay == "Scissors") ||
        (input == "Reversed Scissors" && compPlay == "Stone") ||
        (input == "Reversed Paper" && compPlay == "Scissors") ||
        (input == "Reversed Stone" && compPlay == "Paper")
      ) {
        message += " You Win!";
        userWins += 1;
      }
      //draw -> output it's a draw and update draws
      else if (input == compPlay) {
        message += " It's a draw!";
        draws += 1;
      } else {
        //other situation -> output you lose and update compWins
        message += " You Lose! Please try again~";
        compWins += 1;
      }
    }
    // add winning records to the message above
    var gamePlayer = ` Player: ${userName} `;
    var gameStats = `Updated until Round ${turns}: ${userWins} vs ${compWins}, draws: ${draws}`;
    return message + "<br>" + gamePlayer + "<br>" + gameStats;
  }
};
