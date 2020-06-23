// tic tac toe

// The HTML elements that we need for the game
const board = document.querySelector('#board');
const player1 = document.querySelector('.js-player-1');
const player2 = document.querySelector('.js-player-2');
const endMessageDiv = document.querySelector('.js-end-message');
const restartBtn = document.querySelector('.restart');

// this array tracks the state of the game board.
let game = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// Game Settings
const PLAYER_1_ICON = 'X';
const PLAYER_2_ICON = 'O';
let COUNTER = 0; // track game progress

// game starts with player 1
let currentPlayer = '1';
player1.classList.add('active');

const handleRestart = () => {
  // reload the page
  // feels like cheating but it WILL reset the game
  game = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  currentPlayer = '1';
  player1.classList.add('active');
  player2.classList.remove('active');
  let cells = document.querySelectorAll('.cell');
  cells.forEach(elem => elem.innerText = '');
  endMessageDiv.innerText = '';
  board.addEventListener('click', handleClick);

  //window.location.reload();
};
restartBtn.addEventListener('click', handleRestart);


const toggleRestartBtn = () => {
  // enable the restart btn
  restartBtn.disabled = restartBtn.disabled ? false : true;
};

const win = () => {
  // stop board from being clickable
  // print the winner to the screen
  // activate the restart btn
};

const verifyWin = () => {
  // Use the game array to determine the winner.
  if ((game[0] == game[1] && game[1] == game[2]) || 
      (game[3] == game[4] && game[4] == game[5]) ||
      (game[6] == game[7] && game[7] == game[8]) ||
      (game[0] == game[3] && game[3] == game[6]) ||
      (game[1] == game[4] && game[4] == game[7]) ||
      (game[2] == game[5] && game[5] == game[8]) ||
      (game[2] == game[4] && game[4] == game[6]) ||
      (game[0] == game[4] && game[4] == game[8])) {
        endMessageDiv.innerText = `Player ${currentPlayer} Wins!`;
        toggleRestartBtn();
        board.removeEventListener('click', handleClick);
      } else if (game.every( elem => elem === 'X' || elem === 'O')) {
        endMessageDiv.innerText = 'Draws!'
        toggleRestartBtn();
        board.removeEventListener('click', handleClick);

      }
};

const togglePlayer = () => {
  // use .active to show active player visually...
  currentPlayer = currentPlayer === '1' ? '2' : '1';
  player1.classList.toggle('active');
  player2.classList.toggle('active');
};

const handleClick = (event) => {
  const cell = event.target.id;
  const currentCellDiv = document.getElementById(cell);
  const cellId = cell.charAt(cell.length - 1);
  const icon = currentPlayer === '1' ? PLAYER_1_ICON : PLAYER_2_ICON;

  if (typeof game[cellId] === 'number') {
    currentCellDiv.innerText = icon;

    // so much missing here...
    game[cellId] = icon;
    verifyWin();
    togglePlayer();
  }
};

board.addEventListener('click', handleClick);
