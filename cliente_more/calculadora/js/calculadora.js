onload=principal;

let listaBotones;
let simboloBotones = ["7","8","9","+","4","5","6","-","1","2","3","*",",","0","=","/"];

function principal() {
    dibujaCalculadora();
}

function dibujaCalculadora() {
   
    let calculadora = document.getElementById("calculadoraId");
   
    listaBotones = document.getElementById("calculadoraId").childNodes;
    for (let index = 1; index < 17; index++) {
        let texto = document.createElement("p");
        texto.setAttribute("class","boton")
        texto.setAttribute("onclick","pulsado("+index+")");
        calculadora.appendChild(texto);
        listaBotones[index].innerHTML=simboloBotones[index-1];
    }
}

function pulsado(n) {
    console.log(n);
}

class Calcula {
    constructor(){
        this.operando1 = 0;
        this.operando2 = 0;
        this.operando3 = 0; 
    }

    igual() {
        switch(this.operation) {
            case 1:
                return suma();
            case 1:
                return resta();
            case 1:
                return multiplicacion();
            case 1:
                return division();
            default:
                return -1;
        }
    }

    suma() {
        return operando1 +this.operando2;
    }
    resta() {
        return operando1 -this.operando2;
    }
    multiplicacion() {
        return operando1 *this.operando2;
    }
    division() {
        return operando1 /this.operando2;
    }
}