'use strict';
// ElisKaholwe - @DIT Thu Jan 18 2024
// “The expert in anything was once a beginner.” @ Helen Hayes
// Generating Random Secret Number using Math.random
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
// Assigning the Initial Value for the Score
let score = 20;

// Handling the click of a  button (Event Listener)
document.querySelector('.check').addEventListener('click', function () {
  // Taking the User Input (Guess) Number from the input Label amd Store it to the Local Variable (State  Variable)
  let userInput = Number(document.querySelector('.guess').value);

  // When the User Has not Entered Any Number on the Input but Attempt to Check
  if (!userInput) {
    document.querySelector('.message').textContent = 'No Number !';
    document.querySelector('.score').textContent = score;
  }

  // When the User Input Number (Guess) is Less than the Generated Secret Number
  else if (userInput < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low !';
    score--;
    document.querySelector('.score').textContent = score;
  }

  // When the User Input Number (Guess) is Greater than the Generated Secret Number
  else if (userInput > secretNumber) {
    document.querySelector('.message').textContent = 'Too High !';
    score--;
    document.querySelector('.score').textContent = score;
    // When the Game is Won (Secret Number Matches the userInput (Guess) Number)
  } else if (userInput === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number !';
    document.querySelector('.highscore').textContent = score;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.btn').style.backgroundColor = '#222';
    document.querySelector('.btn').style.color = '#fff';
    document.querySelector('.number').style.width = '25rem';
    document.querySelector('.score').style.backgroundColor = '#222';
    document.querySelector('.highscore').style.backgroundColor = '#222';
  }

  // When the Score is Equal to Zero ( User has failed to guess the correct number until all the scores become zero)
  if (score === 0) {
    document.querySelector('.message').textContent = 'You Lose !';
    document.querySelector('.guess').value = null;
  }
});

//Click Event Handling When the Play Button is Clicked
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  console.log(secretNumber);
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = null;
  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.btn').style.backgroundColor = '#fff';
  document.querySelector('.btn').style.color = '#222';
});
// The End !

// Will be Updated Soon (Part of To-Do Next Morning)
// DRY - Do not Repeat Yourself Principle & Clean Code Implementation & Practices
// Refactoring Using the Ternary Operator (CHECKING GUESS AGAINST SECRETNUMBER)
// Refactoring Using the Function Declaration/Invoking to Replace Display Message Statements Using querrySelector
