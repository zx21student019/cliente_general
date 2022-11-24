onload=principal;

function principal() {
    document.getElementById('pedirDatos').setAttribute("onclick","llamadaServidor()");
}

function llamadaServidor() {

    let parrafo = document.getElementById("salida");

    let numero = document.getElementById("entrada").value;

    let jsonhttp = new XMLHttpRequest();

    jsonhttp.onreadystatechange = function(){
        if (this.readyState ==4 && this.status ==200){
            let listaN = JSON.parse(this.responseText);
            let lista = "<ul>";
            for (n of listaN) {
                lista += "<li>"+n+"</li>";
                console.log(n);
            }
            lista +="</ul>";
            parrafo.innerHTML=lista;
        }
    }

    jsonhttp.open("GET", "dimeN.py?num="+numero, true);
    jsonhttp.send();
}