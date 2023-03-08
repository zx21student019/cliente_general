$(document).ready(function () {

    $('body').append($('<h3>').text('Introduce los siguientes datos:'));

    let formulario = $('<form>').attr('id', 'formulario');

    formulario.append($('<label>').attr('for', 'nombre').text('Nombre:'));
    formulario.append($('<input>').attr('type', 'text').attr('name', 'nombre').attr('id', 'nombre'));
    formulario.append($('<br>'));

    formulario.append($('<label>').attr('for', 'apell').text('Apellidos:'));
    formulario.append($('<input>').attr('type', 'text').attr('name', 'apell').attr('id', 'apell'));
    formulario.append($('<br>'));

    formulario.append($('<label>').attr('for', 'edad').text('Edad:'));
    formulario.append($('<input>').attr('type', 'text').attr('name', 'edad').attr('id', 'edad'));
    formulario.append($('<br>'));

    formulario.append($('<input>').attr('type', 'Submit').attr('value', 'Enviar'));

    $('body').append(formulario);
});