function getCadena() {
     const input = document.getElementById('cadena');
     globalThis.texto = input.value;
}

function ejer1() {
    getCadena();

    let parrafo = document.getElementById('pEjer1');

     parrafo.innerHTML = "";
     for (let i in texto) {
          parrafo.innerHTML += texto[i] + '<br>';
     }
     
}

function ejer2() {
     getCadena();

     let parrafo = document.getElementById('pEjer2');

     let contador = 0;
     for (i in texto) {
          if ((texto[i] >= 'a' && texto[i] <= 'z') || (texto[i] >= 'A' && texto[i] <= 'Z') || texto[i] == 'ñ' || texto[i] == 'Ñ') {
               contador++;
          }
     }
     
     parrafo.innerHTML = contador
}

function ejer3() {
     getCadena();

     let parrafo = document.getElementById('pEjer3');

     let textoReverso = "";
     for (let i = 0; i < texto.length; i++) {
          textoReverso += (texto[texto.length - i - 1])
     }

     parrafo.innerHTML = textoReverso;
}

function ejer4() {
     getCadena();

     let parrafo = document.getElementById('pEjer4');
     let buscar = document.getElementById('buscar').value

     if(texto.includes(buscar)) {
          parrafo.innerHTML = 'La palabra está en la frase';
     } else {
          parrafo.innerHTML = 'La palabra no está en la frase';
     }
}

function ejer5() {
     getCadena();

     let parrafo = document.getElementById('pEjer5');
     let buscar = document.getElementById('buscar').value

     let contador = 0;
     for (i in texto) {
          if (texto[i].toUpperCase() == buscar.toUpperCase()) contador++;
     }

     parrafo.innerHTML = contador;
}

function ejer6() {
     getCadena();

     let parrafo = document.getElementById('pEjer6');

     let contadores = [
                    {letra: 'A', numero: 0}, 
                    {letra: 'E', numero: 0}, 
                    {letra: 'I', numero: 0}, 
                    {letra: 'O', numero: 0},
                    {letra: 'U', numero: 0}
     ]

     for (i in texto) {
          switch (texto[i].toUpperCase()) {
               case 'A':
                    contadores[0].numero++;
               break;
               case 'E':
                    contadores[1].numero++;
               break;
               case 'I':
                    contadores[2].numero++;
               break;
               case 'O':
                    contadores[3].numero++;
               break;
               case 'U':
                    contadores[4].numero++;
               break;
          }
     }

     parrafo.innerHTML = "";
     for ( i in contadores ) {
          parrafo.innerHTML += contadores[i].letra + ": " + contadores[i].numero + "<br>"
     }
}

function ejer7() {
     getCadena();

     let parrafo = document.getElementById('pEjer7');

     for (i in texto) {
          if(texto[i] == ' ') {
               parrafo.innerHTML += '<br>';
          } else {
               parrafo.innerHTML += texto[i];
          }
     }

}

function ejer8() {
     getCadena();

     let parrafo = document.getElementById('pEjer8');
     let palabras = texto.split(' ');

     let textoReverso = "";
     for (let i in palabras) {
          for(let j = palabras[i].length - 1; j >= 0; j--) {
               textoReverso += (palabras[i])[j];
          }
          textoReverso += ' ';
     }

     parrafo.innerHTML = textoReverso;
}