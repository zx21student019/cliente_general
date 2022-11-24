// A traves del DOM podemos acceder a muchas propiedades del documento
/*
document.URL
document.domain
document.doctype
document.readyState --> Con este valor sabemos cuando ha cargado la página
*/

// onload = crearTabla;

// function crearTabla() { // Vamos a crear una tabla manejando el DOM
//      let cuerpo = document.body;

//      // Primero lo haremos escribiendo el codigo a mano (no recomendable)
//      let tabla = "<table><tr><td>Hola</td></tr><tr><td>Adiós</td></tr></table>"

//      /* 
//      No funciona esto porque el elemento que le pasamos tiene que ser un nodo
//      cuerpo.appendChild(tabla);
//      */

//      cuerpo.innerHTML = (tabla);

//      // Para crear un elemento (objeto) y añadirlo al documento
//      let parrafo = document.createElement('p');
//      // El objeto está creado pero no dentro del documento

//      parrafo.innerHTML = 'Esto es un texto de prueba';

//      cuerpo.appendChild(parrafo);

//      // Se puede cambiar cualquier elemento y propiedad del HTML manejando el DOM
// }

function crearParrafo() {
     let elementos = document.getElementById('elementos');
     let parrafo = document.createElement('p');
     parrafo.innerHTML = 'Pop!'
     elementos.appendChild(parrafo);
}

function crearEnlace() {
     let elementos = document.getElementById('elementos');
     let enlace = document.createElement('a');
     enlace.setAttribute('href', 'https://www.google.es/');

     let nTexto = document.createTextNode('Ir a Google');
     enlace.appendChild(nTexto);

     enlace.innerHTML = 'Google';
     elementos.appendChild(enlace);
}