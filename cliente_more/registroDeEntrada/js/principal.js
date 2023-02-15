let openRequest = indexedDB.open("registroEntrada", 1);
let db;

openRequest.onsuccess = function () {
	console.log("base de datos abierta con exito");

	db = openRequest.result;

	rellenarTabla();
	rellenarTabla2()

};

openRequest.onerror = function () {
	console.log("base de datos abierta con ERROR");
};

openRequest.onupgradeneeded = function () {

	console.log("lanzado el evento on upgrade needed");

	//objeto para manejar las operaciones con la base de datos
	let db = openRequest.result;

	db.createObjectStore("registroEntradas", { keyPath: 'dni' });
	db.createObjectStore("registroSalidas", { keyPath: 'dni' });

};

function registrar() {
	let trns = db.transaction("registroEntradas", "readwrite");

	let almacenValores = trns.objectStore("registroEntradas");
	let fecha = new Date().toLocaleTimeString('es-ES', { hour: 'numeric', minute: 'numeric' });

	let datos = {
		dni: $("#dniInput").val(),
		nombre: $("#nombreInput").val(),
		apellidos: $("#apellidosInput").val(),
		contacto: $("#contactoInput").val(),
		fechaEntrada: fecha
	}

	let resultado = almacenValores.add(datos);

	$("#tabla").append("<tr> <td> " + datos.nombre + "</td><td> " + datos.apellidos + "</td><td> " + datos.dni + "</td><td> " + datos.contacto + "</td><td> " + datos.fechaEntrada + "</td> <td> <button type='button' class='btn btn-primary' id='boton' onclick=salida('" + datos.dni + "')>Salida</btn> </td> </tr>");

	resultado.onsuccess = function () {
		console.log("insertado con exito");
	}

	resultado.onerror = function () {
		console.log("error al insertar");
	}
	limpiarFormulario();
}

function limpiarFormulario() {
	let dniInput = $("#dniInput")
	let nombreInput = $("#nombreInput")
	let apellidosInput = $("#apellidosInput")
	let contactoInput = $("#contactoInput")

	dniInput.val('');
	nombreInput.val('');
	apellidosInput.val('');
	contactoInput.val('');
}

function rellenarTabla() {

	$("#tabla").empty();
	$("#tabla").append("<thead>< tr ><th>NOMBRE</th><th>APELLIDOS</th><th>DNI</th><th>CONTACTO</th><th>FECHA ENTRADA</th><th>SALIDA</th></tr ></thead > ");
	let trns = db.transaction("registroEntradas", "readwrite");

	let almacenValores = trns.objectStore("registroEntradas");

	let resultado = almacenValores.getAll()
	resultado.onsuccess = function () {
		let cursor = resultado.result;
		for (let i = 0; i < cursor.length; i++) {
			console.log(cursor[i])
			$("#tabla").append("<tr > <td> " + cursor[i].nombre + "</td><td> " + cursor[i].apellidos + "</td><td> " + cursor[i].dni + "</td><td> " + cursor[i].contacto + "</td><td> " + cursor[i].fechaEntrada + "</td> <td> <button type='button' class='btn btn-primary' id='boton' onclick=salida('" + cursor[i].dni + "')>Salida</btn> </td> </tr>");
		}
	}
}

function salida(dni) {
	let trns = db.transaction("registroEntradas", "readwrite");

	let almacenValores = trns.objectStore("registroEntradas");

	let request = almacenValores.get(dni.toString());

	let fecha = new Date().toLocaleTimeString('es-ES', { hour: 'numeric', minute: 'numeric' });

	request.onsuccess = function () {
		let results = request.result

		let datos = {
			dni: results.dni,
			nombre: results.nombre,
			apellidos: results.apellidos,
			contacto: results.contacto,
			fechaEntrada: results.fechaEntrada,
			fechaSalida: fecha
		}
		let del = almacenValores.delete(dni);
		del.onsuccess = function () { rellenarTabla(); };

		let trns = db.transaction("registroSalidas", "readwrite");

		let almacenValoresSalida = trns.objectStore("registroSalidas");

		let res = almacenValoresSalida.add(datos);

		res.onerror = function () { console.log(res.error) };
		res.onsuccess = function () { rellenarTabla2(); };
	}
}

function rellenarTabla2() {

	$("#tabla2").empty();
	$("#tabla2").append("<thead>< tr ><th>NOMBRE</th><th>APELLIDOS</th><th>DNI</th><th>CONTACTO</th><th>FECHA ENTRADA</th><th>FECHA SALIDA</th></tr ></thead > ");

	let trns = db.transaction("registroSalidas", "readonly");

	let almacenValores = trns.objectStore("registroSalidas");

	let resultado = almacenValores.getAll();

	resultado.onsuccess = function () {
		let cursor = resultado.result;
		for (let i = 0; i < cursor.length; i++) {
			console.log(cursor[i])
			$("#tabla2").append("<tr> <td> " + cursor[i].nombre + "</td><td> " + cursor[i].apellidos + "</td><td> " + cursor[i].dni + "</td><td> " + cursor[i].contacto + "</td><td> " + cursor[i].fechaEntrada + "</td> <td> " + cursor[i].fechaSalida + "</td> </tr>");
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