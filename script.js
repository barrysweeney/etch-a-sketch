const container = document.getElementById('container');

        let squaresPerSide = 4;

        function createDivs(numDivs) {
            for (let i = 1; i <= squaresPerSide ** 2; i++) {
                const div = document.createElement('div')
                div.className = "item"
                div.id = `item${i}`;
                container.appendChild(div);
            }
        }
        createDivs(squaresPerSide);

        const boxes = document.getElementsByClassName('item')

        function makeDrawable() {
            for (i = 0; i < boxes.length; i++) {
                boxes[i].addEventListener('mouseenter', function (event) {
                    event.target.style.cssText = "background-color: #92A8D1;"
                })
            }
        }
        makeDrawable();

        const btn = document.getElementById('reset');


        btn.addEventListener('click', function (event) {
            for (i = 0; i < boxes.length; i++) {
                boxes[i].style.cssText = "background-color: white;";
            }
            squaresPerSide = prompt("How many squares per side would you like your new grid?");
            let newGridSize = repeatString("auto ", squaresPerSide);
            container.style.cssText = `grid-template-columns: ${newGridSize};`;
            container.innerHTML = '';
            createDivs(squaresPerSide);
            makeDrawable();
        })


        const repeatString = function (myString, times) {
            let stringToReturn = "";
            if (times < 0) { return "ERROR" } else {
                for (let i = 1; i <= times; i++) {
                    stringToReturn += myString;
                }
                return stringToReturn;
            }
        }
