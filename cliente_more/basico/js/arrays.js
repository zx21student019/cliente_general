onload=iniciar;

let datoUsuario;
let numero;
let salida;

function iniciar() {
    datoUsuario = document.getElementById("valores");
    salida = document.getElementById("salida");
    numero = document.getElementById("numero");
}

function arraysBasico() {

    //recuperar objetos del DOM (elementos o nodos)
    let listaNum = datoUsuario.value.split(" ");

    salida.innerHTML = listaNum;
}

function suma2(value) {
    texto += (parseInt(value) + 2) + "<br>";
}

function arrayToString() {
    salida.innerHTML = datoUsuario.value.split(" ").toString();
}

function arrayJoin() {
    salida.innerHTML = datoUsuario.value.split(" ").join(numero.value);
}

function arrayPop() {
    let lista = datoUsuario.value.split(" ");
    lista.pop();
    salida.innerHTML = lista.join("-")
}

function arrayPush() {
    let lista = datoUsuario.value.split(" ");
    lista.push(numero.value);
    salida.innerHTML = lista.join("-")

}

function ordenarNormal() {
    let lista = datoUsuario.value.split(" ");
    lista.sort();
    salida.innerHTML = lista.join("-")
}

function ordenarNormalReverse() {
    let lista = datoUsuario.value.split(" ");
    lista.sort().reverse();
    salida.innerHTML = lista.join("-")
}

function ordenarNumericamente() {
    let lista = datoUsuario.value.split(" ");
    lista.sort((a,b) => {return a - b});
    salida.innerHTML = lista.join("-")
}

function arrayForEach() {
    let lista = datoUsuario.value.split(" ");
    lista.forEach(pasaAEntero);
}

function pasaAEntero(value, index, array) {
    salida.innerHTML += value + "-" + index + ":";
    if(value>=100) {
        array[index] = parseInt(value);
    }

function arrayMap

}
