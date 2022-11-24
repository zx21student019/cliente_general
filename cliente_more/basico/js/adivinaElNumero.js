//onload=principal;

function principal(){
    let num = Math.floor(Math.random()*100);
    num++;
    let seguir =1;
    let respuesta =0;

    console.log(num);

    
    while(( seguir ==1)&& ((respuesta!=null) || (respuesta!=0))){

        respuesta = prompt("escribe un numero del 1 al 100");
        
        while(num != respuesta){
            if((respuesta==null) || (respuesta==0)){
                seguir=0;
                break;
            } else if(respuesta<num){
                respuesta = prompt("te quedaste corto");
            } else if(respuesta>num){

                respuesta = prompt("te pasaste");
            }
        }
        if((respuesta!=null) || (respuesta!=0)){
            
            alert("Enhorabuena, ganaste");
            seguir = prompt("si quieres jugar de nuevo introduce el numero 1, en caso contrario introduce 0");
            num = Math.floor(Math.random()*100);
            num++;
            console.log(num);
        }
    }
    alert("juego terminado");
}