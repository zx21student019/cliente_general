onload = principal;

function principal() {
     let num = prompt('Elige un número del 1 al 10')

     while(num < 1 || num > 10) {
          num = prompt('Ese número no es válido :( Elige otro')
     }
     
     num = parseInt(num)
     
     console.log(`Tabla del ${num}`);
     
     let tablaMultiplicar = document.createElement('p');

     for (let i = 1; i < 11; i++) {
          tablaMultiplicar.innerHTML += (`${num} x ${i} = ${num*i}<br>`);
     }
     
     document.querySelector('body').appendChild(tablaMultiplicar);
}