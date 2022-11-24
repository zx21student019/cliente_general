onload=principal;

let tiempo = 0;
let salida;
let idTemporizador;
let ejecutandose = false;
let pausado = false;

function principal() {
     document.getElementById('iniciar').setAttribute('onclick', 'iniciar()');
     document.getElementById('pausar').setAttribute('onclick', 'pausar()');
     document.getElementById('continuar').setAttribute('onclick', 'continuar()');
     salida = document.getElementById('salida');
}

function iniciar() {
     tiempo = document.getElementById('tiempo').value;
     salida.innerHTML = tiempo;
     if(!ejecutandose) {      
          idTemporizador = setInterval(actualizarSalida, 1000);
          ejecutandose = true;
     }else{
          clearInterval(idTemporizador)
          idTemporizador = setInterval(actualizarSalida, 1000)
     }
}
function actualizarSalida() {
     tiempo --;
     salida.innerHTML = tiempo;
     if(tiempo <= 0) {
          clearInterval(idTemporizador);
          ejecutandose = false;
          pausado = false;
     }
}

function pausar() {
     tiempoPausa = tiempo;
     clearInterval(idTemporizador);
     ejecutandose = false;
     pausado = true;
}

function continuar() {
     if(pausado && !ejecutandose){
          tiempo = tiempoPausa;
          idTemporizador = setInterval(actualizarSalida, 1000);
          ejecutandose = true;
          pausado = false;
     }
}