$(document).ready(function () {
     $('#marcas').click(function () {
          $.post(
               'ejer3A.py',
               {},
               function (data, status) {
                    if (status == 'success') sacarDatos(JSON.parse(data));
               }
          );
     });
});

function sacarDatos(datos) {
     $('#salida').text('');
     for (let dato of datos) $('#salida').append(dato[0]+' - '+dato[1]+' - '+dato[2]+'<br>');
}