onload = principal;

function principal() {
    document.getElementById('boton').onclick=cambia;
}

let num = prompt('Elige un número del 1 al 10')

while(num < 1 || num > 10) {
     num = prompt('Ese número no es válido :( Elige otro')
}

num = parseInt(num)

console.log(`Tabla del ${num}`);

for (let i = 1; i < 11; i++) {
     console.log(`${num} x ${i} = ${num*i}`);
}

function cambia() {
    document.getElementById('boton').innerHTML="Abre la consola :)";
}