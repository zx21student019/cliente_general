onload=principal;

function principal() {
    document.getElementById('boton').onclick=cambia;
    document.getElementById('boton 2').onclick=vuelve;
}
function cambia() {

console.log("estoy en cambia");

    parrafos = document.getElementsByTagName('p');

    for (parr of parrafos){
        parr.innerHTML="esto es un pedazo de parrafo mazo de largo en vrd";
    }
}

function vuelve() {

    console.log("estoy en vuelve");

    parrafos = document.getElementsByTagName('p');

    for (parr of parrafos){
        parr.innerHTML="Esto es un parrafo";
    }
}

