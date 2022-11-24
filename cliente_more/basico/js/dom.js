function crearParrafo() {
    let divParrafos = document.getElementById('parrafos');

    let parr = document.createElement("p");
    let nTexto = document.createTextNode("hola");

    parr.appendChild(nTexto);

    divParrafos .appendChild(parr);
}

function crearEnlace() {
    let divEnlaces= document.getElementById('enlaces');

    let enlace = document.createElement("a");
    enlace.setAttribute("href","http://www.google.es");

    let nTexto = document.createTextNode("ir a google");
    enlace.appendChild(nTexto);

    divEnlaces.appendChild(enlace);

    let sl = document.createElement("br");
    divEnlaces.appendChild(sl);
}