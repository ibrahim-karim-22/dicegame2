document.querySelector("#rollDiceBtn").addEventListener('click', rollDice)
function rollDice() {
    let goldCoins = 0; 
    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert("You've rolled a " + roll);
        if (roll === 1) {
            alert("Game Over, no more rolls!");
            break;
        } else if (roll < 4) {
            continue;
        }
        if (roll === 4 && goldCoins > 0) {
            goldCoins -= 1;
            alert("You've rolled a 4 :( You lose 1 Gold Coin Total: " + goldCoins);
        }
        if (roll === 5 || roll === 6) {
            goldCoins += 5;
             alert("congratulations! You win 5 Gold Coins! Total: " + goldCoins);
        }
        }    
        alert("You've WON: " + goldCoins + " Gold Coins!" )
}
