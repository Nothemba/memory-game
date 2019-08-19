//creating an array from DOM elements
const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

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
  isMatch ? disableCards() : unflipCards();
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
