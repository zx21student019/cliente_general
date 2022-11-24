onload = principal;

function principal() {
    document.getElementById('boton').onclick=cambia;
}

function cambia() {
    document.getElementById('parrafo').innerHTML="Ha cambiado el texto del párrafo";
}

// Declaración de variables en JS
const variableUno = 0; // Variable la cual no se puede cambiar su valor
var variableDos = 1 // Puede cambiar su valor pero esta en desuso
let variableTres = 2 // Puede cambiar su valor y es la que se usa