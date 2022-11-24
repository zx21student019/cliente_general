onload=principal

let numeroJugada = 0;
let turno = 0; // 0 es el turno de los circulos
let ganador = '';
let fichas = [2, 2, 2, 2, 2, 2, 2, 2, 2];

function principal() {
    dibujarTablero();
}

function dibujarTablero() {
    let tablero = document.getElementById("tablero");
    tablero.replaceChildren()
    for (let index = 0; index < 9; index++){
        let casilla = document.createElement("div");
        casilla.classList.add("casilla");
        casilla.setAttribute('onclick', 'ponerFicha(this, '+index+')');
        casilla.id = index;
        tablero.appendChild(casilla);
    }
}

function ponerFicha(casilla) {
    let ficha = document.createElement('img');

    if(turno == 0 && casilla.childNodes[0] == null && ganador == '') {
        ficha.setAttribute('src', 'img/circulo.png');
        casilla.replaceChildren(ficha)
        fichas[casilla.id] = 0;
        turno = 1;
        numeroJugada++;
    } else if (turno == 1 && casilla.childNodes[0] == null  && ganador == '') {
        ficha.setAttribute('src', 'img/cruz.png');
        casilla.replaceChildren(ficha)
        fichas[casilla.id] = 1;
        turno = 0;
        numeroJugada++;
    }

    if(numeroJugada >= 5) {
        ganador = evaluarGanador(fichas, turno);

        empate = true;
        for(ficha of fichas) {
            if (ficha == 2) {
                empate = false;
                break;
            }
        }

        if(ganador != '') {
            document.getElementById('titulo').innerHTML = '¡' + ganador + ' ganan!';
        } else if (empate) {
            document.getElementById('titulo').innerHTML = '¡Empate!';
        }
    }
}

function evaluarGanador(fichas, turno) {
    if (tresEnRaya(fichas)) {   
        if(turno == 1) {
            return 'Círculos';
        } else if (turno == 0) {
            return 'Cruces';
        } else {
            return '';
        }
    }
    return '';
}

function tresEnRaya(fichas) {
    return ((fichas[0] == fichas[1] && fichas[1] == fichas[2] && fichas[2] != 2) || (fichas[3] == fichas[4] && fichas[4] == fichas[5] && fichas[5] != 2) || 
    (fichas[6] == fichas[7] && fichas[7] == fichas[8] && fichas[8] != 2) || (fichas[0] == fichas[3] && fichas[3] == fichas[6] && fichas[6] != 2) || 
    (fichas[1] == fichas[4] && fichas[4] == fichas[7] && fichas[7] != 2) || (fichas[2] == fichas[5] && fichas[5] == fichas[8] && fichas[8] != 2) ||
    (fichas[0] == fichas[4] && fichas[4] == fichas[8] && fichas[8] != 2) || (fichas[2] == fichas[4] && fichas[4] == fichas[6] && fichas[6] != 2));
}

function reiniciarPartida() {
    dibujarTablero();
    numeroJugada = 0;
    turno = 0; // 0 es el turno de los circulos
    ganador = '';
    fichas = [2, 2, 2, 2, 2, 2, 2, 2, 2];
    document.getElementById('titulo').innerHTML = 'Tres en Raya';
}