function convierte() {
    let n = parseInt(document.getElementById('number').value);

    let salida = "";

    salida =
    n.toString(16)+"<br>"+
    n.toString()+"<br>"+
    n.toString(8)+"<br>"+
    n.toString(2);

    document.getElementById('salida').innerHTML = salida;
}
function calcular miliseg() {
    let hoy = Number(new Date("2022-10-3"))
}