onload = principal;

function principal() {
     document.getElementById('pedirDatos').setAttribute('onclick', 'llamadaServidor()');
}

function llamadaServidor() {

     let parrafo = document.getElementById('salida');
     let inicio = document.getElementById('i').value;
     let fin = document.getElementById('f').value;
     let jsonhttp = new XMLHttpRequest();

     if (inicio < 0 || inicio > fin || fin > 10 ) {
          parrafo.innerHTML = 'Error'
     } else {
          jsonhttp.onreadystatechange = function() {
               if (this.readyState == 4 && this.status == 200) {
                    let numero = JSON.parse(this.responseText)
                    lista = '<ul>'
                    for (let n of numero) {
                         lista += '<li>' + n + '</li>';
                    }
                    lista += '</ul>';
                    parrafo.innerHTML = lista;
               }
          }
     }

     // Hacer la peticion al servidor
     jsonhttp.open('GET', 'ejecutar.py?i=' + inicio + '&j=' + fin, true);
     jsonhttp.send();

}