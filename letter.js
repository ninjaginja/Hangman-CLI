// **Letter**: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.

var Word = require('/.word.js');

// For each loop to circle through letters - SAMPLE CODE TO USE:
var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  // If else statement to detect spaces in for each loop
  if (element != " ") {
    console.log("_");
  } else {
    console.log(" ");
  }
});
