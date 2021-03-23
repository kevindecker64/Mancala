/*----- constants -----*/
const prompts = ["Player 1's Move", "Player 2's Move", "Player 1 Wins", "Player 2 Wins", "Tie Game"]

const p1houses = [0, 0, 0, 0, 0, 0];
const p2houses = [0, 0, 0, 0, 0, 0];
const playerBanks = [0, 0]

/*----- app's state (variables) -----*/
let p1Hand, p2Hand;

 
/*----- cached element references -----*/
const prompt = document.querySelector('.prompt');

const banks = document.querySelectorAll('.bank');
const p1BankDisplay = document.querySelector('#p1-bank');
const p2BankDisplay = document.querySelector('#p2-bank');

const scores = document.querySelectorAll('.current-score');
const p1Score = document.querySelector('#p1-score');
const p2Score = document.querySelector('#p2-score');

const houses = document.querySelectorAll('.house');
const p1h6Display = document.querySelector('#p1h6');
const p1h5Display = document.querySelector('#p1h5');
const p1h4Display = document.querySelector('#p1h4');
const p1h3Display = document.querySelector('#p1h3');
const p1h2Display = document.querySelector('#p1h2');
const p1h1Display = document.querySelector('#p1h1');
const p2h6Display = document.querySelector('#p2h6');
const p2h5Display = document.querySelector('#p2h5');
const p2h4Display = document.querySelector('#p2h4');
const p2h3Display = document.querySelector('#p2h3');
const p2h2Display = document.querySelector('#p2h2');
const p2h1Display = document.querySelector('#p2h1');

const resetButton = document.querySelector('button');

/*----- event listeners -----*/
houses.forEach(house =>
    house.addEventListener('click', playerTurn)
);

document.querySelector('button').addEventListener('click', intitialize);

/*----- functions -----*/
function intitialize() {
    prompt.innerHTML = prompts[0];
    p1houses.fill(4);
    p2houses.fill(4);
    playerBanks.fill(0);
    render();
}

function playerTurn(evt) {
    //Pick a house from your side to tax
    let clicked = evt.target;
    p1Hand = clicked.innerHTML
    console.log(p1Hand)
    console.log(clicked.classList);
    console.log(clicked.id.split('')[3])

    //Remove all money from that house
    //Take that amount in your hand
    //Place $1 in each house moving counter clockwise (setInterval?)
        //Include your bank, but not your opponent's
    //Continue until your hand is empty
    //If your last $ lands in your bank
        //Pick another house from your side to tax
    //If your last $ lands in an empty house on your side
        //Place that $, and all $ from opposite house in your bank
    //If all houses on one side are empty
        //Declare winner
            //P1 win = [2], P2 win = [3], Tie = [4];
        //Change 'RESET' button to 'PLAY AGAIN'
    //Else change prompt to next player's move
      //If player 1 just went, set prompt to [1]
      //If player 2 just went, set prompt to [0]
}

function render () {
    //take all variable and make inner HTML = '$' + value
    p1h1Display.innerHTML = `$${p1houses[0]}`;
    p1h2Display.innerHTML = `$${p1houses[1]}`;
    p1h3Display.innerHTML = `$${p1houses[2]}`;
    p1h4Display.innerHTML = `$${p1houses[3]}`;
    p1h5Display.innerHTML = `$${p1houses[4]}`;
    p1h6Display.innerHTML = `$${p1houses[5]}`;
    
    p2h1Display.innerHTML = `$${p2houses[0]}`;
    p2h2Display.innerHTML = `$${p2houses[1]}`;
    p2h3Display.innerHTML = `$${p2houses[2]}`;
    p2h4Display.innerHTML = `$${p2houses[3]}`;
    p2h5Display.innerHTML = `$${p2houses[4]}`;
    p2h6Display.innerHTML = `$${p2houses[5]}`;
    
    p1BankDisplay.innerHTML = `$${playerBanks[0]}`;
    p2BankDisplay.innerHTML = `$${playerBanks[1]}`;
    
    p1Score.innerHTML = `$${playerBanks[0]}`;
    p2Score.innerHTML = `$${playerBanks[1]}`;
}





intitialize();