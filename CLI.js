var inquirer = require('inquirer');
var Word = require('./word.js');
var Game = require('./game.js');
var Letter = require('./letter');


// Get random word from answer array using Game constructor
var newGame = new Game().selectedAnswer;

// Split selected answer into separate letters in an array using Word Constructor
var wordUp = new Word(newGame);
var letterArray = wordUp.splitWord;

// Display placeholders for all letters and spaces for all spaces using Letter Constructor
var newLetters = new Letter(letterArray);
newLetters.putPlaceholders();
gameLetterArray = newLetters.letterArray;
// console.log(gameLetterArray);


// Set userGuesses equal to 10
var userGuesses = 10;

var displayString = "";

// Prompt user for letter input
if (userGuesses > 0) {
  compareLetters();
}

function compareLetters(){
  inquirer.prompt([
    {
    type: "input",
    name: "letter",
    message: "? Guess a letter."
    }
  ]).then(function(answer){
      // var displayString = "";
      for (var i = 0; i < gameLetterArray.length; i++) {
        if (answer.letter.toUpperCase() === gameLetterArray[i].toUpperCase()) {
          displayString += gameLetterArray[i];
        } else if (gameLetterArray[i] === " ") {
          displayString += " ";
        } else {
          displayString += "_";
          userGuesses--;
        }
      }
      console.log(displayString);
  });
}

// console.log("You have " + userGuesses + " remaining.");
