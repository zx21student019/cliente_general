let abrirConsulta = indexedDB.open("objetos", 1);
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

abrirConsulta.onsuccess = function () {
     baseDatos = abrirConsulta.result;

     baseDatos
          .transaction('notasAlumnos', "readwrite")
          .objectStore('notasAlumnos')
          .clear();

     anadirDatosBaseDatos();
     anadirDatosTabla();
}

abrirConsulta.onerror = function () {
     alert("Error al acceder a la base de datos");
}

abrirConsulta.onupgradeneeded = function () {
     let baseDatos = abrirConsulta.result;

     if (!baseDatos.objectStoreNames.contains('notasAlumnos')) {
          let registro = baseDatos.createObjectStore('notasAlumnos', { keyPath: 'idMatricula' });
          registro.createIndex('indiceCiclo', 'ciclo', { multiEntry: true, unique: false });
     }
}

function anadirDatosBaseDatos() {
     for (let alumno of alumnos) {
          let insercion = baseDatos
               .transaction('notasAlumnos', "readwrite")
               .objectStore('notasAlumnos')
               .put(alumno);

          insercion.onerror = () => alert("Error al insertar los datos en la base de datos");
          insercion.onsuccess = () => console.log("Datos insertados");
     }
}

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

$('#anadirFila').click(function () {

     let alumno = {
          idMatricula: $('#idMatricula').val(),
          nombre: $('#nombre').val(),
          modulo: $('#modulo').val(),
          ciclo: $('#ciclo').val(),
          nota: $('#nota').val(),
     };

     let insercion = baseDatos
          .transaction('notasAlumnos', "readwrite")
          .objectStore('notasAlumnos')
          .put(alumno);

     insercion.onerror = () => alert("Error al insertar los datos en la base de datos");
     insercion.onsuccess = () => {
          console.log('Nueva fila insertada');
          anadirFilaTabla(alumno);
     };
});

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