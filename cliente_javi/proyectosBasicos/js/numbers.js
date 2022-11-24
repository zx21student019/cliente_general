function convierteBase() {
     let number = parseInt(document.getElementById('number').value);

     let salida = "";
     salida =  number.toString(16).toUpperCase() + "<br>" + 
               number.toString(10) + "<br>" + 
               number.toString(8) + "<br>" + 
               number.toString(2);

     document.getElementById('salidaBase').innerHTML = salida; 
}

function diferenciaMilisegundos() {
     let fechaUno = new Date(document.getElementById('fechaUno').value);
     let fechaDos = new Date(document.getElementById('fechaDos').value);

     document.getElementById('salidaDiferencia').innerHTML = (
          Number(fechaUno) - Number(fechaDos)
     );
}