// Variables for the game/ Global Variables
// ===============================================
var wins = 0
var losses = 0
var guessesLeft = 9;
var playerGuess = [];
var randomWord;
var fashionWords = ['peplum','lace','leather','houndstooth','midi','shortalls','pumps','oxfords']
var incorrectLetter = [];
var correctLetter = [];
var underScores
var winCount = 0
var lossCount = 0
var myObstacles = [];
var mySound;
var myMusic




// Generate Random Words and store them in a variable....an Array?
// Game start
// Make underscores
//Determine if player guesses for the letters are correct
//Determine if player guesses for the letteres are incorrect

function playGame() {

randomWord = fashionWords[Math.floor(Math.random)() * fashionWords.length];
console.log(randomWord);

}

//Prompt start to game

playGame();

document.onkeyup = function(event)
{
  playerGuess = event.key;
if (randomWord.indexOf(playerGuess) > -1)
{

for (var i = 0; i < randomWord.length i++)
{
	
   if (randomWord[i] == playerGuess)
   {
     underScores[i] = playerGuess;
     console.log(underScores); 

   } 

   //To get underScores to show up 

 document.getElementbyID('word').textContent = underScores.join("");

}

  else if {
    
   (randomWord[i] !-- playerGuess);
   underScores [i] = playerGuess;
  
  {
    incorrectLetter.push(playerGuess);
    guessesLeft--;
    console.log(guessesLeft);


  }
 

//To look at guesses left
 document.getElementByID('guessesLeft').textContent = guessesLeft;


 //reset guess
 incorrectLetter = []
 guessesLeft = 9;


//   underScores.push('_');

// 	return underScore;
// }
     
// At Game Play Music Starts

function playStartMusic () {

  myMusic = new sound ("deepHouse1.wav");
  myMusic.play ();
  myGameStart.start ();
}


document.getElementById('letter-blank').innerHTML = underScores.join(" ");
console.log(underScores);

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

  if (randomWord[0] == playerGuess)
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



//Reset Game







// function win(){

	if (correctLetter == radomWord.length);		
{
  alert('You Are A Winner');
  window.location.reload();

  }

}
 
 
{
  if (guessesLeft < 1){
    document.getElementByID('WORD')inner.HTML == fashionWords;
    alert('You Lost, Time To Try Again!');
    window.location.reload();
  }

// while (plaerGuess !-- randomWord) ()



// If the letter is wrong do nothing until user gets letter correct with guesses left






//If the user guesses the correct letter show letter








// If user guesses correct word user score increases by 1 and indicates a win that increases win attempts







//If user guesses incorrect word user score decreases and indicates a loss that increases on loss attempts 