/*----- constants -----*/
const prompts = ["Player 1's Move", "Player 2's Move", "Player 1 Go Again", "Player 2 Go Again", "Player 1 Wins", "Player 2 Wins", "Tie Game"]

const board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

const player1 = {
    clickableSquares: [0, 1, 2, 3, 4, 5],
    bank: 6,
};
const player2 = {
    clickableSquares: [7, 8, 9, 10, 11, 12],
    bank: 13,
};

/*----- app's state (variables) -----*/
let playerHand;
let player1Move = true;
let winner = false;

/*----- cached element references -----*/
const prompt = document.querySelector('.prompt');

// const banks = document.querySelectorAll('.bank');//dont need?
const p1BankDisplay = document.getElementById('6');
const p2BankDisplay = document.getElementById('13');

// const scores = document.querySelectorAll('.current-score');//dont need?
const p1Score = document.querySelector('#p1-score');
const p2Score = document.querySelector('#p2-score');

const houses = document.querySelectorAll('.house');
const p1h6Display = document.getElementById('0');
const p1h5Display = document.getElementById('1');
const p1h4Display = document.getElementById('2');
const p1h3Display = document.getElementById('3');
const p1h2Display = document.getElementById('4');
const p1h1Display = document.getElementById('5');
const p2h6Display = document.getElementById('7');
const p2h5Display = document.getElementById('8');
const p2h4Display = document.getElementById('9');
const p2h3Display = document.getElementById('10');
const p2h2Display = document.getElementById('11');
const p2h1Display = document.getElementById('12');

const resetButton = document.querySelector('button');

/*----- event listeners -----*/
houses.forEach(house =>
    house.addEventListener('click', playerTurn)
);

resetButton.addEventListener('click', initialize);

/*----- functions -----*/
function whoGoes() {
    if (player1Move === true) {
        prompt.innerHTML = prompts[0];
    } else {
        prompt.innerHTML = prompts[1];
    }
};

function initialize() {
    player1Move = true;
    prompt.innerHTML = prompts[0];
    board.fill(4);
    board[6] = 0;
    board[13] = 0;
    resetButton.innerHTML = 'RESET';
    render();
};

function playerTurn(evt) {
    //Pick a non-zero house from your side to tax
    let clicked = evt.target;
    let clickedIdx = parseInt(clicked.id);
    if (player1Move === true && player2.clickableSquares.includes(clickedIdx)) {
        return;
    };
    if (player1Move !== true && player1.clickableSquares.includes(clickedIdx)) {
        return;
    };
    if (board[clickedIdx] === 0) {
        return;
    };

    //Take that amount in your hand
    playerHand = board[clickedIdx];
    //Remove all money from that house
    board[clickedIdx] = 0;

    //Place $1 in each house moving counter clockwise
    let placeHere = clickedIdx;
      //Continue until your hand is empty
      //Include your bank, but not your opponent's
    for (i = playerHand; i > 0; i--) {
        placeHere++;
        if (player1Move === true && placeHere === player2.bank) {
            placeHere = 0;
        };
        if (player1Move !== true && placeHere === player1.bank) {
            placeHere = 7;
        };
        if (placeHere === 14) {
            placeHere = 0;
        };
        board[placeHere]++;
    };

    //If your last $ lands in your bank
        //Pick another house from your side to tax
    if (player1Move === true && placeHere === 6) {
        prompt.innerHTML = prompts[2];
        render();
        return;
    } else if (player1Move !== true && placeHere === 13) {
        prompt.innerHTML = prompts[3];
        render();
        return;
    };

    //If your last $ lands in an empty house on your side
    //Place that $, and all $ from opposite house in your bank
    if (player1Move === true && board[placeHere] === 1 && player1.clickableSquares.includes(placeHere)) {
        let oppIdx = (12 - placeHere);
        if (board[oppIdx] > 0) {
        board[6] += (board[placeHere] + board[oppIdx]);
        board[placeHere] = 0;
        board[oppIdx] = 0;
        };
    } else if (player1Move !== true && board[placeHere] === 1 && player2.clickableSquares.includes(placeHere)) {
        let oppIdx = (12 - placeHere);
        if (board[oppIdx] > 0) {
        board[13] += (board[placeHere] + board[oppIdx]);
        board[placeHere] = 0;
        board[oppIdx] = 0;
        };
    };

    //If all houses on one side are empty
        //Add all remaining $ on opp side to opp total score
        //Compare total scores
        //Declare winner
            //P1 win = [4], P2 win = [5], Tie = [6];
        //Change 'RESET' button to 'PLAY AGAIN'
        //return
        
    //Else change prompt to next player's move
      //If player 1 just went, set prompt to [1]
      //If player 2 just went, set prompt to [0]
    player1Move = !player1Move;
    whoGoes();
    render();
}

function render () {
    //take all variable and make inner HTML = '$' + value
    p1h1Display.innerHTML = `${board[5]}`;
    p1h2Display.innerHTML = `${board[4]}`;
    p1h3Display.innerHTML = `${board[3]}`;
    p1h4Display.innerHTML = `${board[2]}`;
    p1h5Display.innerHTML = `${board[1]}`;
    p1h6Display.innerHTML = `${board[0]}`;
    p1BankDisplay.innerHTML = `${board[6]}`;
    
    p2h1Display.innerHTML = `${board[12]}`;
    p2h2Display.innerHTML = `${board[11]}`;
    p2h3Display.innerHTML = `${board[10]}`;
    p2h4Display.innerHTML = `${board[9]}`;
    p2h5Display.innerHTML = `${board[8]}`;
    p2h6Display.innerHTML = `${board[7]}`;
    p2BankDisplay.innerHTML = `${board[13]}`;
    
    p1Score.innerHTML = `${board[6]}`;
    p2Score.innerHTML = `${board[13]}`;
}





initialize();