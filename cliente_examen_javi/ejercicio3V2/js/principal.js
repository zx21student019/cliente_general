$(document).ready(function() {
	$.post('datos.csv', function(data) {
		var filas = data.split('\n');
		var tabla = $('#tabla-datos tbody');
		for (var i = 0; i < filas.length; i++) {
			var campos = filas[i].split(':');
			tabla.append('<tr><td>' + campos[0] + '</td><td>' + campos[1] + '</td><td>' + campos[2] + '</td></tr>');
		}
	});
});