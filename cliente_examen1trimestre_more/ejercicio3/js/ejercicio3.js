onload=principal

function principal(){

let arrayNumeros= [2,4,8,4,200,16];
var pares = true;

for (num of arrayNumeros){
        if(parseInt(arrayNumeros[num])%2 != 0){
            pares = false;
        }
}
console.log(pares);
}