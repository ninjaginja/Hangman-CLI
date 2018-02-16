var inquirer = require('inquirer');
var Word = require('./word.js');
var Game = require('./game.js');
var Letter = require('./letter');


// GLOBAL VARIABLES ---------------------------------------------

// Set userGuesses equal to 10
var userGuesses = 10;
var isLetterInWord = false;
var blanksAndSuccesses = [];
var wrongLetters = [];

// Holds string of guessed letters and placeholders
var displayString = "";


// FUNCTIONS -----------------------------------------------
function startGame() {
  // Get random word from answer array using Game constructor
  var newGame = new Game().selectedAnswer;
  console.log(newGame);

  // Split selected answer into separate letters in an array using Word Constructor
  var wordUp = new Word(newGame);
  var letterArray = wordUp.splitWord;

  // Display placeholders for all letters and spaces for all spaces using Letter Constructor
  var newLetters = new Letter(letterArray);
  // newLetters.putPlaceholders();
  gameLetterArray = newLetters.letterArray;
  // console.log(gameLetterArray);

  var numBlanks = gameLetterArray.length;
  // console.log(numBlanks);

  // Reset
  var userGuesses = 10;
  var blanksAndSuccesses = [];
  var wrongLetters = [];

  // Populate '_' for all letters in selected word
  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
  }
  console.log(blanksAndSuccesses.join(" "));

}


// Request user input and compare to gameLetterArray
function compareLetters(letter){
  var isLetterInWord = false;
  inquirer.prompt([
    {
    type: "input",
    name: "letter",
    message: "? Guess a letter."
    }
  ]).then(function(answer){
      for (var i = 0; i < numBlanks; i++) {
        if (answer.letter.toUpperCase() === gameLetterArray[i].toUpperCase()) {
          isLetterInWord = true;
          // displayString += gameLetterArray[i];
          // compareLetters();
        }
      }
        if(isLetterInWord) {
          for (var i = 0; i < numBlanks; i++) {
            if (answer.letter.toUpperCase() === gameLetterArray[i].toUpperCase()) {
              blanksAndSuccesses[i] = answer.letter;
              console.log(blanksAndSuccesses);
            }
          }
        }
        else {
          wrongLetters.push(answer.letter);
          userGuesses--;
          console.log(wrongLetters);
        }

        //
        //  else if (gameLetterArray[i] === " ") {
        //   displayString += " ";
        // } else {
        //   displayString += "_";
        //   userGuesses--;
        // }

      console.log(displayString);


  });
}

// RUN GAME ----------------------------------------------
startGame();
