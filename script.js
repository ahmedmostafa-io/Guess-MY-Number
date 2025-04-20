'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (guess === secretNumber) {
    displayMessage('🎉 congratulation');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.number').textContent = secretNumber;
  } else if (!guess) {
    displayMessage('⛔ its not Number');
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? ' 💹 too high' : '📉 too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('❌ Oops you lost');
      document.querySelector('.score').textContent = 0;
    }
  }
  // ? DRY => Don't Repeat Yourself.
  //  else if (guess > secretNumber) {
  //   if (score > 1) {
  //     message.textContent = ' 💹 too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     message.textContent = '❌ Oops you lost';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else {
  //   if (score > 1) {
  //     message.textContent = '📉 too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     message.textContent = '❌ Oops you lost';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayMessage('Start guessing...');
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
});
