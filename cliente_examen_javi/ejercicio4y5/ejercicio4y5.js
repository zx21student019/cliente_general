// Abrir o crear una base de datos llamada "objetos" con versión 1
let abrirConsulta = indexedDB.open("objetos", 1);

// Crear variables para almacenar la base de datos y una lista de alumnos
let baseDatos;
let alumnos = [
     {
          nombre: 'Jorge',
          idMatricula: 'DAW246',
          modulo: 'Despliegue',
          ciclo: 'DAW',
          nota: 7
     },
     {
          nombre: 'María',
          idMatricula: 'TEAS357',
          modulo: 'Medio natural',
          ciclo: 'TEAS',
          nota: 8
     },
];

// Cuando se haya abierto la base de datos exitosamente, hacer lo siguiente:
abrirConsulta.onsuccess = function () {
     // Guardar la base de datos en la variable baseDatos
     baseDatos = abrirConsulta.result;

     // Borrar todas las entradas en el object store 'notasAlumnos'
     baseDatos
          .transaction('notasAlumnos', "readwrite")  // Iniciar una transacción de lectura-escritura en el object store 'notasAlumnos'
          .objectStore('notasAlumnos')  // Obtener el object store 'notasAlumnos'
          .clear();  // Borrar todas las entradas

     // Añadir los datos de la lista de alumnos a la base de datos
     anadirDatosBaseDatos();

     // Añadir los datos de la base de datos a la tabla
     anadirDatosTabla();
}

// Si hay un error al acceder a la base de datos, mostrar una alerta
abrirConsulta.onerror = function () {
     alert("Error al acceder a la base de datos");
}

// Cuando la base de datos se actualice, hacer lo siguiente:
abrirConsulta.onupgradeneeded = function () {
     let baseDatos = abrirConsulta.result;

     // Si el object store 'notasAlumnos' no existe, crearlo
     if (!baseDatos.objectStoreNames.contains('notasAlumnos')) {
          // Crear un nuevo object store llamado 'notasAlumnos' con el campo 'idMatricula' como clave primaria
          let registro = baseDatos.createObjectStore('notasAlumnos', { keyPath: 'idMatricula' });

          // Crear un índice en el campo 'ciclo' para que se pueda buscar por ese campo (esto es para hacer el filtro, se suele hacer al final)
          registro.createIndex('indiceCiclo', 'ciclo', { multiEntry: true, unique: false });
     }
}

// Añade los datos de los alumnos a la base de datos
function anadirDatosBaseDatos() {
     for (let alumno of alumnos) {
          let insercion = baseDatos
               .transaction('notasAlumnos', "readwrite")
               .objectStore('notasAlumnos')
               .put(alumno);//put y add se usan paraa añadir datos a la base de datos,si intentamos añadir un id put lo reemplaza mientras que add no te deja

          // Maneja el error en caso de fallo al insertar datos
          insercion.onerror = () => alert("Error al insertar los datos en la base de datos");
          // Imprime un mensaje en la consola si los datos se insertaron correctamente
          insercion.onsuccess = () => console.log("Datos insertados");
     }
}

// Añade los datos de los alumnos a la tabla en la página web
function anadirDatosTabla() {
     let peticion = baseDatos
          .transaction('notasAlumnos')
          .objectStore('notasAlumnos')
          .openCursor();

     peticion.onsuccess = function () {
          let cursor = peticion.result;
          if (cursor) {
               anadirFilaTabla(cursor.value);
               cursor.continue();
          }
     };
}

// Maneja el evento de clic en el botón de agregar una fila a la tabla
$('#anadirFila').click(function () {
     let alumno = {
          idMatricula: $('#idMatricula').val(),
          nombre: $('#nombre').val(),
          modulo: $('#modulo').val(),
          ciclo: $('#ciclo').val(),
          nota: $('#nota').val(),
     };

     // Inserta los datos del alumno en la base de datos
     let insercion = baseDatos
          .transaction('notasAlumnos', "readwrite")
          .objectStore('notasAlumnos')
          .put(alumno);

     // Maneja el error en caso de fallo al insertar datos
     insercion.onerror = () => alert("Error al insertar los datos en la base de datos");
     // Imprime un mensaje en la consola si los datos se insertaron correctamente y agrega una nueva fila a la tabla
     insercion.onsuccess = () => {
          console.log('Nueva fila insertada');
          anadirFilaTabla(alumno);
     };
});

// Añade una fila a la tabla en la página web
function anadirFilaTabla(alumno) {
     $('#tabla').append(`
     <tr>
          <td>${alumno.idMatricula}</td>
          <td>${alumno.nombre}</td>
          <td>${alumno.modulo}</td>
          <td>${alumno.ciclo}</td>
          <td>${alumno.nota}</td>
     </tr>
`);
}

// Maneja el evento de clic en el botón de buscar alumnos por ciclo
$('#buscarCiclo').click(function () {
     let datosCiclos = baseDatos
          .transaction('notasAlumnos')
          .objectStore('notasAlumnos')
          .index('indiceCiclo')
          .openCursor();

     datosCiclos.onsuccess = function () {
          let cursor = datosCiclos.result;

          if (cursor) {
               if ($('#indiceCiclo').val() == cursor.value.ciclo) alert(cursor.value.nombre + '(' + cursor.value.idMatricula + ')');
               cursor.continue();
          }
     };
});