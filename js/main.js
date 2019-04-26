/*----- constants -----*/ 
const COLORS = {
    '1': 'lime',
    '-1': 'purple',
    '0': 'white',
    
};

/*----- app's state (variables) -----*/
let board;
let winner;
let turn;

/*----- cached element references -----*/ 
const msgEl = document.getElementById('msg');


/*----- event listeners -----*/ 



/*----- functions -----*/
init();

function render(){
    //display message
    if (winner) {
        if (winner === 'T'){
            msgEl.textContent = "It's a Tie!"
        } else {

        }
    } else {
        msgEl.textContent = `${COLORS[turn].toUpperCase()}'s Turn`;

    }
};

function init(){
    board = [
        [0,0,0,0,0,0], // column 1
        [0,0,0,0,0,0], // column 2
        [0,0,0,0,0,0], // column 3
        [0,0,0,0,0,0], // column 4
        [0,0,0,0,0,0], // column 5
        [0,0,0,0,0,0], // column 6
        [0,0,0,0,0,0], // column 7
    ];
    winner = null;
    turn = 1;
    render();
}