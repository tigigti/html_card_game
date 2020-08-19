console.log("hello there");

document.querySelector(".main-menu").style.display = "none";

const enemyDeck = document.querySelector(".enemy-field .deck");
const playerDeck = document.querySelector(".player-field .deck");
const playerHand = document.querySelector(".player-hand");

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
    playerHand.innerHTML = "";

    gameState.playerHand.forEach((card) => {
        playerHand.innerHTML += `
            <div class="card">${card}</div>
        `;
    });
};

renderBoard();

// Draw Card
playerDeck.addEventListener("click", () => {
    if (gameState.playerDeck.length == 0) return;
    const topDeck = gameState.playerDeck.pop();
    gameState.playerHand.unshift(topDeck);
    renderBoard();
});
