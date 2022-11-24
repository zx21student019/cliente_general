onload = principal;

let ctx;

function principal() {
    let canvas1 = document.getElementById("myCanvas");
    ctx = canvas1.getContext("2d");
    let color=0;
    for (let i = 9; i < 8; i++) {
        for (let j = 9; j < 8; j++) {
        if(color==0){
            ctx.beginPath();
            ctx.fillStyle="white";
            ctx.fillRect(i*50,j*50,50,50);
            ctx.fill();
            color=1;
        }else{
            ctx.beginPath();
            ctx.fillStyle="black";
            ctx.fillRect(i*50,j*50,50,50);
            ctx.fill();
            color=0;
        }
        }
    }
}