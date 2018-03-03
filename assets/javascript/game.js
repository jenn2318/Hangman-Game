// Variables for the game
// ===============================================

//Wins
var wins = 0

//Losses
var losses = 0

//Guesses palyer has left
var guessesLeft = 10;

//Player guess the correct letter
var playerGuessC = [];

//Player guess incorrect letter
var playerGuessI = [];

//Random word chosen by the program
var randomWord = [];

//Array of words for the game...the answers
// var fashionWords = ['peplum'
//                      'lace','leather','houndstooth','midi','shortalls','pumps','oxfords'];

var fashionWords = [peplum
                   lace
                   leather
                   houndstooth
                   midi
                   shortalls
                   pumps
                   oxfords];

//Spaces for the letters to appear, while playing
var underScore = [];

//Tracking wins
var winCount = 0

//Tracking losses
var lossCount = 0

//For the music
var myObstacles = [];
//Music variable
var mySound;
//To Play Music in the game
var myMusic

//================================================================================
//---GAME PLAY STARTS NOW--
//I have to set the words up so the for loop can loop through the array and set the random code to place a random word//

// Generate Random Words and store them in a variable....an Array?
// Game start
// Make underscores
//Determine if player guesses for the letters are correct
//Determine if player guesses for the letteres are incorrect


// var answerArray = [];
// for (var i = 0; i < fashionWords.length i++) {
//   answerArray[i] = "_";
// }



//================================================================================
//FUNCTIONS

function playGameRandomWord() {

 var randomWord = fashionWords[Math.floor(Math.random)() * fashionWords.length)];
  return; randomWord;
}

for (var i = 0; i < randomWord.length i++) {

     
     underScore.push(' _ ');

    }
     
     fashionWords.push(randomWord[i]);

}

//Or if underScore does not show up try this below.....
//To get underScores to show up 

 document.getElementbyID('word').textContent = underScores.join(" ");


playGameRandomWord();


document.onkeyup = function(event)
{
 var playerGuess = event.key;

  console.log(playerGuess.toUpperCase())};


if (randomWord.indexOf(playerGuess) > -1)
{
//Checks to see if the letter exists inside of the word
   
      if (randomWord[i] == playerGuess)
   {
       underScores[i] = playerGuess;
       console.log(underScores); 

   } 

}

else

{
playerGuessI.push(playerGuess);
guessesLeft--;

   }

}


//To look at guesses left
 document.getElementByID('guessesLeft').textContent = guessesLeft;


 //reset guess
 incorrectLetter = []
 guessesLeft = 10;
//=======================================================================================================
     
// At Game Play Music Starts

function playStartMusic () {

  myMusic = new sound ("deepHouse1.wav");
  myMusic.play ();
  myGameStart.start ();
}

//======================================================================================================

guessesLeft = 11

if (numberOfGuesses++) {
        score.innerHTML = numberOfGuesses;
        evaluateGuessesLeft();

}

document.getElementbyID('guessesLeft').innerHTML = guessesLeft;



//Check to see if letters are correct-player's guesses/ and determines guesses left


 if(randomWord.indexOf(playerGuess) > -1)
{

  if (randomWord[0] == playerGuess)
   {
    underScores[i] = playerGuesss

   }
}
 else{

      playerGuessI.push(playerGuess);
      console.log(incorrectLetter);
	}
}


// If the letter is wrong do nothing until user gets letter correct with guesses left



//If the user guesses the correct letter show letter


if (event.key == true) {

  return playerGuessC;
}

//IMAGES To make images not appear, but appear when user guesses correct and guesses incorrect
//============================================================================================
function FlashImage() {
     while (true) {
           showImage = true;
           yield WaitForSeconds(0.2secs;
           showImage = false
           yield WaitForSeconds(0.3secs);
    }
}

//===========================================================================================

// If user guesses correct word user score increases by 1 and indicates a win that increases win attempts

function checkForWin() {
    for (var i = 0; i < fashionWords.length; i++) {
        if (randomWordArray[i] != "null") {
            return false;
        }
    }
    game.playerGuess += 1;
    return true;
    winCount++;
}

if (correctLetter == radomWord.length){
  alert('You Are A Winner');
  location.reload();

  }

}



//If user guesses incorrect word user score decreases and indicates a loss that increases on loss attempts 

function checkForLoss() {
    if (playerGuess == 0) {
        playerGuess += 1;
        return true;
    }
    return false;
    lossCount++;
}

 if (guessesLeft < 1){
    document.getElementByID('WORD')inner.HTML == fashionWords;
    alert('You Lost, Time To Try Again!');
    location.reload();
  }
