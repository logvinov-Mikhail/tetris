const grid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 2, 2, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 2, 0, 0, 0, 0, 0],
];

const colors = ['', 'red', 'green' ];

const shapes = [
    [
        [
            [0, 1, 0],
            [1, 1, 1],
            [0, 0, 0],
        ],
        [
            [0, 1, 0],
            [0, 1, 1],
            [0, 1, 0],
        ],
        [
            [0, 0, 0],
            [1, 1, 1],
            [0, 1, 0],
        ],
        [
            [0, 1, 0],
            [1, 1, 0],
            [0, 1, 0],
        ],
    ],
    [
        [
            [0, 2, 0],
            [0, 2, 2],
            [0, 0, 2],
        ],
        [
            [0, 0, 0],
            [0, 2, 2],
            [2, 2, 0],
        ],
        [
            [2, 0, 0],
            [2, 2, 0],
            [0, 2, 0],
        ],
        [
            [0, 2, 2],
            [2, 2, 0],
            [0, 0, 0],
        ],
    ],
];

let shape = {
    type: 1,
    rotation: 2,
    row: 3,
    col: 4,
}

draw();

function calcPos(row, col){
    const top = row * 5.5;
    const left = col * 5.5;

    return {top, left};
};
//calcPos(3, 2);

function draw(){
    for (let row = 0; row < 15; row++){
        for (let col = 0; col < 10; col++){
            const color = colors[grid[row][col]]; 
            if (color) drawBlock(row, col, color);
        }
    }

    drawShape();
}

function drawShape(){
    const grid = shapes[shape.type][shape.rotation]

    for (let row = 0; row < grid.length; row++){
        for (let col = 0; col < grid.length; col++){
            const color = colors[grid[row][col]]; 
            if (color) drawBlock(row + shape.row, col + shape.col, color);
        }
    }

}

function drawBlock(row, col, color){    //DOM
    const div = document.createElement('div');
    div.classList.add('block', color);
    const {top, left} = calcPos(row, col);
    //console.log({color, top, left});
    div.style = `top: ${top}vh; left: ${left}vh`;
    glass.append(div);
}

function random(max) {
    return Math.floor(Math.random()*max)
}


