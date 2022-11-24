onload = principal

function principal() {
     document.getElementById('enviar').setAttribute('onclick', 'llamadaAjax()');
}

function llamadaAjax() {

     // Configuramos los objetos para la peticion al servidor y capturamos otros datos
     let numero = document.getElementById('numero').value;

     // Creamos el objeto con el que se accedera al servidor
     let xmlhttp = new XMLHttpRequest();

     // Registramos la funcion que se ejecutara con la respuesta del servidor
     xmlhttp.onreadystatechange = function() {
          if(this.readyState == 4 && this.status == 200) {
               document.getElementById('salida').innerHTML = this.responseText;
          }
     }

     // Realizamos la peticion al servidor (peticiones GET, POST y otros verbos HTTP)
     xmlhttp.open('GET', 'numero.py?num='+numero, true);

     xmlhttp.send();

}