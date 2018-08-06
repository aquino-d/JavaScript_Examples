console.log('Begin Program');

//Prompts User for number input
var userNumber = prompt('Please type and number > 1');
var secondUserNumber = prompt('Please type a second number > 1');

//prints random number using user input
var randomNumber = Math.floor(Math.random() * (parseInt(secondUserNumber) - parseInt(userNumber))) + parseInt(userNumber);

//Displays message with user inputs and random number
var message = randomNumber + ' is a random number between ' + userNumber + " and " + secondUserNumber;

document.write(message);
console.log('End Program');
