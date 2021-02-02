const cards = document.querySelectorAll('.memory-card');

let firstCard,secondCard;
let hasFlipped = false;
let lockBoard = false;
function flipCards(){
    if (lockBoard) return;
        
    
if (this ===firstCard)
    return;
this.classList.add('flip');

if(!hasFlipped){
    hasFlipped = true;
    firstCard = this;

    return;
}
secondCard = this;
checkForMatch();
}

function checkForMatch(){
    let isMatch = firstCard.dataset.images === secondCard.dataset.images;
    isMatch ? disableCards() : unflipCards();
}

function disableCards(){
    firstCard.removeEventListener('click',flipCards);
    secondCard.removeEventListener('click',flipCards);

    resetBoard();
}

function unflipCards(){
    lockBoard = true;

    setTimeout(() =>{
firstCard.classList.remove('flip');
secondCard.classList.remove('flip');

resetBoard();
    },1500);
}

function resetBoard(){
    [hasFlipped, lockBoard] = [false,false];
    [firstCard,secondCard] = [null,null];
}
(function shuffle(){
    cards.forEach(card =>{
        let randomCard = Math.floor(Math.random()* 12);
        card.style.order = randomCard
    });
})();
cards.forEach(card => card.addEventListener('click',flipCards));

function resetCards(){
document.location.href = '';
}
document.querySelector('button').addEventListener('click',resetCards);
