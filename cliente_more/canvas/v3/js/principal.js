onload=creaRectangulo

let ancho;
let alto;

let rctngl;
let mcnv;

function creaRectangulo() {
    ancho = document.getElementById('ancho');
    alto = document.getElementById('alto');
    micanvas = document.getElementById('myCanvas');

    rctngl = new Rectangulo(ancho.value,alto.value);
    dbjCanvas.limpiarLienzo(micanvas);
}

function modificaRectangulo() {
    rctngl.ancho = ancho.value;
    rctngl.alto = alto.value;
    dbjCanvas.dibujarRectangulo(micanvas,rctngl);
}