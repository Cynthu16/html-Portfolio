'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '30';

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let sec_number = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let high_score = 0;

////FUNCTION TO REFACTOR//////////
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  /////////////WHEN THERE IS NO INPUT//////////
  if (!guess) {
    displayMessage(' 🙁 Please Enter a number');
    //document.querySelector('.message').textContent = ' 🙁 Please Enter a number';

    ///////wHEN PLAYER WINS/////////
  } else if (guess === sec_number) {
    displayMessage(' 🏅 Correct Number!');
    //document.querySelector('.message').textContent = ' 🏅 Correct Number!';
    document.querySelector('.number').textContent = sec_number;

    ///////Setting bcg color/////////

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    ///////Setting high score/////////
    if (score > high_score) {
      high_score = score;
      document.querySelector('.highscore').textContent = high_score;
      document.querySelector('.score').textContent = score;
    }

    ////////WHEN GUESS IS WRONG
  } else if (guess !== sec_number) {
    if (score > 1) {
      displayMessage(guess > sec_number ? ' 📈Too high!' : '  📉 Too low!');

      //document.querySelector('.message').textContent =guess > sec_number ? ' 📈Too high!' : '  📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('👎 You Lost The Game!');
      //document.querySelector('.message').textContent = '👎 You Lost The Game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#811111';
    }
  }
});
////////////wHEN GUESS IS TO HIGH/////////

/*
  else if (guess > sec_number) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' 📈Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👎 You Lost The Game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#811111';
    }

    ////////////wHEN GUESS IS LOW
  } else if (guess < sec_number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '  📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👎 You Lost The Game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#811111';
    }
  }
});*/
//////////Reset Again Button/////////////
document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  sec_number = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  //document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
///////////////////////////////////////
// Coding Challenge #1

/*

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color () and number width (15rem)

GOOD LUCK 😀

*/ ///////////
