const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matchCounter = 0;
var mins = 1;  
var secs = mins * 60;

// Flipping the cards onclick
function flipCard() {
  if (lockBoard) 
  return;
  if (this === firstCard) 
  return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  // second click
  secondCard = this;
  checkForMatch();

}
//Check for matching cards
function checkForMatch() {
let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
 if (isMatch){
     matchCounter += 1;
     disableCards();
     if(matchCounter == (cards.length/2)){
         alert("Congratulations! You won!")
         location.reload();
     }
     else if(matchCounter <(cards.length/2 && secs < 0)){
      countdown(); 
     }
 }
 else {
     unflipCards();
 }
}
//Disable the cards that are aready clicked on
function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 800);
}
// Shuffling cards
(function shuffleCards() {
  let random;
  for (let i = 0; i < cards.length; i++){
   random = Math.floor(Math.random() * 12);
   cards[i].style.order = random;
  }
 
})();
// reserting board everytime a game loads
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

cards.forEach(card => card.addEventListener('click', flipCard));
 
//countdown function is evoked when page is loaded 
function countdown() { 
    setTimeout('Decrement()', 60); 
} 

//Decrement function decrement the value. 
function Decrement() { 
    if (document.getElementById) { 
        minutes = document.getElementById("minutes"); 
        seconds = document.getElementById("seconds"); 
        if (seconds < 59) { 
            seconds.value = secs; 
        }  
        else { 
            minutes.value = getminutes(); 
            seconds.value = getseconds(); 
        } 
        
        if (mins < 0) { 
            alert('Game Over, You lost'); 
            minutes.value = 0; 
            seconds.value = 0; 
            location.reload();
        } 
        else { 
            secs--; 
            setTimeout('Decrement()', 1000); 
        } 
    } 
} 

function getminutes() {  
    mins = Math.floor(secs / 60); 
    return mins; 
} 

function getseconds() {
    return secs - Math.round(mins * 60); 
}

