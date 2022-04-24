//Form a new deck
var makeDeck = function () {
  // Initialise an empty deck array
  var cardDeck = [];
  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  var suits = ["hearts", "diamonds", "clubs", "spades"];

  // Loop over the suits array
  for (var i = 0; i < suits.length; i += 1) {
    // Store the current suit in a variable
    var currentSuit = suits[i];

    // Loop from 1 to 13 to create all cards for a given suit
    // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
    // This is an example of a loop without an array.
    for (var rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      // By default, the card name is the same as rankCounter
      var cardName = rankCounter;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName == 1) {
        cardName = "ace";
      } else if (cardName == 11) {
        cardName = "jack";
      } else if (cardName == 12) {
        cardName = "queen";
      } else if (cardName == 13) {
        cardName = "king";
      }

      // Create a new card with the current name, suit, and rank
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter
      };

      // Add the new card to the deck
      cardDeck.push(card);
    }
  }

  // Return the completed card deck
  return cardDeck;
};

// card shuffling function
// Get a random index ranging from 0 (inclusive) to max (exclusive).
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

// Shuffle the elements in the cardDeck array
var shuffleCards = function (cardDeck) {
  // Loop over the card deck array once
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(cardDeck.length);
    // Select the card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];
    // Select the card that corresponds to currentIndex
    var currentCard = cardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
    // Increment currentIndex
    currentIndex = currentIndex + 1;
  }
  // Return the shuffled deck
  return cardDeck;
};

//Emoji Generator
var generateEmoji = function (input) {
  var currentCard = input;
  var myOutputValue = "";
  if (currentCard.suit == `hearts`) {
    return (myOutputValue = `♥`);
  }
  if (currentCard.suit == `diamonds`) {
    return (myOutputValue = `♦`);
  }
  if (currentCard.suit == `clubs`) {
    return (myOutputValue = `♣`);
  }
  if (currentCard.suit == `spades`) {
    return (myOutputValue = `♠`);
  }
};

var imageOne =
  '<img src="https://c.tenor.com/1dMhKdKO0jwAAAAj/cute-funny.gif"/>';
var imageTwo =
  '<img src="https://c.tenor.com/9XCr9dBEygwAAAAi/peach-cat.gif"/>';
var imageThree =
  '<img src="https://c.tenor.com/nTHEA-07B9sAAAAj/animal-kitty.gif"/>';
var imageFour =
  '<img src = "https://c.tenor.com/OaBpvlZqEugAAAAj/akirambow-smile-person.gif"/>';

