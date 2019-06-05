let auto = "auto ";
let final = auto.repeat(16);
document.getElementById("grid").style.gridTemplateColumns = final;
for(let i = (16*16); i != 0; i --){
    let divs = document.createElement("div");
    divs.className = "gridBlock";
    divs.addEventListener("mouseover",toggle);
    document.getElementById("grid").appendChild(divs);
}

// Buttons 

document.getElementById("size").addEventListener("click",gridCreator);
document.getElementById("erase").addEventListener("click",eraser);
//Functions

function toggle(){
    this.className = "gridBlockOn";
}

function gridCreator(){
    let grid = document.getElementById("grid");
    while(grid.hasChildNodes()){
        grid.removeChild(grid.firstChild);
    }
    let gridSize = prompt("Grid Size: ")
    let auto = "auto ";
    let final = auto.repeat(gridSize);
    document.getElementById("grid").style.gridTemplateColumns = final;
    for(let i = (gridSize*gridSize); i != 0; i --){
        let divs = document.createElement("div");
        divs.className = "gridBlock";
        divs.addEventListener("mouseover",toggle);
        document.getElementById("grid").appendChild(divs);
    }
    return gridSize;
}






