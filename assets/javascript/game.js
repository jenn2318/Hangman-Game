// Variables for the game/ Global Variables
// ===============================================
var wins = 0
var losses = 0
var guessesleft = 9;
var playerGuess = [];
var randomWord;
var fashionWords = ['peplum','lace','leather','houndstooth','midi','shortalls','pumps','linen']
var incorrectLetter = [];
var correctLetter = [];
var underScores
var winCount = 0
var lossCount = 0




// Generate a Random Word and store it in a variable 
// Game start
// Make underscores
//Determine if player guesses for the letters are correct
//Determine if player guesses for the letteres are incorrect

function playGame() {

randomWord = fashionWords[Math.floor(Math.random)() * fashionWords.length];
console.log(randomWord);

}

for (var i = 0; i < randomWord.length i++)
{
	underScores.push('_');

	return underScore;
}
     

document.getElementById('letter-blank').innerHTML = underScores.join(" ");
console.log(underScores);

correctLetter = [];
incorrectLetter = [];
guessesLeft = 11

}

document.getElementbyID('guessesLeft').innerHTML = guessesLeft;


//Check to see if letters are correct-player's guesses/ and determines guesses left


document.onkeyup = function(event)
{
	playerGuess = event.key;
	console.log(payerGuess);


 if(randomWord.indexOf(playerGuess) > -1)
{

  if (randomWord[0] === playerGuess)
   {
    underScores[i] = playerGuess;
    console.log(underScores);
    winCount++;
    winLose();

   }
}
 else{

      incorrecrLetter.push(playerGuess);
      console.log(incorrectLetter);
	}
}


function win(){

	if (winCount === radomWord.lenth)		
}
  alert('Winner');

// while (plaerGuess !-- randomWord) ()



// If the letter is wrong do nothing until user gets letter correct with guesses left






//If the user guesses the correct letter show letter








// If user guesses correct word user score increases by 1 and indicates a win that increases win attempts







//If user guesses incorrect word user score decreases and indicates a loss that increases on loss attempts 