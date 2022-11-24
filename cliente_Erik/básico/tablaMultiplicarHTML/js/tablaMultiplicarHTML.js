onload = principal;

function principal() {

    let num = prompt("Elige una tabla de multiplicar: ");

    let n = parseInt(num);

    let text = "";

    for (let i = 1; i < 11; i++) {
        text += i + " * "+ n+" = " + i * n + "<br>";
    }
    console.log(text)

    document.getElementById("oper").innerHTML = text;
}