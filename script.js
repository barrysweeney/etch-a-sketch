const container = document.getElementById('container');
const resetButton = document.getElementById('reset');
const squares = document.getElementsByClassName('item')
let squaresPerSide = 4;

// setup the initial grid
createDivs(squaresPerSide);
makeDrawable();

resetButton.addEventListener('click', function (event) {
    for (i = 0; i < squares.length; i++) {
        squares[i].style.cssText = "background-color: white;";
    }
    squaresPerSide = prompt("How many squares per side would you like your new grid?");
    let newGridSize = repeatString("auto ", squaresPerSide);
    container.style.cssText = `grid-template-columns: ${newGridSize};`;
    container.innerHTML = '';
    createDivs(squaresPerSide);
    makeDrawable();
})

function createDivs(numDivs) {
    for (let i = 1; i <= squaresPerSide ** 2; i++) {
        const div = document.createElement('div')
        div.className = "item"
        div.id = `item${i}`;
        container.appendChild(div);
    }
}

function makeDrawable() {
    for (i = 0; i < squares.length; i++) {
        squares[i].addEventListener('mouseenter', function (event) {
            event.target.style.cssText = "background-color: #92A8D1;"
        })
    }
}

const repeatString = function (myString, times) {
    let stringToReturn = "";
    if (times < 0) { return "ERROR" } else {
        for (let i = 1; i <= times; i++) {
            stringToReturn += myString;
        }
        return stringToReturn;
    }
}
