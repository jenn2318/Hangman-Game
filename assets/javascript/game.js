// Variables for the game
// ===============================================

var wins = 0;  //Wins
var losses = 0; //Losses

//Guesses palyer has left
var guessesLeft = 3;

//Player guess the correct letter
var playerGuessC = [];

//Player guess incorrect letter
var playerGuessI = [];

//Random word chosen by the program
var randomWord = '';

//Array of words for the game...the answers
var fashionWords = ['peplum','lace','leather','houndstooth','midi','shortalls','pumps','oxfords'];

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

//Determine if player guesses for the letters are correct
//Determine if player guesses for the letteres are incorrect

// Generate Random Words and store them in a variable....an Array?
// Game start
// Make underscores

// var answerArray = [];
// for (var i = 0; i < fashionWords.length i++) {
//   answerArray[


//================================================================================
//FUNCTIONS}

function getWord(){
  randomWord = fashionWords[Math.floor(Math.random() * fashionWords.length)];
}

function underScores(){
  underScore = [];
  for (var i = 0; i < randomWord.length; i++) {   
     underScore.push('_');
  }   
}
function getLetter(){
  document.onkeyup = function(event){
    console.log(event.key);
    checkWord(event.key);
  } 
}
function checkWord(ltr){
 if (randomWord.indexOf(ltr) === -1){
      badGuess();
  } else { 
      goodGuess(ltr);
  }
}
function badGuess(){
    guessesLeft--;
    isGameOver();
}
function goodGuess(ltr){
  underScore[randomWord.indexOf(ltr)] = ltr;
  console.log(underScore);
  isGameOver();
}
function isGameOver(){
  if (guessesLeft === 0){
    alert('You Lose!');
  } else if (underScore.indexOf('_') === -1){
    alert('You Win!');
  }

}
function playGame(){
  guessesLeft = 3;
  getWord();
  underScores();
  console.log(randomWord,underScore);
  getLetter();
}
playGame();

// function playGameRandomWord() {

  

  
//   fashionWords.push(randomWord[i]);i] = "_";
// // }



// //Or if underScore does not show up try this below.....
// //To get underScores to show up 

//  document.getElementbyID('word').textContent = underScores.join(" ");


// playGameRandomWord();


// document.onkeyup = function(event){
//  var playerGuess = event.key;

//   console.log(playerGuess.toUpperCase())
//   if (randomWord.indexOf(playerGuess) > -1){
// //Checks to see if the letter exists inside of the word
   
//       if (randomWord[i] == playerGuess)
//    {
//        underScores[i] = playerGuess;
//        console.log(underScores); 

//    } 

// }

// else { 
//   playerGuessI.push(playerGuess);
// guessesLeft--;

//    }

// }

// //=======================================================================================================
     
// // At Game Play Music Starts

// function playStartMusic () {

//   myMusic = new sound ("deepHouse1.wav");
//   myMusic.play ();
//   myGameStart.start ();
// }

// playStartMusic();
// //======================================================================================================


// //Check to see if letters are correct-player's guesses/ and determines guesses left
// guessesLeft = 10;

// function evaluateGuessesLeft() {

//  if(randomWord.indexOf(playerGuess) > -1)
// {

//   if (randomWord[0] == playerGuess)
//    {
//     underScores[i] = playerGuesss

//    }
// }
//  else{

//       playerGuessI.push(playerGuess)
//        // underScores[i] = playerGuesss
// }

// evaluateGuessesLeft();


// document.getElementbyID('guessesLeft').innerHTML = guessesLeft;

// //To look at guesses left....or look at doing it this way
//  // document.getElementByID('guessesLeft').textContent = guessesLeft;


//  //reset guess
//  incorrectLetter = []
//  guessesLeft = 10;


// // If the letter is wrong do nothing until user gets letter correct with guesses left



// //If the user guesses the correct letter show letter


// if (event.key == true) {

//   return playerGuessC;
// }

// //IMAGES To make images not appear, but appear when user guesses correct and guesses incorrect
// //============================================================================================
// function showImage() {
//     var img = document.getElementById('photo-size');
//     img.style.visibility = 'visible';
// }

// //===========================================================================================

// // If user guesses correct word user score increases by 1 and indicates a win that increases win attempts

// function checkWin() {
//     for (var i = 0; i < fashionWords.length; i++) {
//         if (randomWordArray[i] == fashionWords.length) {
//            console.log(true);
//             return true;
//         }
//     }
//     game.playerGuess += 1;

//     return true;
//     winCount++;
// }

// checkWin();

// function alertWinner(){
// if (playerGuessC == randomWord[0]){
//   alert('You Are A Winner');
//   location.reload();

//   }

// }
// alertWinner();


// //If user guesses incorrect word user score decreases and indicates a loss that increases on loss attempts 

// function checkLoss() {
//    for (var i = 0; i < fashionWords.length; i++) {
//         if (randomWordArray[i] != fashionWords.length) {
//             return false;
//         }
//     }
//     if (playerGuess == 0) {
//         playerGuess += 1;
//         return true;
//     }
//     return false;
//     lossCount++;
// }

// function alertLoss(){
//  if (guessesLeft < 1){
//     alert('You Lost, Time To Try Again!');
//     location.reload();
//   }

// alertLoss();