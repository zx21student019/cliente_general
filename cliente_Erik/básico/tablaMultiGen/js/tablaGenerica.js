onload = principal

function principal() {
	
	let n = prompt("Introduce un número");

	num = parseInt(n);
	console.log(n);

		if ((num > 1) && (num < 10)) {
			console.log("Tabla del " + num);
			console.log("....................");
			for (var i = 1; i < 11; i++) {
				console.log(num + "*" + i + "=" + num * i);
			}
		} else {
			console.log("Error, tienes que introducir un numero entre 1 y 10");
		}
}