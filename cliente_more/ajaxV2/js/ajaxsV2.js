onload=principal;

function principal() {
    document.getElementById('pedirDatos').setAttribute("onclack","llamadaServidor");
}

function llamadaServidor() {
    let parrafo = document.getElementById("salida");

    let jsonhttp = new XMLHttpRequest();

    jsonhttp.onreadystatechange = function(){
        if (this.readyState ==4 && this.status ==200){
            let n = JSON.parse(this.responseText);
            parrafo.innerHTML=n;
        }
    }

    jsonhttp.open("GET", "dimeN.py", true);
    jsonhttp.send();
}