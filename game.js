// var Word = require("./word.js");

var Game = function() {
  // Array of all possible answers to choose from
	this.answers = ["tangerine", "watermelon", "zucchini", "squash", "kiwi", "tomato", "parsnip", "broccoli", "apple", "orange", "starfruit"];

  // Define key to hold randomly selected answer from array
	this.selectedAnswer = this.answers[ Math.floor(Math.random() * this.answers.length)];
}

	// FOR TESTING ----------------------------
	// var wordDisplay = new Game();
	// console.log(wordDisplay.selectedAnswer);


module.exports = Game;
