let size = 16;
//let color = blue;


var rangeInput = document.getElementById("rangeinput").value;
var buttonInput = document.getElementById("btn");

if (buttonInput.addEventListener) {
	buttonInput.addEventListener("click", slideVal);
}
else if (buttonInput.attachEvent) {
	buttonInput.attachEvent('onclick', sliderVal);
}

//reads the value from the slider on submission
//as overall size
function slideVal(e) {
    // read the value from the slider:
    var value = document.getElementById("rangeinput").value;
    // now compare:
    size = value;
    reload();
}

function setupGrid(width)
    {
        var grid = document.querySelector('.grid-container');
        grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
        for (let i =0; i<size*size; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover',changeColor)
        square.addEventListener('mousedown', changeColor)
        grid.appendChild(square);
        }
    }

    setupGrid(size);

    function changeColor(e){
        
        e.target.style.backgroundColor = '#334324';
    }

    function reload(){
        
        var grid = document.querySelector('.grid-container');
        grid.parentNode.removeChild(grid);
        var div = document.createElement("div");
        div.classList.add('grid-container');
        document.getElementById("main").appendChild(div);
        //const grid = document.querySelector('.grid-container');
        setupGrid(size);
    }


