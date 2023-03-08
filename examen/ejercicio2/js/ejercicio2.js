let turno = 0;

function cambiaColoresFilas() {
    if(turno==0){
        $('.impar').css('background-color','lightgray');
        $('.par').css('background-color','white');
        turno =turno+1;
        }else{
        $('.impar').css('background-color','white');
        $('.par').css('background-color','lightgray');
        turno =turno-1;
        }
}