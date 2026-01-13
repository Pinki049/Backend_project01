let randomNum = parseInt(Math.random()*10 +1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const prevGuess = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const state = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevG = [];
let numGuess = 1;
let playGame = true ;

 if(playGame){
     submit.addEventListener('click', function(e){
      e.preventDefault();
      const guess = parseInt(userInput.value);
      validateGuess(guess);
     }); 
    }

function validateGuess(guess){
   if(isNaN(guess)){
    alert('please enter a valid number');
   }
   else if(guess<1){
      alert('please enter a number greater than 0');
   }
    else if(guess>10){
      alert('please enter a number less than 101');
   }
   else{
      prevG.push(guess);
      if(numGuess === 11){
      displayGuess(guess);
      displayMessage(`Game over`)
      endGame()
   }
    else{
      displayGuess(guess);
      checkGuess(guess);
    }
   }
}

   function checkGuess(guess){
    if(randomNum < guess){
        displayMessage('guess is too high');
    } else if(randomNum > guess){
        displayMessage('guess too low');
    }
    else{
        displayMessage('guess is right');
        endGame();
    }
   }

   function displayGuess(guess){
      userInput.value = ''
      prevGuess.innerHTML+= `${guess}, `;
      numGuess++ ;
      remaining.innerHTML = `${11-numGuess}`
  }

   function displayMessage(message){
      state.innerHTML = `<h2>${message}</h2>`;
   }

   function endGame(){
     userInput.value = ''
     userInput.setAttribute('disabled', '')
     p.classList.add('button')
     p.innerHTML = `<h2 id = "newG">Start new game</h2>`;
     startOver.appendChild(p)
     playGame = false
     newGame()
   }

   function newGame(){
     const newGameButton =  document.querySelector('#newG')
     newGameButton.addEventListener('click', function(e){
     randomNum = parseInt(Math.random()*10 +1); 
     prevG = []
     numGuess = 1
     remaining.innerHTML = `${11-numGuess}`
     userInput.removeAttribute('disabled')
     startOver.removeChild(p)
     playGame = true

    });
   }
     

   



