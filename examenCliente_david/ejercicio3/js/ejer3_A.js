$(principal)


function principal() {
    $("#marcas").click(function () {
        $.post("ejer3A.py",
            {}
            , respuesta)
    });
}


function respuesta(data, status) {
    datos = data.split(",")

    $("#salida").append("<p>"+datos[0].substring(2, datos[2].length-1)+" - "+datos[1].substring(1, datos[2].length-1)+" - "+datos[2].substring(2, datos[2].length-2)+"</p>");
    $("#salida").append("<p>"+datos[3].substring(2, datos[3].length)+" - "+datos[4].substring(1, datos[4].length)+" - "+datos[5].substring(2, datos[5].length-2)+"</p>");
    $("#salida").append("<p>"+datos[6].substring(2, datos[6].length)+" - "+datos[7].substring(1, datos[7].length)+" - "+datos[8].substring(2, datos[8].length-2)+"</p>");
    $("#salida").append("<p>"+datos[9].substring(2, datos[9].length)+" - "+datos[10].substring(1, datos[10].length)+" - "+datos[8].substring(2, datos[11].length-6)+"</p>");
    
}