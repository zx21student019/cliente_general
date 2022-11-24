onload=principal;

let tiempo = 0;
let salida;
let idTemporizador;
let tempoActivo = false;

function principal() {
    document.getElementById("inicio").setAttribute("onclick","iniciar()");
    document.getElementById("reset").setAttribute("onclick","reset()");
    document.getElementById("parar").setAttribute("onclick","parar()");
    salida = document.getElementById("salida");
}

function iniciar() {
    if(!tempoActivo) {
        tempoActivo=true;
        tiempo = document.getElementById("tiempo").value;
        salida.innerHTML=tiempo;
        idTemporizador = setInterval(actualizarSalida,1000);
    }
}

function actualizarSalida() {
    if (tiempo <= 1) {
        clearInterval(idTemporizador);
        tempoActivo-false;
    }
    tiempo --;
    salida.innerHTML=tiempo;
}

function reset() {
    if(tempoActivo) {
        clearInterval(idTemporizador);
    }
        salida.innerHTML=0;
        tiempo=0;
        tempoActivo=false;
    }

    function parar() {
        if(tempoActivo) {
            clearInterval(idTemporizador);
            tempoActivo=false;
        }else{
           idTemporizador=setInterval(actualizarSalida,1000)
           tempoActivo=true; 
        }
    }
