var inquirer = require('inquirer');
var Word = require('./word.js');
var Game = require('./game.js');
var Letter = require('./letter');


// GLOBAL VARIABLES ---------------------------------------------

// Set userGuesses equal to 10
var userGuesses = 10;
var blanksAndSuccesses = [];
var wrongLetters = [];
var gameLetterArray = [];
var numBlanks = 0;


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

  numBlanks = gameLetterArray.length;
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
function compareLetters(){
  var isLetterInWord = false;
  inquirer.prompt([
    {
    type: "input",
    name: "letter",
    message: "? Guess a letter."
    }
  ]).then(function(answer){
      var isLetterInWord = false;
      for (var i = 0; i < numBlanks; i++) {
        if (answer.letter.toUpperCase() === gameLetterArray[i].toUpperCase()) {
          isLetterInWord = true;
        }
      }

      if(isLetterInWord == true) {
        for (var i = 0; i < numBlanks; i++) {
          if (answer.letter.toUpperCase() === gameLetterArray[i].toUpperCase()) {
            blanksAndSuccesses[i] = answer.letter;
            console.log(blanksAndSuccesses.join(" "));
            compareLetters();
          }
        }

      }
      else {
        wrongLetters.push(answer.letter);
        userGuesses--;
        console.log("WrongLetters: " + wrongLetters);
        compareLetters();
      }
  });
}

// RUN GAME ----------------------------------------------
startGame();
console.log(gameLetterArray);

compareLetters();
