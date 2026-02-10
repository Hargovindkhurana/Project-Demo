
let boxes = document.querySelectorAll('.box');
let btn = document.querySelector('#reset');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let newBtn = document.querySelector('#New');

let turn0 = true; // true for X and false for O

let winningStreaks = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
    
];

const resetGame = () => {
    for(let box of boxes) {
        box.innerText = '';
        box.disabled = false;
        msgContainer.classList.add('hide');
    }
}
const newGame = () => {
    for(let box of boxes) {
        box.innerText = '';
        box.disabled = false;
        msgContainer.classList.add('hide');
    }
}

for(let box of boxes) {
    box.addEventListener('click', () => {
         console.log('box clicked');
        if (turn0) {
            box.innerHTML = "<b>X</b>";
            box.style.color = 'red';
            turn0 = false;
        } else {
            box.innerHTML = '<b>O</b>';
            box.style.color = '#358217';
            turn0 = true;
        }
        box.disabled = true;

        checkWinner(); 


    });
    
};

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;

    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableBoxes();
}

const checkWinner = () => {
    for(let winner of winningStreaks) {
        let pos1val = boxes[winner[0]].innerText;
        let pos2val = boxes[winner[1]].innerText;
        let pos3val = boxes[winner[2]].innerText;

        console.log(pos1val, pos2val, pos3val);
    
        if (pos1val != '' && pos2val != '' && pos3val != '') {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log('winner is ', pos1val);
                showWinner(pos1val);
               
            }
        }
    }
}
btn.addEventListener('click', resetGame);
newBtn.addEventListener('click', newGame);