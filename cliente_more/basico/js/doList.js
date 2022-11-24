function anadirLista() {
    let valor = document.getElementById("texto").value;

    let tabla = document.getElementById('tabla')

    let fila = document.createElement("tr");
    tabla.appendChild(fila);

    let colum = document.createElement("td");
    fila.appendChild(colum);

    let colum2 = document.createElement("td");
    fila.appendChild(colum2);

    let parrafo = document.createElement("p");
    colum.appendChild(parrafo);

    let boton = document.createElement("button");
    boton.innerHTML ="Borrar";
    colum2.appendChild(boton);

    parrafo.innerHTML = valor;
}