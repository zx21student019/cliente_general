onload = principal

function principal() {
var n1= prompt("Introduce el primer numero");
var n2= prompt("Introduce el segundo numero");
var n3= prompt("Introduce el tercer numero");
var n4= prompt("Introduce el cuarto numero");

if (parseInt(n1) == NaN || parseInt(n2) == NaN || parseInt(n3) == NaN || parseInt(n4) == NaN){
    alert("Error");
}else{
    let media= parseInt(n1)+parseInt(n2)+parseInt(n3)+parseInt(n4);
    media= media/4;
    alert("La media es "+media);
    }
}