//main function
var playerCards = [];
var compCards = [];
var gameMode = "betting";
var playerCardsDrawn = "";
var compCardsDrawn = "";
var playerSum = 0;
var compSum = 0;
var message = "";
var gamingPoints = 100;
var bet = 0;
var trackPlayer = 0;
var trackComp = 0;
var main = function (input) {
  var cardDeck = makeDeck();
  var shuffledDeck = shuffleCards(cardDeck);

  if (gameMode == "betting") {
    if (input > gamingPoints) {
      message = "You have exceeded the points you have, please try again!";
      return message;
    } else {
      bet = Number(input);
      gameMode = "deal cards";
      message = `You have bet ${bet} for this round, good luck! Click Submit to start the game.`;
      return message;
    }
  } else if (gameMode == "deal cards") {
    playerCards = [];
    compCards = [];
    playerCardsDrawn = "";
    compCardsDrawn = "";
    playerSum = 0;
    compSum = 0;
    trackPlayer = 0;
    trackComp = 0;
    for (var i = 0; i < 2; i++) {
      var playerTempCard = shuffledDeck.pop();
      var compTempCard = shuffledDeck.pop();
      playerCards.push(playerTempCard);
      compCards.push(compTempCard);
      playerCardsDrawn += `${playerCards[i].name} of ${generateEmoji(
        playerCards[i]
      )} <br>`;
      compCardsDrawn += `${compCards[i].name} of ${generateEmoji(
        compCards[i]
      )} <br>`;
      if (compCards[i].rank > 10) {
        compCards[i].rank = 10;
      }
      if (playerCards[i].rank > 10) {
        playerCards[i].rank = 10;
      }
      if (playerCards[i].rank == 1) {
        playerSum += 10;
      }
      playerSum += playerCards[i].rank;
      compSum += compCards[i].rank;
    }
    gameMode = "Hit and Stand";
    message =
      `Player😎:<br> ${playerCardsDrawn} <br> Computer💻:<br> ${
        compCards[0].name
      } of ${generateEmoji(compCards[0])}<br>Hidden Card<br>` +
      "<br>Hit (H) or Stand (S)?";
    return message;
  } else if (gameMode == "Hit and Stand") {
    if (input == "H") {
      var addCard = shuffledDeck.pop();
      playerCards.push(addCard);
      if (addCard.rank > 10) {
        addCard.rank = 10;
      }
      var playerCheckList = playerCards.findIndex((object) => {
        return object.rank == 1;
      });
      if (playerCheckList <= 1 && playerSum > 21 && trackPlayer == 0) {
        playerSum -= 10;
        trackPlayer = 1;
      }
      playerCardsDrawn += `${addCard.name} of ${generateEmoji(addCard)}<br>`;
      playerSum += addCard.rank;
      message =
        `You drew ${addCard.name} of ${generateEmoji(
          addCard
        )}.<br>Current points: ${playerSum} <br>Hit (H) or Stand (S)?<br>` +
        imageTwo;
      return message;
    } else if (input == "S") {
      if (compCards[0].rank == 1 && compCards[1].rank == 1) {
        compSum = 21;
      } else if (
        compSum == 11 &&
        (compCards[0].rank == 1 || compCards[1].rank == 1)
      ) {
        compSum = 21;
      } else {
        while (compSum < 17) {
          var compAddCard = shuffledDeck.pop();
          compCards.push(compAddCard);
          if (compAddCard.rank > 10) {
            compAddCard.rank = 10;
          }
          var compCheckList = compCards.findIndex((object) => {
            return object.rank == 1;
          });
          compCardsDrawn += `${compAddCard.name} of ${generateEmoji(
            compAddCard
          )} <br>`;
          compSum += compAddCard.rank;
          if (trackComp == 0) {
            if (compCheckList != -1 && compSum <= 10) {
              compSum += 10;
              trackComp = 1;
            } else if (compCheckList != -1 && compSum > 21) {
              compSum -= 10;
              trackComp = 1;
            }
          }
        }
      }
      if (playerCards[0].rank == 1 && playerCards[1].rank == 1) {
        playerSum = 21;
      }
      message = `Player😎: <br> ${playerCardsDrawn} <br> Computer💻: <br> ${compCardsDrawn}<br>🔥${playerSum} vs ${compSum}🔥<br>`;

      if (playerSum == compSum) {
        message += "It's a tie!✌";
      } else if (playerSum == 21) {
        message += "You have a Black Jack! You win!<br>" + imageFour;
        gamingPoints += bet * 2;
      } else if (playerSum > compSum && playerSum <= 20) {
        message += "Higher hand! You win!<br>" + imageFour;
        gamingPoints += bet;
      } else if (playerSum > 21 && compSum > 21) {
        message += "You and Computer Busted! TIE!!!!!";
      } else if (compSum > 21) {
        message += "Computer busted! You Win!";
        gamingPoints += bet;
      } else if (compSum == 21) {
        message += "Computer has a Black Jack! You lose!<br>" + imageOne;
        gamingPoints -= bet * 2;
      } else {
        message += "Sorry, you lost the game...<br>" + imageThree;
        gamingPoints -= bet;
      }
      gameMode = "betting";
      message += `<br>Current Points: ${gamingPoints} <br>Input your bet and click Submit to try again! `;
      bet = 0;
      return message;
    }
  }
};
