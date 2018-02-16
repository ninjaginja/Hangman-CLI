// **Letter**: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.

var Word = require('./word.js');
var Game = require('./game.js');

var Letter = function(letterArray) {

  this.letterArray = letterArray;

  this.putPlaceholders = function() {
    // For each loop to cycle through letters:
    var placeholderString = "";
    letterArray.forEach(function(element){
      if (element != " ") {
        placeholderString += "_";
      } else {
        placeholderString += " ";
      }
    });
    console.log(placeholderString);

  }
}

// FOR TESTING ---------------------------------
// var newGame = new Game().selectedAnswer;
// var wordUp = new Word(newGame);
// var letterArray = wordUp.splitWord;
//
//
// var newLetters = new Letter(letterArray);
// newLetters.putPlaceholders();


module.exports = Letter;
