function ejer1() {
    console.log("Ejercicio 1");

    //recuperar el texto input
let texto = document.getElementById("cadena").value;

//recorrer el texto con un for
    //por cada letra meter un <br>
    let salida ="";

    for (var i = 0; i < texto.length; i++) {
        salida += texto[i] + "<br>";
    }

//texto obtenido meter en p con el id ejer1
document.getElementById("pEjer1").innerHTML=salida;
}

//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------

function ejer2() {
    console.log("Ejercicio 2");

    //recuperar el texto input
let texto = document.getElementById("cadena").value;

//recorrer el texto con un for
    //contar la cantidad de letras
    let contLetras=0;
    for (i in texto) {
        if((texto[i]>='a' && texto[i] <= 'z') || (texto[i]>='A' && (texto[i]) <= 'Z') || (texto[i] == 'ñ') || (texto[i] == 'ñ') || (texto[i] == 'Ñ')){
            contLetras++;
        }
    }

    //poner el numero de letras en p con el id ejer2
    document.getElementById("pEjer2").innerHTML=contLetras;
}

//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------

function ejer3() {
    console.log("Ejercicio 3");

    //recuperar el texto input
let texto = document.getElementById("cadena").value;

//recorrer el texto al reves con un for
    //por cada letra meter un <br>
    let salidaAlReves ="";

    for (var i = texto.length-1; i >=0; i--) {
        salidaAlReves += texto[i] + "<br>";
    }

//texto obtenido meter en p con el id ejer3
document.getElementById("pEjer3").innerHTML=salidaAlReves;
}

//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------

function ejer4() {
    console.log("Ejercicio 4");

    //recuperar el texto y la palabra input
let texto = document.getElementById("cadena").value;
let palabra = document.getElementById("palabra").value;


    //buscar palabra

    if(texto.indexOf(palabra) == -1) {
        document.getElementById("pEjer4").innerHTML="no esta";
    }else {
        document.getElementById("pEjer4").innerHTML="si esta";
    }
}

//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------

function ejer5() {
    console.log("Ejercicio 5");

    //recuperar el texto y la palabra input
let texto = document.getElementById("cadena").value;
let letra = document.getElementById("palabra").value;

    let contLetras=0;

    //ver cuantas veces aparece la letra en la palabra
    for (var i = 0; i < texto.length; i++) {
        if(texto[i]==letra){
            contLetras++
        }
    }
    document.getElementById("pEjer5").innerHTML=contLetras;
}

//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------

function ejer6() {
    console.log("Ejercicio 6");

    //recuperar el texto y la palabra input
let texto = document.getElementById("cadena").value;
let letra = document.getElementById("palabra").value;

    let contA=0;
    let contE=0;_
    let contI=0;
    let contO=0;
    let contU=0;

    //ver cuantas veces aparece cada vocal en la frase
    for (var i = 0; i < texto.length; i++) {
        if(texto[i]=="a"){
            contA++
        }else if(texto[i]=="e"){
            contE++
        }else if(texto[i]=="i"){
            contI++
        }else if(texto[i]=="o"){
            contO++
        }else if(texto[i]=="u"){
            contU++
        }
    }

    document.getElementById("pEjer6").innerHTML="numero de: <br> a:"+contA+"<br> e:"+contE+"<br> i:"+contI+"<br> o:"+contO+"<br> u:"+contU;
}

//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------

function ejer7() {
    console.log("Ejercicio 7");

    //recuperar el texto input
let texto = document.getElementById("cadena").value;

//separar las palabras
    let separaciones = texto.split(' ');

    //hacer el bucle
    for (var i = 0; i < separaciones.length; i++) {
        document.getElementById("pEjer7").innerHTML+=separaciones[i] + "<br>";
    }
}

//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------

function ejer8() {
    console.log("Ejercicio 8");

    //recuperar el texto del input
    let texto = document.getElementById("cadena").value;

    //separar las palabras
    var separaciones = texto.split(' ');

    let salida = "";
    for (var f = 0; f < separaciones.length; f++) {
        for (var i = separaciones[f].length - 1; i >= 0; i--) {
            salida += separaciones[f][i];
        }
        salida += " ";
    }

    //texto obtenido meter en <p> con id ejer8
    document.getElementById("pEjer8").innerHTML = salida;
    document.int()

}