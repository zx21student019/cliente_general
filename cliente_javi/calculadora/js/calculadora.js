onload = principal;
function principal() {
    dibujaCalculadora();
}
function dibujaCalculadora() {
    let listaBotones;
    let simboloBotones = ["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", ",", "0", "=", "/"];
    let calculadora = document.getElementById("calculadoraId");
    listaBotones = document.getElementById("calculadoraId").childNodes;
    for (let index = 1; index < 17; index++) {
        let texto = document.createElement("p");
        texto.setAttribute("class", "boton")
        texto.setAttribute("onclick", "pulsado('" + simboloBotones[index - 1] + "')");
        calculadora.appendChild(texto);
        listaBotones[index].innerHTML = simboloBotones[index - 1];
    }
}

class Calcula {

    constructor() {
        this.operando1 = 0;
        this.operando1Decimales = false;
        this.operando2 = 0;
        this.operando2Decimales = false;
        this.operacion = 0;  // 1 --> Suma, 2 --> Resta, 3 --> Multiplicación, 4 --> Division
    }

    completaOperando1(num) {
        this.operando1 = (this.operando1 * 10) + num;
    }
    completaOperando1Decimal(num) {
        if (this.operando1.toString().includes('.')) {
            this.operando1 = parseFloat(this.operando1.toString() + num.toString());
        } else {
            this.operando1 = this.operando1 + (num * 0.1)
        }
    }
    completaOperando2(num) {
        this.operando2 = (this.operando2 * 10) + num;
    }
    completaOperando2Decimal(num) {
        if (this.operando2.toString().includes('.')) {
            this.operando2 = parseFloat(this.operando2.toString() + num.toString());
        } else {
            this.operando2 = this.operando2 + (num * 0.1)
        }
    }

    operar() {
        switch (operacion) {
            case 1:
                return this.suma();
            case 2:
                return this.resta();
            case 3:
                return this.multiplicacion();
            case 4:
                return this.division();
            default:
                return -1;
        }
    }

    suma() {
        return this.operando1 + this.operando2;
    }
    resta() {
        return this.operando1 - this.operando2;
    }
    multiplicacion() {
        return this.operando1 * this.operando2;
    }
    division() {
        if (this.operando2 == 0) 
            if (this.operando1 == 0){
                return 'Indefinido'
            }else {
                return 'Infinito'
            }
        return this.operando1 / this.operando2;
    }

}

let calcular = new Calcula();
let estado = 0;

function pulsado(boton) {
    switch (estado) {
        case 0:
            if (parseInt(boton) <= 9 && parseInt(boton) >= 0) {
                if (!calcular.operando1Decimales) {
                    calcular.completaOperando1(parseInt(boton));
                } else {
                    calcular.completaOperando1Decimal(parseInt(boton));
                }
                document.getElementById('num').innerHTML = calcular.operando1;
            } else if (boton == ',') {
                calcular.operando1Decimales = true;
                if(calcular.operando1Decimales == false) document.getElementById('num').innerHTML = calcular.operando1 + '.';
            } else if (boton != '=') {
                calcular.operacion = boton;
                document.getElementById('num').innerHTML = calcular.operando1 + ' ' + boton + ' ';
                estado = 1;
            }
            break;
        case 1:
            if (parseInt(boton) <= 9 && parseInt(boton) >= 0) {
                if (!calcular.operando2Decimales) {
                    calcular.completaOperando2(parseInt(boton));
                } else {
                    calcular.completaOperando2Decimal(parseInt(boton));
                }
                document.getElementById('num').innerHTML = calcular.operando1 + ' ' + calcular.operacion + ' ' + calcular.operando2;
            } else if (boton == ',' ) {
                calcular.operando2Decimales = true;
                if(calcular.operando2Decimales == false)document.getElementById('num').innerHTML += '.';
            } else if (boton == '=') {
                switch (calcular.operacion) {
                    case '+':
                        document.getElementById('num').innerHTML = calcular.suma();
                        break;
                    case '-':
                        document.getElementById('num').innerHTML = calcular.resta();
                        break;
                    case '*':
                        document.getElementById('num').innerHTML = calcular.multiplicacion();
                        break;
                    case '/':
                        document.getElementById('num').innerHTML = calcular.division();
                        break;
                }
                calcular = new Calcula();
                estado = 0;
            }
            break;
    }
}