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
  playerDeck: [
    { name: "Bobba", atk: 1, cost: 1 },
    { name: "Dodda", atk: 2, cost: 2 },
    { name: "Buff", atk: "+1", cost: 2 }
  ]
};

const renderBoard = () => {
  enemyDeck.innerHTML = gameState.enemyDeck.length;
  playerDeck.innerHTML = gameState.playerDeck.length;
  playerHand.innerHTML = "";

  gameState.playerHand.forEach(card => {
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

playerHand.addEventListener("click", e => {
  if (e.target.classList.contains("card") || e.target.parentNode.classList.contains("card")) {
    console.log("Show pop up menu");
  }
});
