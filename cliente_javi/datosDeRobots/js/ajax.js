onload = principal;

function principal() {
     document.getElementById('pedirObjeto').setAttribute("onclick", "llamadaServidor()");
}

function llamadaServidor() {

     let avatar = document.getElementById('avatar')
     let parrafo = document.getElementById("salida");
     let jsonhttp = new XMLHttpRequest();

     jsonhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
               let datos = JSON.parse(this.responseText);

               avatar.setAttribute('src', datos.avatar);

               datos = '<h3 class="titulo-texto">Identificación: <p class="contenido">'+datos.first_name + ' ' + datos.last_name +'</p></h3>' +
               '<h3 class="titulo-texto">Nacimiento: <p class="contenido">' + datos.date_of_birth + '</p></h3>' +
               '<h3 class="titulo-texto">Ciudad: <p class="contenido">' + datos.address.city + '</p></h3>';
               parrafo.innerHTML = datos;
          }
     }

     jsonhttp.open('GET', 'https://random-data-api.com/api/v2/users', true);
     jsonhttp.send();
}