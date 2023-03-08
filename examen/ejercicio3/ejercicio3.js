function convierteFrase(){
    $.post("ejercicio3.py", $('#texto').val,function (data, status) {
            if (status == "success") sacarDatos(JSON.parse(data));
        }
    );
}

function sacarDatos(datos) {
    $("#salida").text(""); // Limpia el contenido del elemento con id 'salida'
    $("#salida").append(datos);
}