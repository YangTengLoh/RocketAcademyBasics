// There are 2 players and players take turns.
// When a player clicks Submit, the game rolls 2 dice and shows the dice rolls, for example 3 and 6.
// The player picks the order of the dice they want. For example, if they wanted the number 63, they would specify that the 2nd dice goes first. You can choose how the player specifies dice order.
// After both players have rolled and chosen dice order, the player with the higher combined number wins.

var randomPlay = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;
  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

var firstRoll = 0;
var secondRoll = 0;
var gameStatus = "Roll";
var turns = 0;
var playerOrder = 0;
var playersArray = [];
var player1Sum = 0;
var player2Sum = 0;
var main = function (input) {
  //
  var playerNumber = 0;
  var message = "";
  //Call function randomPlay to roll

  if (input == "" && gameStatus == "Roll") {
    turns += 1;
    if (playerOrder == 2) {
      playerOrder = 1;
    } else {
      playerOrder += 1;
    }
    firstRoll = randomPlay();
    secondRoll = randomPlay();
    gameStatus = `Players Turn`;
    message = `Welcome Player ${playerOrder}. <br> You rolled ${firstRoll} for Dice 1 and ${secondRoll} for Dice 2. <br> Choose the order of the dice (1 or 2).`;
  } else if (gameStatus == "Players Turn") {
    if (input != 1 && input != 2) {
      return "Please choose 1 or 2";
    } else if (input == 1) {
      playerNumber = Number(`${firstRoll}${secondRoll}`);
    } else if (input == 2) {
      playerNumber = Number(`${secondRoll}${firstRoll}`);
    }
    playersArray.push(playerNumber);
    gameStatus = "Roll";
    message = `Player ${playerOrder}, you chose Dice ${input} first. Your number is ${playerNumber}. <br>`;
    if (playerOrder == 1) {
      message += "It is now Player 2's turn.";
    } else {
      message += `${playersArray[turns - 2]} vs ${playersArray[turns - 1]}, `;
      if (playersArray[turns - 2] > playersArray[turns - 1]) {
        message += `Player 1 wins!`;
      } else if (playersArray[turns - 2] == playersArray[turns - 1]) {
        message += `It's a draw!`;
      } else {
        message += `Player 2 wins!`;
      }
      player1Sum += playersArray[turns - 2];
      player2Sum += playersArray[turns - 1];
      message += `<br> 🔥 Current scores 🔥: <br> Player 1: ${player1Sum} <br> Player 2: ${player2Sum}`;
    }
  }

  return message;
};
