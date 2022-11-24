onload = principal;

let context;
let selectBoca;
let boca = false;

function principal() {
     dibujarLaberinto();
     dibujarPersona();

     selectBoca = document.getElementById('boca');
     selectBoca.setAttribute('onchange', 'cambiarBoca()');
}

function dibujarLaberinto() {
     let canvasLaberinto = document.getElementById('laberinto');
     context = canvasLaberinto.getContext('2d');

     context.strokeStyle = '#151515';
     context.lineWidth = 10;

     context.beginPath();

     context.moveTo(50, 50);
     context.lineTo(550, 50);
     context.lineTo(550, 250);
     context.moveTo(550, 350);
     context.lineTo(550, 550);
     context.lineTo(50, 550);
     context.lineTo(50, 150);
     context.moveTo(150, 50);
     context.lineTo(150, 150);
     context.moveTo(50, 250);
     context.lineTo(250, 250);
     context.lineTo(250, 150);
     context.lineTo(350, 150);
     context.moveTo(450, 150);
     context.lineTo(450, 250);
     context.moveTo(555, 250);
     context.lineTo(350, 250);
     context.lineTo(350, 350);
     context.lineTo(150, 350);
     context.lineTo(150, 450);
     context.moveTo(250, 450);
     context.lineTo(450, 450);
     context.lineTo(450, 350);
     context.lineTo(555, 350);

     context.stroke();
}

function dibujarPersona() {
     let canvasPersona = document.getElementById('persona');
     context = canvasPersona.getContext('2d');
     context.clearRect(0, 0, canvasPersona.width, canvasPersona.height);
     context.lineWidth = 5;

     context.beginPath();
     context.strokeStyle = '#5887E4';
     context.arc(300, 113, 55, 0, Math.PI * 2, true)
     context.stroke();

     context.rotate(0.5);
     context.beginPath();
     context.strokeStyle = '#F3AC45';
     context.strokeRect(275, 45, 40, 190);
     context.stroke();
     context.rotate(-0.5);

     context.rotate(-0.5);
     context.beginPath();
     context.strokeStyle = '#F3AC45';
     context.strokeRect(210, 335, 40, 190);
     context.stroke();
     context.rotate(0.5);
     
     context.fillStyle = '#753C10';
     context.fillRect(220, 170, 160, 280);

     context.beginPath();
     context.fillStyle = '#D90156';
     context.arc(280, 105, 10, 0, Math.PI * 2, true)
     context.arc(320, 105, 10, 0, Math.PI * 2, true)
     context.fill()

     context.strokeStyle = '#A655F2';
     context.lineWidth = 2;

     context.beginPath();
     context.arc(280, 105, 10, 0, Math.PI * 2, true)
     context.stroke()

     context.beginPath();
     context.arc(320, 105, 10, 0, Math.PI * 2, true)
     context.stroke()
     
     /* Para la boca del muñeco */
     context.beginPath();
     if (!boca) {
          context.arc(300, 123, 30, 0, Math.PI, boca)

     } else {
          context.arc(300, 150, 20, 0, Math.PI, boca)
     }
     context.stroke()

     context.lineWidth = 5;
     context.beginPath();
     context.strokeStyle = '#F3AC45';
     context.strokeRect(220, 450, 40, 145);
     context.strokeRect(340, 450, 40, 145);
     context.stroke();

}

function cambiarBoca() {
     if (selectBoca.value == 'feliz') {
          boca = false;
     } else if (selectBoca.value == 'triste') {
          boca = true;
     }
     dibujarPersona();
}