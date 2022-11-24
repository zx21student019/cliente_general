let contadorBotones = 0;

function meteEnLista() {
     let tabla = document.getElementById('tablaToDo');

     let fila = document.createElement('tr');
     fila.setAttribute('id', contadorBotones);

     let columnaDescripcion = document.createElement('td');
     let columnaBoton = document.createElement('td');

     let elementoDescripcion = document.createElement('p');
     let elementoBoton = document.createElement('button');

     elementoDescripcion.innerHTML = document.getElementById('nuevo').value;

     elementoBoton.innerHTML = 'Borrar';
     elementoBoton.setAttribute('onclick', `borrarElemento(${contadorBotones})`);
     contadorBotones++;

     columnaDescripcion.appendChild(elementoDescripcion);
     columnaBoton.appendChild(elementoBoton);

     fila.appendChild(columnaDescripcion)
     fila.appendChild(columnaBoton);

     tabla.append(fila)
}

function borrarElemento(id) {
     let filaBorrar = document.getElementById(id);
     filaBorrar.remove();
}