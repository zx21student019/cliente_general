onload = principal;

function principal() {
     document.getElementById('siguiente').setAttribute("onclick", "cambiarRobot()");
}

function cambiarRobot() {

     let imagen = document.getElementById('imagen')
     let salidaIdentificacion = document.getElementById("salidaIdentificacion");
     let salidaNacimiento = document.getElementById("salidaNacimiento");
     let salidaCiudad = document.getElementById("salidaCiudad");
     let jsonhttp = new XMLHttpRequest();

     jsonhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
               let lista = JSON.parse(this.responseText);

               imagen.setAttribute('src', lista.avatar);

               let id = lista.first_name + ' ' + lista.last_name;
               let Nacimiento = lista.date_of_birth;
               let ciudad = lista.address.city;

               salidaIdentificacion.innerHTML = id;
               salidaNacimiento.innerHTML = Nacimiento;
               salidaCiudad.innerHTML = ciudad;
               
          }
     }

     jsonhttp.open('GET', 'https://random-data-api.com/api/v2/users', true);
     jsonhttp.send();
}