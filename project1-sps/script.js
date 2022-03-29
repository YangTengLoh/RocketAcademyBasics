var playerOpponent = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 3;
  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);
  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var oppCode = randomInteger + 1;
  var oppPlay = "Stone";
  if (oppCode == 1) {
    oppPlay = "Scissors";
  } else if (oppCode == 2) {
    oppPlay = "Paper";
  }
  return oppPlay;
};

var main = function (input) {
  var player2 = playerOpponent();
  var message = `${input} versus ${player2}!`;
  if (input != "Scissors" && input != "Paper" && input != "Stone") {
    return "Error input! Please try again with Scissors, Paper or Stone~";
  } else if (
    (input == "Scissors" && player2 == "Paper") ||
    (input == "Paper" && player2 == "Stone") ||
    (input == "Stone" && player2 == "Scissors")
  ) {
    message += " You Win!";
  } else if (input == player2) {
    message += " It's a draw!";
  } else {
    message += " You Lose! Please try again~";
  }
  return message;
};
