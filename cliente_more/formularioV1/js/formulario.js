function campoNoVacio(){
   // let resultado = document.getElementById("nombre").ariaValueMax.length==0?false:true;
   // return resultado;

   let nom = getElementById("nombre").value;
   let edad = getElementById("edad").value;

   longNomb = nom.length;
   if(longNomb == 0) {
    return false;
   }
   
   let patron=/\b[0-9]+\b/;
   if
}