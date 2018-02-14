// EXAMPLE CODE FOR REFERENCE

// const WeatherAdmin = require('./WeatherAdmin.js');
//
// const loginType = process.argv[2];
//
// const userName = process.argv[3];
//
// const userLocation = process.argv[4];
//
// const myAdmin = new WeatherAdmin();
//
// if(loginType === 'admin') {
//   myAdmin.getData();
// } else {
//   myAdmin.newUserSearch(userName, userLocation);
// }

var inquirer = require('inquirer');



inquirer.prompt([
/* Pass your questions in here */
]).then(answers => {
    // Use user feedback for... whatever!!
});
