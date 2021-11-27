//var randomNumber1 = Math.floor(Math.random()* 6 + 1);
var randomNumber1 = rollDice();
var randomNumber2 = rollDice();
// var randomDice1 = `dice${randomNumber}.png`;
// var randomDice2 = `dice${randomNumber}.png`;
function rollDice() {
    return Math.floor(Math.random()* 6 + 1);
}

function rollBothDice() {
    document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`);
    document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`);
    checkWinner();
}

function checkWinner() {
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = 'Player 1 Wins!';
    } else if (randomNumber1 === randomNumber2) { 
        document.querySelector("h1").innerHTML = 'Tied Game!';
    } else { 
        document.querySelector("h1").innerHTML = 'Player 2 Wins!';
    } 
}

rollBothDice();
