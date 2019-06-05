let auto = "auto ";
let final = auto.repeat(16);
document.getElementById("grid").style.gridTemplateColumns = final;
for(let i = (16*16); i != 0; i --){
    let divs = document.createElement("div");
    divs.className = "gridBlock";
    divs.addEventListener("mouseover",toggle);
    document.getElementById("grid").appendChild(divs);
}

let eraseGridSize = 16;

// Buttons 

document.getElementById("size").addEventListener("click",gridCreator);
document.getElementById("erase").addEventListener("click",eraser);
//Functions

function toggle(){
    this.className = "gridBlockOn";
}

function eraser(){
    let grid = document.getElementById("grid");
    while(grid.hasChildNodes()){
        grid.removeChild(grid.firstChild);
    }
    let auto = "auto ";
    let final = auto.repeat(eraseGridSize);
    document.getElementById("grid").style.gridTemplateColumns = final;
    for(let i = (eraseGridSize*eraseGridSize); i != 0; i --){
        let divs = document.createElement("div");
        divs.className = "gridBlock";
        divs.addEventListener("mouseover",toggle);
        document.getElementById("grid").appendChild(divs);
    }
}

function gridCreator(){
    let grid = document.getElementById("grid");
    while(grid.hasChildNodes()){
        grid.removeChild(grid.firstChild);
    }
    let gridSize = 16;
    gridSize = prompt("Grid Size: ")
    eraseGridSize = gridSize;
    let auto = "auto ";
    let final = auto.repeat(gridSize);
    document.getElementById("grid").style.gridTemplateColumns = final;
    for(let i = (gridSize*gridSize); i != 0; i --){
        let divs = document.createElement("div");
        divs.className = "gridBlock";
        divs.addEventListener("mouseover",toggle);
        document.getElementById("grid").appendChild(divs);
    }
}






