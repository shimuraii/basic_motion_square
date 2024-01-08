
// move right 
addEventListener("keydown", function(e){
    if (e.code == 'KeyD') vxr = 3;
    if (e.code == 'KeyA') vxl = -3;
    if (e.code == 'KeyS') vyr = 3;
    if (e.code == 'KeyW') vyl = -3;
});

addEventListener("keyup", function(e){
    if (e.code == 'KeyD') vxr = 0;
    if (e.code == 'KeyA') vxl = 0;
    if (e.code == 'KeyS') vyr = 0;
    if (e.code == 'KeyW') vyl = 0;
})