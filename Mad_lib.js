var adjective = prompt("Please type an adjective (Uppercase)");
var noun = prompt("Please type a noun ");
var animal = prompt("Please type your favorite animal");
var noise = prompt("Please type your favorite animal noise");

alert("You're done!");

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