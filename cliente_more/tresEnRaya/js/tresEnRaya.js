onload = principal;
let turno = 0;
let jugada = 0;
let tablero = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function principal() {
    dibujaTablero();
}

function dibujaTablero() {

    let table = document.getElementById("tableroId");
    jugada = 0;
    table.replaceChildren();
    turno = 0;
    jugada = 0;
    tablero = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let index = 0; index < 9; index++) {
        let casilla = document.createElement("div");
        casilla.class - "casilla";

        let imagen = document.createElement("img");
        imagen.setAttribute("src", "imagen/fondo.png");
        imagen.setAttribute("onClick", "pinchado(this, " + index + ")");

        casilla.appendChild(imagen);
        table.appendChild(casilla);
    }
}

function pinchado(imagen, posicion) {
    if (tablero[posicion] == 0) {
        jugada++;
        if (turno == 0) {
            tablero[posicion] = 1;
            imagen.setAttribute("src", "imagen/ojo.png");
            turno = 1;
        } else if (turno == 1) {
            tablero[posicion] = 2;
            imagen.setAttribute("src", "imagen/cora.png");
            turno = 0;
        }
    }
    if (jugada >= 5) {
        finPartida();
    }
}

function finPartida() {
    if (tablero[0] == tablero[1] && tablero[1] == tablero[2] && tablero[2] != 0 ||
        tablero[2] == tablero[5] && tablero[5] == tablero[8] && tablero[8] != 0 ||
        tablero[6] == tablero[7] && tablero[7] == tablero[8] && tablero[8] != 0 ||
        tablero[0] == tablero[3] && tablero[3] == tablero[6] && tablero[6] != 0 ||
        tablero[1] == tablero[4] && tablero[4] == tablero[7] && tablero[7] != 0 ||
        tablero[3] == tablero[4] && tablero[4] == tablero[5] && tablero[5] != 0 ||
        tablero[0] == tablero[4] && tablero[4] == tablero[8] && tablero[8] != 0 ||
        tablero[2] == tablero[4] && tablero[4] == tablero[6] && tablero[6] != 0) {
        if (turno == 0) {
            ganaCora();
        } else {
            ganaOjo();
        }
    }
}

function ganaCora() {
    console.log("gana Cora");
    dibujaTablero();
}

function ganaOjo() {
    console.log("gana Ojo");
    dibujaTablero();
}
