//para abrir la base de datos
let openRequest = indexedDB.open("valores", 1);
//nombre   version
let db;

openRequest.onsuccess = function () {
    console.log("Base de datos abierta con exito")
    db = openRequest.result

    guardarDat()
}

openRequest.onerror = function () {
    console.log("Error")
}

//si cambias la version de la bd a una superior necesita un upgrade
//no se puede poner una version anterior
openRequest.onupgradeneeded = function (evento) {

    //este evento se lanza si:
    // no hay base de datos
    // o la base de datos actual es de version menor de la indicada arriba
    console.log("Lanzado el evento on upgrade needed")
    //objeto para manejar las operaciones con las base de datos
    let db = openRequest.result
    //comprobar que existe el Objeto datosEntrada
    //si no existe se crea
    if (!db.objectStoreNames.contains("notasAlumno")) {
        let notasAlumno = db.createObjectStore("notasAlumno");
        let index = notasAlumno.createIndex("ciclo_index", "ciclo")
    }
}

function guardarDat() {
    //abrimos una transaccion
    let trns = db.transaction("notasAlumno", "readwrite");

    //recuperamos el objectStore
    let almacenValores = trns.objectStore("notasAlumno");

    let alumno1 = {
        nombre: "Jorge",
        idMatricula: "DAW246",
        modulo: "Despliegue",
        ciclo: "DAW",
        nota: 7,
    }

    let alumno2 = {
        nombre: "Maria",
        idMatricula: "TEAS357",
        modulo: "Medio natural",
        ciclo: "TEAS",
        nota: 8,
    }

    //insertamos en la base de datos
    let res = almacenValores.put(alumno1, alumno1.idMatricula);
    let res2 = almacenValores.put(alumno2, alumno2.idMatricula);

    res2.onsuccess = function () { mostrarDatos() }
}

function mostrarDatos() {
    let trns = db.transaction("notasAlumno");
    let almacenValores = trns.objectStore("notasAlumno");

    //abrimos un cursor
    let request = almacenValores.openCursor();

    $('#datos').empty()

    $('#datos').append("<tr><th>Nombre</th><th>Id Matricula</th><th>Modulo</th><th>Ciclo</th><th>Nota</th></tr>")
    //si el cursor se abre con exito
    request.onsuccess = function () {
        //recuperamos un objeto cursor que apunta a la primera fila
        let cursor = request.result;

        if (cursor) { //el cursor es false si apunta a "nada"
            let clave = cursor.key; //recuperar la clave
            let valor = cursor.value; //recuperar el valor
            let salida = [];
            for (v in valor) {
                salida.push(valor[v])
            }
            $('#datos').append("<tr><td>" + salida[0] + "</td><td>" + salida[1] + "</td><td>" + salida[2] + "</td><td>" + salida[3] + "</td><td id='fechaEntrada'>" + salida[4] + "</td></tr>");
            cursor.continue();
        } else {
            console.log("No hay más resultados");
        }
    };
}

function guardarDatos() {
    //abrimos una transaccion
    let trns = db.transaction("notasAlumno", "readwrite");

    //recuperamos el objectStore
    let almacenValores = trns.objectStore("notasAlumno");

    let alumno = {
        nombre: $("#nombre").val(),
        idMatricula: $("#idMatricula").val(),
        modulo: $("#modulo").val(),
        ciclo: $("#ciclo").val(),
        nota: $("#nota").val(),
    }

    let res = almacenValores.put(alumno, alumno.idMatricula);

    res.onsuccess = function () { mostrarDatos() }
}

function buscarCiclo() {
    let ciclo = $('#busqCiclo').val();

    let transaction = db.transaction("notasAlumno");
    let apellidos = transaction.objectStore("notasAlumno")
    let apellidoIndex = apellidos.index("ciclo_index")
    let request = apellidoIndex.getAll(ciclo)
    textAlert = ""

    request.onsuccess = () => {
        if (request.result.length !== 0) {
            $('#datosEntrada').empty()
            $('#datosEntrada').append("<tr><th>Nombre</th><th>Apellido</th><th>DNI</th><th>Contacto</th><th>Fecha Entrada</th><th>Salida</th></tr>")
            for (let i = 0; i < request.result.length; i++) {
                textAlert += "Nombre: " + request.result[i].nombre + "; Id Matricula: " + request.result[i].idMatricula+ "; Modulo: " + request.result[i].modulo+ "; Ciclo: " + request.result[i].ciclo+ "; Nota: " + request.result[i].nota+" | "
            }
            $("#busqCiclo").val("");
            console.log(request.result)
            alert(textAlert)
        } else {
            alert("No esta ese ciclo")
        }
    }

    request.onerror = (err) => {
        console.error(`Error to search for entries: ${err}`)
    }
}