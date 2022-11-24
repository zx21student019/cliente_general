onload = principal;

function principal() {
     document.getElementById('pedirDatos').setAttribute('onclick', 'llamadaServidor()');
}

function llamadaServidor() {
     let parrafo = document.getElementById('salida');
     let numero = document.getElementById('entrada').value;
     let jsonhttp = new XMLHttpRequest();

     // Tratar la respuesta del servidor
     jsonhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
               let numero = JSON.parse(this.responseText)
               lista = '<ul>'
               for (let n of numero) {
                    lista += '<li>'+n+'</li>';
               }
               lista += '</ul>';
               parrafo.innerHTML = lista;
          }
     }

     // Hacer la peticion al servidor
     jsonhttp.open('GET', 'ejecutar.py?num=' + numero, true);
     jsonhttp.send();

}