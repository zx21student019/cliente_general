$(cargaInicial);

// asociamos al boton btn la funcion registraPartido
$("#btnEnv").click(registraPartido);
$("#btnMod").click(modificarPartido);
$("#btnBor").click(borrarPartido);
$("#btnLimp").click(limpiarFormulario);


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

function validarDatos() {
    return true;
}

function crearFila(fila, el, ev, pl, pv) {
    $("#tablaCuerpo").append(
        `<tr ondblclick="rellenaFormulario()" id="fila-${fila}"><td>${el}</td><td>${ev}</td><td>${pl}</td><td>${pv}</td></tr>`
    );
}

function rellenaFormulario() {
    registro = $(this.event.target).parent().attr("id");

    if (registroAnterior == "") {
        registroAnterior = registro;
        $("#" + registro).addClass("informacionTabla");
    } else {
        seleccionado();
    }

    let celda = $(this.event.target).parent().children().first();

    eqLocalInput.val(celda.html());
    eqVisitInput.val(celda.next().html());
    pLocalInput.val(celda.next().next().html());
    pVisitInput.val(celda.next().next().next().html());



    $("#btnEnv").prop("disabled", true);
    $("#btnMod").prop("disabled", false);
    $("#btnBor").prop("disabled", false);
}

function modificarPartido() {
    if (validarDatos) {
        let divisionId = registro.split("-");

        let registroId = divisionId[1];

        borrado = ""
        modificado = "si"

        $.post("py/modificar.py",
            {
                idFila: registroId,
                EquipLocal: eqLocalInput.val(),
                EquipVisitante: eqVisitInput.val(),
                puntosLocal: pLocalInput.val(),
                puntosVisitante: pVisitInput.val()
            },
            recargarTabla);
    } else {
        alert("Error en los datos");
    }
}

function borrarPartido(){
	let divisionId = registro.split("-");

	let registroId = divisionId[1];

	borrado="si"
	modificado=""

	$.post("py/borra.py",
		{
			idFila: registroId
		}
	,recargarTabla)
}

function recargarTabla(data,status){
	if(status == "success"){
		if(borrado == "si"){
			$("#"+registro).remove();
			limpiarFormulario();
		}else if(modificado == "si"){
			let dataJson = $.parseJSON(data);
			$("#"+registro).html(`<td>${dataJson[0][0]}</td><td>${dataJson[0][1]}</td><td>${dataJson[0][2]}</td><td>${dataJson[0][3]}</td>`)
			limpiarFormulario();
		}
		$("#"+registroAnterior).removeClass();
	}
}

function limpiarFormulario(){
	eqLocalInput.val("");
	eqVisitInput.val("");
	pLocalInput.val("");
	pVisitInput.val("");

	$("#btnEnv").prop("disabled",false);
	$("#btnMod").prop("disabled",true);
	$("#btnBor").prop("disabled",true);

	$("#"+registroAnterior).removeClass();
}

function seleccionado(){
	if(registroAnterior != registro){
		$("#"+registroAnterior).removeClass();
		$("#"+registro).addClass("informacionTabla");
		registroAnterior = registro;
	}
}
