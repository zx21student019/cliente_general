let abrirConsulta = indexedDB.open("objetoss", 1);

let baseDatos;
let canciones = [
    {
        titulo: 'Drivers License',
        autor: 'Olivia Rodrigo',
        estilo: 'Indi pop',
        duracion: '4:02',
        discografica: 'Interscope Records'
    },
    {
        titulo: 'Montero',
        autor: 'Lil Nas X',
        estilo: 'Pop Rap',
        duracion: '2:17',
        discografica: 'Columbia Records'
    },
];

abrirConsulta.onsuccess = function () {
    baseDatos = abrirConsulta.result;

    baseDatos
        .transaction('listaCanciones', "readwrite")
        .objectStore('listaCanciones')
        .clear();

    anadirDatosBaseDatos();

    anadirDatosTabla();
}

abrirConsulta.onerror = function () {
    alert("Error al acceder a la base de datos");
}

abrirConsulta.onupgradeneeded = function () {
    let baseDatos = abrirConsulta.result;

    if (!baseDatos.objectStoreNames.contains('listaCanciones')) {
        let registro = baseDatos.createObjectStore('listaCanciones', { keyPath: 'titulo' });
    }
}

function anadirDatosBaseDatos() {
    for (let cancion of canciones) {
        let insercion = baseDatos
            .transaction('listaCanciones', "readwrite")
            .objectStore('listaCanciones')
            .put(cancion);

        insercion.onerror = () => alert("Error al insertar los datos en la base de datos");
        insercion.onsuccess = () => console.log("Datos insertados");
    }
}

function anadirDatosTabla() {
    let peticion = baseDatos
        .transaction('listaCanciones')
        .objectStore('listaCanciones')
        .openCursor();

    peticion.onsuccess = function () {
        let cursor = peticion.result;
        if (cursor) {
            anadirFilaTabla(cursor.value);
            cursor.continue();
        }
    };
}

function anadirFilaTabla(cancion) {
    $('#tabla').append(`
    <tr>
        <td>${cancion.titulo}</td>
        <td>${cancion.autor}</td>
        <td>${cancion.estilo}</td>
        <td>${cancion.duracion}</td>
        <td>${cancion.discografica}</td>
    </tr>
`);
}


$('#anadirFila').click(function () {
    let cancion = {
        titulo: $('#titulo').val(),
        autor: $('#autor').val(),
        estilo: $('#estilo').val(),
        duracion: $('#duracion').val(),
        discografica: $('#discografica').val(),
    };

    let insercion = baseDatos
        .transaction('listaCanciones', "readwrite")
        .objectStore('listaCanciones')
        .put(cancion);

    insercion.onerror = () => alert("Error al insertar los datos en la base de datos");

    insercion.onsuccess = () => {
        console.log('Nueva fila insertada');
        anadirFilaTabla(cancion);
    };
});