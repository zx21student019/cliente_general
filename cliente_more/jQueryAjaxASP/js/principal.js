$("#btn").click(principal);
$("#btn2").click(anadeParrafo);
$("#btn3").click(meterParrafoEnDiv);
$("#btn4").click(llamadaPython);

function principal(){
    alert("botonazo");
}


//----------------------------------------------------------------------------------------


function anadeParrafo(){
    $.post("parrafo.html",{},respuesta)
}

function respuesta(data,status){
    console.log(data)
    console.log(status)
}


//----------------------------------------------------------------------------------------


function meterParrafoEnDiv(){
    $.post("parrafo.html",{},respuesta2)
}
function respuesta2(data,status){
    $("#salida").append(data);
}


//----------------------------------------------------------------------------------------


function llamadaPython (){
    $.post("prueba.py",
    {
        numero:5,
    }
    ,respuesta3)
}

function respuesta3(data,status){
    $("#salida").append(data);
}