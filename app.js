const optionContainer = document.querySelector('.option-container');
const flipButton = document.querySelector('#flip-button');

// Option Choosing
let angle = 0;
function flip() {
    const optionShips = Array.from(optionContainer.children);
    angle = angle === 0 ? 90 : 0;
    optionShips.forEach(optionShip =>optionShip.style.transform = `rotate(${angle}deg)`);

};

// Creating Boards
flipButton.addEventListener('click', flip); 