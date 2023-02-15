let openRequest = indexedDB.open("registroEntrada", 1);
let db;

openRequest.onsuccess = function () {
    console.log("base de datos abierta con exito");

	db = openRequest.result;

	rellenarTabla();

};

openRequest.onerror = function () {
    console.log("base de datos abierta con ERROR");
};

openRequest.onupgradeneeded = function () {
    
	console.log("lanzado el evento on upgrade needed");

	//objeto para manejar las operaciones con la base de datos
	let db = openRequest.result;

	db.createObjectStore("registroEntradas", {keyPath: 'dni'});
	db.createObjectStore("registroSalidas", {keyPath: 'dni'});

};

function registrar(){
    let trns = db.transaction("registroEntradas","readwrite");

	let almacenValores = trns.objectStore("registroEntradas");
    let fecha = new Date().toLocaleTimeString('es-ES', { hour: 'numeric', minute: 'numeric'});

	let datos = {
		dni : $("#dniInput").val(),
		nombre: $("#nombreInput").val(),
		apellidos : $("#apellidosInput").val(),
        contacto: $("#contactoInput").val(),
        fechaEntrada: fecha
	}

	let resultado = almacenValores.add(datos);

	resultado.onsuccess = function(){
		console.log("insertado con exito");
		rellenarTabla();
	}

	resultado.onerror = function(){
		console.log("error al insertar");
	}
	limpiarFormulario();
}

function limpiarFormulario(){
	let dniInput = $("#dniInput")
	let nombreInput = $("#nombreInput")
	let apellidosInput = $("#apellidosInput")
    let contactoInput= $("#contactoInput")

	dniInput.val('');
	nombreInput.val('');
	apellidosInput.val('');
	contactoInput.val('');
}

function rellenarTabla() {
	let trns = db.transaction("registroEntradas","readonly");

	let almacenValores = trns.objectStore("registroEntradas");

	let resultado = almacenValores.getAll()
	resultado.onsuccess = function(){
		let cursor = resultado.result;
		for (let i = 0; i < cursor.length; i++) {
			console.log(cursor[i])
			$("#tabla").append("<tr> <td> "+ cursor[i].nombre+"</td><td> "+ cursor[i].apellidos+"</td><td> "+ cursor[i].dni+"</td><td> "+ cursor[i].contacto+"</td><td> "+ cursor[i].fechaEntrada+"</td> </tr>");
		}
	}
}


// let request = almacenValores.openCursor();
// 	request.onsuccess = function(){
// 		let cursor = request.result;
// 		if(cursor){
// 			let clave = cursor.key; //recuperar la clave
// 			let valor = cursor.value; //recuperar el valor
// 			salida = "";
// 			for(v in valor){
// 				salida += valor[v]+":";
// 			}
// 			console.log(salida);
// 			cursor.continue();
// 		}else{
// 			console.log("Estoy vacio")
// 		}
// 	}