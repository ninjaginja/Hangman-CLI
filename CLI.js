var inquirer = require('inquirer');
var Word = require('./word.js');
var Game = require('./game.js');
var Letter = require('./letter');


// GLOBAL VARIABLES ---------------------------------------------

var userGuesses = 10;
var blanksAndSuccesses = [];
var wrongLetters = [];
var gameLetterArray = [];
var numBlanks = 0;


// FUNCTIONS -----------------------------------------------
function startGame() {

  // Reset
  userGuesses = 10;
  blanksAndSuccesses = [];
  wrongLetters = [];

  // Get random word from answer array using Game constructor
  var newGame = new Game().selectedAnswer;
  // console.log(newGame);

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

  // Populate '_' for all letters in selected word
  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
  }
  console.log('\x1b[36m%s\x1b[0m', blanksAndSuccesses.join(" "));
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
          }
        }
        console.log("\x1b[32m%s\x1b[0m", "CORRECT!");
        console.log('\x1b[36m%s\x1b[0m', blanksAndSuccesses.join(" "));
        compareLetters();

        var gameLetterString = gameLetterArray.join("");
        var finalString = blanksAndSuccesses.join("");

        // console.log(gameLetterArray);
        // console.log(finalString);

        if (gameLetterString == finalString) {
          console.log("\x1b[32m%s\x1b[0m", "Congratulations! You won! Here's your new word.");
          startGame();
          compareLetters();
        }

      }
      else {
        wrongLetters.push(answer.letter);
        userGuesses--;
        console.log("\x1b[31m", "NOPE! " + userGuesses + " guesses remaining.", "\x1b[0m");
        console.log('\x1b[36m%s\x1b[0m', blanksAndSuccesses.join(" "));


        if(userGuesses > 0){
          compareLetters();
        } else{
          console.log("\x1b[31m%s\x1b[0m", "Boooo! You lost. Here's another shot at it.");
          startGame();
          compareLetters();
        }

      }

  });
}

// RUN GAME ----------------------------------------------
startGame();

compareLetters();

// For testing/debugging
// console.log(gameLetterArray);
