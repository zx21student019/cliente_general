$('body').append($('<h2>').text('Ventas por mes'));
$('body').append($('<h4>').text('Informe semanal'));

let tabla = $('<table>');

let tr1 = $("<tr>");
let tr2 = $("<tr>");
let tr3 = $("<tr>");
let tr4 = $("<tr>");
let tr5 = $("<tr>");
let tr6 = $("<tr>");
let tr7 = $("<tr>");

tr1.append($('<td>').text('Mes'));
tr1.append($('<td>').text('Ventas'));

tr2.append($('<td>').text('Enero'));
tr2.append($('<td>').text('10325€'));

tr3.append($('<td>').text('Febreo'));
tr3.append($('<td>').text('9188€'));

tr4.append($('<td>').text('Marzo'));
tr4.append($('<td>').text('11987€'));

tr5.append($('<td>').text('Abril'));
tr5.append($('<td>').text('7625€'));

tr6.append($('<td>').text('Mayo'));
tr6.append($('<td>').text('12967€'));

tr7.append($('<td>').text('Junio'));
tr7.append($('<td>').text('11134€'));

$('table').append(tr1, tr2, tr3, tr4, tr5, tr6, tr7);
$('body').append(tabla);