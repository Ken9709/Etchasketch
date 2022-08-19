let size = 16;
//let color = blue;

const grid = document.querySelector('.grid-container');

function setupGrid(width)
    {
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
        
        e.target.style.backgroundColor = '#333333';
    }

