onload=principal;

function principal() {

	let contador = document.createElement('p');
	contador.innerHTML = ('3');
	contador.classList.add('contador', 'grid-centrar');
	document.querySelector('div').appendChild(contador);

	setTimeout(() => {
		contador.innerHTML = ('2');
	}, 1000);
	setTimeout(() => {
		contador.innerHTML = ('1');
	}, 2000);

	setTimeout(() => {
		contador.remove();
		jugar();
	}, 3000);

}

function jugar() {

	if (document.querySelector('button') != null ){
		let button = document.querySelector('button');
		button.remove();
	}

	const num = Math.round(Math.random() * 100) + 1;

	let numUsuario = prompt('Adivina el número del 1 al 100:');

	console.log(num);

	while (num != numUsuario) {

		if(( numUsuario.length == 0 ) || ( !parseInt(numUsuario) )) {
			break;
		} else if ( numUsuario > num ) {
			numUsuario = prompt('El número que has introducido es mayor que mi número...');
		} else if ( numUsuario < num ) {
			numUsuario = prompt('El número que has introducido es menor que mi número...');
		}

	}

	if ( num == numUsuario ) {
		let nombre = prompt('¡Has ganado! ¿Cómo te llamas?');
		document.getElementById('victoria').innerHTML=`Enhorabuena, ${nombre}, has ganado :)`;
		anadirBotonJugarDeNuevo();
	} else {
		document.getElementById('victoria').innerHTML=('¿No quieres jugar conmigo? :(');
		anadirBotonJugarDeNuevo();
	}

}

function anadirBotonJugarDeNuevo() {
	let boton = document.createElement('button');

	if (document.querySelector('button') == null ){
		document.querySelector('div').appendChild(boton);
	}

	boton.classList.add('css-button-sliding-to-left--red', 'grid-centrar');
	boton.innerHTML = 'JUGAR DE NUEVO'
	boton.onclick=jugar;
}