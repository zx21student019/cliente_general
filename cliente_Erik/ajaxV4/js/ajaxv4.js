onload=principal;

function principal(){
	document.getElementById('pedirObjeto').setAttribute("onclick","llamadaServidor()");
}

function llamadaServidor(){
	
	//**********************************************
	// configuracion y objetos

	//parrafo para la salida de datos
    let parrafo = document.getElementById("salida");

    //recoger el dato del input
    let identificador = document.getElementById("entrada").value;

    //crear el objeto XMLHttpRequest para acceder al servidor
    let jsonhttp = new XMLHttpRequest();


	//**********************************************
	// codigo para tratar la respuesta
    jsonhttp.onreadystatechange = function(){
    	//evaluar la respuesta del servidor
      	if (this.readyState == 4 && this.status == 200) {
      		let persona = JSON.parse(this.responseText);
      		if(persona!=-1){
				datos="nombre:"+persona.nombre+"<br>";
				datos+="apellidos:"+persona.apellidos+"<br>";
				datos+="edad:"+persona.edad+"<br>";
	      		parrafo.innerHTML=datos;
	      	}else {
	      		parrafo.innerHTML="error";
	      	}
      	}
    }


	//**********************************************
	// codigo para hacer la peticion al servidor
    //construir la petición al servidor
	jsonhttp.open("POST", "dimeP.py", true);
	//datos en POST
	jsonhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	jsonhttp.send("ident="+identificador);
}