let openRequest = indexedDB.open("listaContactos", 1);

let db;

openRequest.onsuccess = function () {
    console.log("base de datos abierta con exito");

    db = openRequest.result;

    let trns = db.transaction("datosContactos", "readwrite");

    let almacenValores = trns.objectStore("datosContactos");

    let datos = {
        nombre: $("Juan Garcia Lopez"),
        empresa: $("Repsol"),
        cargo: $("Director Tecnico"),
        telefono: $("555345654"),
        correo: $("juan")
    }

    let resultado = almacenValores.add(datos);

    resultado.onsuccess = function () {
        console.log("insertado con exito");
    }

    resultado.onerror = function () {
        console.log("error al insertar");
    }
    rellenarTabla()
}

openRequest.onerror = function () {
    console.log("base de datos abierta con ERROR");
}

openRequest.onupgradeneeded = function (evento) {

    let dbS = openRequestSalida.result;

    if (!dbS.objectStoreNames.contains('datosContactos')) {
        let salidaDB = dbS.createObjectStore("datosContactos", { keyPath: 'telefono' });
        let index = salidaDB.createIndex('empresa');
    }
}
function rellenarTabla() {

    $("#entrada").empty();

    //para poder leer la indexedDB se cambia el tipo de readwrite a readonly
    let trns = dbE.transaction("datosContactos", "readonly");

    let almacenValores = trns.objectStore("datosContactos");

    let request = almacenValores.openCursor();

    // llamado por cada valor encontrado por el cursor
    request.onsuccess = function () {
        let cursor = request.result;
        if (cursor) {
            let key = cursor.key; // clave del objeto (el campo id)
            let value = cursor.value; // valor del objeto
            $("#tabla").append(
                `<tr><td>${value.nombre}</td><td>${value.empresa}</td><td>${value.cargo}</td><td>${value.telefono}</td><td>${value.correo}</td><td><button onclick="borrar('${key.toString()}')">Borrar</button></tr>`
            );
            cursor.continue();
        } else {
            console.log("No hay más valores");
        }
    };
}

function borar(telefono) {
    //para poder leer la indexedDB se cambia el tipo de readwrite a readonly
    let trnsE = dbE.transaction("datosContactos", "readwrite");

    let almacenValoresE = trnsE.objectStore("datosContactos");

    let request = almacenValoresE.get(telefono.toString());

    request.onsuccess = function () {
        let results = request.result

        let miObjeto = {
            nombre: results.nombre,
            empresa: results.empresa,
            cargo: results.cargo,
            telefono: results.telefono,
            correo: results.correo,
        }

        let del = almacenValoresE.delete(telefono.toString());
    }
}
