var score = 0;
var beginQuiz = alert('You are about begin the 5 question cat quiz!');
// Quiz questions, conditional statements track score by using var score, adding + 1 when answered correct 

// Question 1
var questionOne = prompt('1. Cats always land on their feet? True or False?');
if (questionOne.toUpperCase() === 'FALSE') {
  score += 1;
}

// Question 2
var questionTwo = prompt('2. When did the domestic cat first appear on the scene? 7000 or 500,000 years ago?');
if (parseInt(questionTwo) === 7000) {
  score += 1;
}

// Question 3
var questionThree = prompt('3. Can a cat purr when scared? True or false?');
if (questionThree.toUpperCase() === 'TRUE') {
  score += 1;
}

// Question 4
var questionFour = prompt('4. According to the Greek scholar Herodotus, did the ancient Egyptians show their grief over the death of a pet cat by shaving their eyebrows? True or false?');
if (questionFour.toUpperCase()=== 'TRUE') {
  score += 1;
}

// Question 5
var questionFive = prompt('5. Is Max the most popular cat name in the U.S.? True or false?');
if (questionFive.toUpperCase() === 'TRUE') {
  score += 1;
}

// rank set to empty string so that it can be filled by conditional statement below
var rank = '';
 
//conditional state to set rank by score
if (score === 5) {
  rank = 'the Gold Crown!';
} else if (score === 4 || score === 3) {
    rank = 'the Silver Crown!';
} else if (score === 2 || score === 1) {
    rank = 'the Bronze Crown!';
} else {
    rank = 'No Crown at all!';
}
var playerEndScore = 'You finished the Cat Quiz with a score of ' + score + ' out of 5! You earned ' + rank.toUpperCase();
document.write(playerEndScore);


















