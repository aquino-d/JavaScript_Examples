console.log("Start Program");

// 4 Prompted User input
var adjective = prompt("Please type an adjective (Uppercase)");
var noun = prompt("Please type a noun ");
var animal = prompt("Please type your favorite animal");
var noise = prompt("Please type your favorite animal noise");

//alerts user is done with input
alert("You're done!");

//User Input and String concatenation to create the variable message  end-result
var message = adjective + " Macdonald had a ";
message += noun + ", E-I-E-I-O </br> and on that ";
message += noun + " he had a ";
message += animal + ", E-I-E-I-O </br>";
message += "with a " + noise + " " + noise + " here </br>";
message += "and a " + noise + " " + noise + " there, </br>";
message += "here a " + noise + ", there a " + noise;
message += ", </br> everywhere a " + noise + " " + noise + ", </br>";
message += adjective + " Macdonald had a ";
message += noun + ", E-I-E-I-O.";

document.write(message);
console.log("End Program");
