console.log("loaded");
// const for the square
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;

//velocity
let vxl = 0;
let vxr = 0;

let vyl=0;
let vyr=0;

function update(){  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    x += vxl;
    x += vxr;
    y += vyl;
    y += vyr;
    ctx.fillRect(x, y, 30, 30)
    // x, y, width, height 
    collision();
    requestAnimationFrame(update)
}
function collision(){
    if(x >= canvas.width){
        vxr = 0;
        x = canvas.width
    }
    if(y == canvas.width || y == 0){
        vyr = 0;
        vyl = 0;
    }
}
update();