onload = iniciar;

//texto.- Esta variable tiene ámbito global
let texto = "";
let datoUsuario;
let numero;
let salida;

function iniciar() {
     datoUsuario = document.getElementById('valores');
     salida = document.getElementById('salida');
     numero = document.getElementById('numero');
}

function vaciarParrafo() {
     salida.innerHTML = "";
}

function arraysBasico() {
     // Los arrays pueden contener varios tipos de datos distintos:
     arrayEjemplo = [true, 10, 'Hola', "adios"]

     // Recorrer un array con un bucle for Each (solo recorre las posiciones que existen y no están vacías)
     texto += 'Bucle for each:<br>';
     datoUsuario.value.split(' ').forEach((value) => {
          texto += (parseInt(value) + 2) + '<br>';
     });
     // Recorrer un array con un bucle for Of (recorre el array entero)
     texto += 'Bucle for of:<br>';
     for (numero of datoUsuario.value.split(' ')) {
          texto += numero + '<br>';
     }

     // El bucle for of recorre por índices, y el for each por elementos

     salida.innerHTML = texto;

     // Se le pueden añadir elementos al array en cualquier posicion
     arrayEjemplo[10] = 120;
     for(elemento of arrayEjemplo){
          // El tipo de dato que se crea en las posiciones vacías es undefined
          console.log(elemento);
     }

     // El método push() añade el elemento al final del array, creando una nueva posición:
     arrayEjemplo.push('Manzana');
     arrayEjemplo.forEach( (value) => {
          console.log(value);
     });
}

function suma(value) {
     texto += (parseInt(value) + 2) + '<br>';
}

function arrayToString() {
     salida.innerHTML = datoUsuario.value.split(' ').toString();
}

function arrayJoin() {
     salida.innerHTML = datoUsuario.value.split(' ').join(numero.value);
}

function arrayPop() {
     // El método pop siempre quita el último elemento
     lista = datoUsuario.value.split(' ');
     lista.pop();
     salida.innerHTML = lista;
}

function arrayPush(){
     lista = datoUsuario.value.split(' ');
     lista.push(numero.value)
     salida.innerHTML = lista;
}

function arraySort() {
     lista = datoUsuario.value.split(' ');
     lista.sort();
     salida.innerHTML = lista.join(" -> ");
}

function arraySortReves() {
     lista = datoUsuario.value.split(' ');
     lista.sort().reverse();
     salida.innerHTML = lista.join(" -> ");
}

function arraySortNumerico() {
     lista = datoUsuario.value.split(' ');
     lista.sort((a, b) => {
          return a - b
     });
     salida.innerHTML = lista.join(" -> ");
}

function arraySortNumerico() {
     lista = datoUsuario.value.split(' ');
     /* lista.sort((a, b) => {
          return a - b
     }).reverse(); */
     lista.sort((a, b) => {
          return b - a
     });
     salida.innerHTML = lista.join(" -> ");
}

function arrayForEach() {
     let lista = datoUsuario.value.split(' ');
     console.log(lista);
     lista.forEach(pasaAEntero);
}

function pasaAEntero(value, index, array) {
     salida.innerHTML += value + " - " + index + ": ";
     return parseInt(value);
}

function creaUnArrayNuevoMap() {
     const lista = datoUsuario.value.split(' ');
     const listaNueva = lista.map(pasaAEntero);
     console.log(lista);
     console.log(listaNueva);
}