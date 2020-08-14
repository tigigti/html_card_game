console.log("hello there");

document.querySelector(".main-menu").style.display = "none";

const enemyDeck = document.querySelector(".enemy-field .deck");
const playerDeck = document.querySelector(".player-field .deck");

const gameState = {
    enemyDeck: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    enemyHand: [],
    enemyField: [],
    playerField: [],
    playerHand: [],
    playerDeck: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

const renderBoard = () => {
    enemyDeck.innerHTML = gameState.enemyDeck.length;
    playerDeck.innerHTML = gameState.playerDeck.length;
}

renderBoard();

playerDeck.addEventListener("click",()=>{
    const topDeck = gameState.playerDeck.pop();
    gameState.playerHand.push(topDeck);
    renderBoard();
});