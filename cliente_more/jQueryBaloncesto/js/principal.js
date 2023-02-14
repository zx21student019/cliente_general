$(cargaInicial);

// asociamos al boton btn la funcion registraPartido
$("#btnER").click(registrapartido);
$("#btnMF").click(modificaPartido);
$("#btnDL").click(borraPartido);
$("#btnLF").click(limpiaFormulario);


let eqLocalInput = $("#EquipoLocal");
let eqVisitInput = $("#EquipoVisitante");
let pLocalInput = $("#golesLocal");
let pVisitInput = $("#golesVisitante");


let registro = "";
let registroAnterior = "";
let borrado = ""
let modificado = ""

function cargaInicial() {
    $.post("py/cargaDatos.py", {}, cargarTabla);
    limpiarFormulario();
}

function cargarTabla(data, status) {
    if (status == "success") {
        let dataJson = $.parseJSON(data);
        for (dp of dataJson) {
            crearFila(dp.id, dp.EquipLocal, dp.EquipVisitante, dp.puntosLocal, dp.puntosVisitante);
        }
    }
}

function registraPartido() {
    if (validarDatos) {
        $.post("py/inserta.py",
            {
                EquipLocal: eqLocalInput.val(),
                EquipVisitante: eqVisitInput.val(),
                puntosLocal: pLocalInput.val(),
                puntosVisitante: pVisitInput.val()
            },
            respuesta);
    } else {
        alert("Error en los datos");
    }
}

function respuesta(data, status) {
    if (status == "success") {
        let dataJson = $.parseJSON(data);
        crearFila(dataJson[0][0], eqLocalInput.val(), eqVisitInput.val(), pLocalInput.val(), pVisitInput.val());
    }
}
