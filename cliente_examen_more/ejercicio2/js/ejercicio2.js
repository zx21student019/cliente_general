function validaTexto(){

    let tex = document.getElementById("texto").value;
    let cadena= tex.substring(inicio,fin);
    
	if(8> parseInt(tex.lenght) <10 ){
        alert("error");
        return false;
    }else if(cadena[0] !="1" || cadena[1] !="2" || cadena[2] !="3"){
        alert("error");
        return false;
    }else{
        alert("enviado");
        return true;
    }
}