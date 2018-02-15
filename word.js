// **Word**: Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.

var Game = require("./game.js");

var Word = function(answer) {
  this.answer = answer;
  this.splitWord = this.answer.split("");
}

// var newGame = new Game().selectedAnswer;
// var wordUp = new Word(newGame);
// var letterArray = wordUp.splitWord;
// console.log(letterArray);


// Make available for use in other files
module.exports = Word;
