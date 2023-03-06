onload=principal

function principal(){
    document.getElementById("texto1").setAttribute("onchange","llamadaTexto1()")
    document.getElementById("texto2").setAttribute("onchange","llamadaTexto2()")
}

function llamadaTexto1(){
    let tex1 = document.getElementById("texto1").value;
    alert(tex1);
}

function llamadaTexto2(){
    let tex2 = document.getElementById("texto2").value;
    alert(tex2);
}