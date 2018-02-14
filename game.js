// var Word = require("./word.js");

var Game = function() {
  // Array of all possible answers to choose from
	this.answers = ["Purple Rain", "Little Red Corvette", "Lets Go Crazy", "Diamonds and Pearls", "Baby Im A Star", "The Beautiful Ones", "U Got The Look", "Starfish And Coffee"];

  // Define key to hold randomly selected answer from array
	this.selectedAnswer = this.answers[ Math.floor(Math.random() * this.answers.length)];
}

	// FOR TESTING ----------------------------
	// var wordDisplay = new Game();
	// console.log(wordDisplay.selectedAnswer);


module.exports = Game;
