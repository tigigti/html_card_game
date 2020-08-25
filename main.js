console.log("hello there");
window.scrollTo(0, 1);

document.querySelector(".main-menu").style.display = "none";

const enemyDeck = document.querySelector(".enemy-field .deck");
const playerDeck = document.querySelector(".player-field .deck");
const playerHand = document.querySelector(".player-hand");
const cardPopUp = document.querySelector("#card-pop-up");

const gameState = {
    playerHealth: 30,
    enemyHealth: 30,
    maxPlayerPower: 1,
    currentPlayerPower: 1,
    maxEnemyPower: 1,
    currentEnemyPower: 1,
    enemyDeck: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    enemyHand: [],
    enemyField: [],
    playerField: [],
    playerHand: [],
    playerDeck: [
        { name: "Bobba", atk: 1, cost: 1 },
        { name: "Dodda", atk: 2, cost: 2 },
        { name: "Buff", atk: "+1", cost: 2 },
    ],
};

const renderBoard = () => {
    enemyDeck.innerHTML = `
        <div>Cards: ${gameState.enemyDeck.length}</div>
        <div>Health: ${gameState.enemyHealth}</div>
        <div>Power: ${gameState.currentEnemyPower} / ${gameState.maxEnemyPower}</div>
    `;
    playerDeck.innerHTML = `
    <div>Cards: ${gameState.playerDeck.length}</div>
    <div>Health: ${gameState.playerHealth}</div>
    <div>Power: ${gameState.currentPlayerPower} / ${gameState.maxPlayerPower}</div>
    `;

    playerHand.innerHTML = "";
    gameState.playerHand.forEach((card) => {
        const { name, atk, cost } = card;
        playerHand.innerHTML += `
            <div class="card">
                <div>Name: ${name}</div>
                <div>Power: ${atk}</div>
                <div>Cost: ${cost}</div>
            </div>
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

playerHand.addEventListener("click", (e) => {
    if (e.target.classList.contains("card") || e.target.parentNode.classList.contains("card")) {
        console.log(`Show pop up menu at X: ${e.clientX} Y: ${e.clientY}`);
        cardPopUp.style.display = "flex";
        cardPopUp.style.left = e.clientX + "px";
        cardPopUp.style.top = e.clientY + "px";
        document.addEventListener("click", clickedOutsidePopUp);
    }
});

const clickedOutsidePopUp = (e) => {
    if (
        e.target.id == "card-pop-up" ||
        e.target.classList.contains("card") ||
        e.target.parentNode.classList.contains("card")
    )
        return;

    document.removeEventListener("click", clickedOutsidePopUp);
    cardPopUp.style.display = "none";
};
