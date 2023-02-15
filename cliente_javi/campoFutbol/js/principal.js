//almacenamos los cuatro elementos input
let idFila;
let idEnviado;
let el = $("#EquipLocal")
let ev = $("#EquipVisitante")
let gl = $("#GolesLocal")
let gv = $("#GolesVisitante")

//asociamos al btn la funcion registraPartido
$("#btnER").click(registraPartido);
$("#btnMR").click(modificaPartido);
$("#btnDL").click(borraPartido);
$("#btnLF").click(limpiaFormulario);

function cargaInicial() {
    $.post("py/cargar.py", {}, iniciarTabla);
}

function iniciarTabla(data, status) {
    if (status == "success") {
        //meto los datos que vienen en un json data en la tabla

        let datosPartidos = $.parseJSON(data)
        $("#tablaCuerpo").empty();
        console.log(datosPartidos)

        for (dp of datosPartidos) {
            crearFila(dp[0], dp[1], dp[2], dp[3], dp[4]);
        }

    } else {
        alert("Error al recuperar los partidos.")
    }
}

//coge los 4campos con sus datos los valida y los manda al servidor
function registraPartido() {
    if (validarDatos) {
        $.post("py/inserta.py",
            {
                EquipLocal: el.val(),
                EquipVisitante: ev.val(),
                GolesLocal: gl.val(),
                GolesVisitante: gv.val(),
            }
            , respuesta);
    } else {
        alert("error en datos");
    }

}

function respuesta(data, status) {
    idEnviado = data
    if (status == "success") {
        crearFila(idEnviado, el.val(), ev.val(), gl.val(), gv.val());
    }
}

function crearFila(idp, elp, evp, glp, gvp) {
    $("#tablaCuerpo").append(
        `<tr ondblclick="rellenaFormulario()" fila="${idp}"><td>${elp}</td><td>${evp}</td><td>${glp}</td><td>${gvp}</td></tr>`
    )
    console.log($(this))
}

//accion asociada al doble click de cada fila
function rellenaFormulario() {

    let celda = $(this.event.target).parent().children().first();
    el.val(celda.html());
    ev.val(celda.next().html());
    gl.val(celda.next().next().html());
    gv.val(celda.next().next().next().html());

    idFila = $(this.event.target).parent().attr("fila")
    console.log(idFila)

    $("#btnER").prop("disabled", true);
    $("#btnMR").prop("disabled", false);
    $("#btnDL").prop("disabled", false);
}

//auxiliar que debería validar los datos antes de operar con ellos
function validarDatos() {
    //codigo para validar los datos
    return true;
}

cargaInicial();

//funcion que MODIFICA los datos de una fila en la base de datos y en la tabla HTML
function modificaPartido() {
    console.log("Se ha modificado: " + idFila)
    $.post("py/modificar.py",
        {
            idFilaPy: idFila,
            EquipLocal: el.val(),
            EquipVisitante: ev.val(),
            GolesLocal: gl.val(),
            GolesVisitante: gv.val(),
        },
        cargaInicial
    )

}

//funcion que BORRA los datos de una fila en la base de datos y en la tabla HTML
function borraPartido() {
    console.log("Se ha borrado: " + idFila)
    $.post("py/borrar.py",
        {
            idFilaPy: idFila
        },
        cargaInicial
    )
}


//funcion que LIMPIA los datos en el formulario
function limpiaFormulario() {
    el.val("");
    ev.val("");
    gl.val("");
    gv.val("");

    $("#btnER").prop("disabled", false);
    $("#btnMR").prop("disabled", true);
    $("#btnDL").prop("disabled", true);
}

function seleccionado(){
	if(registroAnterior != registro){
		$("#"+registroAnterior).removeClass();
		$("#"+registro).addClass("table-info");
		registroAnterior = registro;
	}
}