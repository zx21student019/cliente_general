onload=principal;

let ctx;
let ctx1;

function principal() {
    let canvas = document.getElementById("myCanvas");

    ctx = canvas.getContext("2d");
    console.log(canvas.width);
    console.log(canvas.height);

    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0,0,150,75); // dos primeros numeros son coordenadas x,y donde empieza el rectangulo
    ctx.fillStyle = "#00FF00";
    ctx.fillRect(10,10,150,75); // los dos ultimos son anchura y altura 

    //Crear un rectangulo desde la esquina superior izquierde y 
    //de ancho y de alto la mitad del tamaño del canvas (que es cuadrado)
    //y otro rectangulo del mismo tamaño pero con rigrn en el centro del canvas
    let canvas1 = document.getElementById("myCanvas1");
    ctx1 = canvas1.getContext("2d");

    ctx1.fillStyle = "#FF0000";
    ctx1.fillRect(0,0,canvas1.width/2,canvas1.height/2);
    ctx1.fillStyle = "#00FF00";
    ctx1.fillRect(150,150,150,150);
}

function dibujaLinea(){
    var canvas2 = document.getElementById("myCanvas2");
    var ctx = canvas2.getContext("2d");

    let x = document.getElementById("coordx").value;
    let y = document.getElementById("coordy").value;
    let ancho = document.getElementById("ancho").value;
    let color = document.getElementById("color").value;

    ctx.beginPath();
    ctx.lineWidth=ancho;
    ctx.strokeStyle=color;
    ctx.moveTo(canvas2.width/2,canvas2.height/2); //empieza en el centro
    ctx.lineTo(x,y); //acaba donde marca los input de entrada
    ctx.stroke(); //ctx.fill() o cts.closePath()  cierra el camino 

    ctx.beginPath();
    ctx.lineWidth=3;
    ctx.fillStyle= "red";
    ctx.moveTo(0,0);
    ctx.lineTo(100,100);
    ctx.lineTo(0,100);
    ctx.fill();
}
function dibujaCirculos(){
    var canvas = document.getElementById("myCanvas3");
    var ctx = canvas.getContext("2d");

    let x = document.getElementById("coordx1").value;
    let y = document.getElementById("coordy1").value;
    let radio = document.getElementById("radio").value;
    let color = document.getElementById("colorCirculo").value;

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.arc(x, y, radio, 0, 2 * Math.PI);
    ctx.stroke();
}