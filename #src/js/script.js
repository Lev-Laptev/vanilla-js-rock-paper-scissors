document.addEventListener("DOMContentLoaded", function() {
    const SCISSOR = 'scissors', PAPER = 'paper', ROCK = 'rock';
    const moves = ['scissors', 'paper', 'rock'];
    const options = document.querySelector('.game__options');
    const message = document.querySelector('.game__message');
    const playerOneImg = document.querySelector('.game__player_1 img');
    const playerTwoImg = document.querySelector('.game__player_2 img');

    let playerOneMove = playerTwoMove = "";

    function getRandomMove() {
        return moves[Math.floor(Math.random() * 3)];
    }

    options.addEventListener('click', (event) => {
        playerTwoMove = getRandomMove();
        playerOneMove = event.target.dataset.id;
        options.style.pointerEvents = "none";

        playerOneImg.src = `img/icons/${playerOneMove}.png`;
        playerOneImg.classList.remove('game__animate_1');
        playerTwoImg.src = `img/icons/${playerTwoMove}.png`;
        playerTwoImg.classList.remove('game__animate_2');
        checkWinner();
    });

    function checkWinner(){
        if(playerOneMove == playerTwoMove) {
            message.textContent = "draw!";
        } else if((playerOneMove == SCISSOR && playerTwoMove == PAPER) || 
        (playerOneMove == PAPER && playerTwoMove == ROCK) || 
        (playerOneMove == ROCK && playerTwoMove == SCISSOR)) {
            message.textContent = "you win!";
        } else {
            message.textContent = "you lose!";
        }

        restart();
    }

    function restart() {
        setTimeout(() => {
            playerTwoMove = getRandomMove();

            message.textContent = "start!";
            playerOneImg.src = `img/icons/hand.png`;
            playerOneImg.classList.add('game__animate_1');

            playerTwoImg.src = `img/icons/hand.png`;
            playerTwoImg.classList.add('game__animate_2');

            options.style.pointerEvents = "";
        }, 2000);
    }
});