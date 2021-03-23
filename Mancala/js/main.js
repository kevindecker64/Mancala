/*----- constants -----*/
const prompts = ["Player 1's Move", "Player 2's Move", "Player 1 Wins", "Player 2 Wins", "Tie Game"]

//create 1 array for whole board
const board = [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
//set player objects with clickable squares and their bank
// const player1 ={
//     clickableSquares: ,
//     bank: ,
// }
// const player2 ={
//     clickableSquares: ,
//     bank: ,
// }

/*----- app's state (variables) -----*/
let playerHand


/*----- cached element references -----*/
const prompt = document.querySelector('.prompt');

const banks = document.querySelectorAll('.bank');//dont need?
const p1BankDisplay = document.querySelector('#p1-bank');
const p2BankDisplay = document.querySelector('#p2-bank');

const scores = document.querySelectorAll('.current-score');//dont need?
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

const resetButton = document.querySelector('button');//dont need?

/*----- event listeners -----*/
houses.forEach(house =>
    house.addEventListener('click', playerTurn)
);

document.querySelector('button').addEventListener('click', initialize);

/*----- functions -----*/
function initialize() {
    prompt.innerHTML = prompts[0];
    board.fill(4);
    board[6] = 0;
    board[13] = 0;
    render();
}

function playerTurn(evt) {
    //Pick a house from your side to tax
    let clicked = evt.target;
    console.log(clicked)
    //Take that amount in your hand
    //Remove all money from that house
    //Place $1 in each house moving counter clockwise
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
    render();
}

function render () {
    //take all variable and make inner HTML = '$' + value
    p1h1Display.innerHTML = `${board[0]}`;
    p1h2Display.innerHTML = `${board[1]}`;
    p1h3Display.innerHTML = `${board[2]}`;
    p1h4Display.innerHTML = `${board[3]}`;
    p1h5Display.innerHTML = `${board[4]}`;
    p1h6Display.innerHTML = `${board[5]}`;
    p1BankDisplay.innerHTML = `${board[6]}`;
    
    p2h1Display.innerHTML = `${board[7]}`;
    p2h2Display.innerHTML = `${board[8]}`;
    p2h3Display.innerHTML = `${board[9]}`;
    p2h4Display.innerHTML = `${board[10]}`;
    p2h5Display.innerHTML = `${board[11]}`;
    p2h6Display.innerHTML = `${board[12]}`;
    p2BankDisplay.innerHTML = `${board[13]}`;
    
    p1Score.innerHTML = `${board[6]}`;
    p2Score.innerHTML = `${board[13]}`;
}





initialize();