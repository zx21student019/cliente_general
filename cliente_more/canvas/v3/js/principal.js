onload=principal

let ancho;
let alto;

let rctngl;
let mcnv;

function principal() {
    ancho = document.getElementById('ancho');
    alto = document.getElementById('alto');
    micanvas = document.getElementById('micanvas');

    rctngl = new Rectangulo(ancho,alto);
    dbjCanvas.dibujaRect(micanvas,rctngl);
}