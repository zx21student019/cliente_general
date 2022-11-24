const persona0 = {
     nombre: "Adrián",
     apellidos: "Fernández",
     edad: 12,
     nombreCompleto: function() {
          return this.nombre + " " + this.apellidos;
     },
     fechaNacimiento: new Date("2010-04-25")
}

const persona1 = {
     nombre: "Ana",
     apellidos: "López",
     edad: 29,
     nombreCompleto: function() {
          return this.nombre + " " + this.apellidos;
     },
     fechaNacimiento: new Date("1993-02-02")
}

const persona2 = {
     nombre: "Juan",
     apellidos: "García",
     edad: 4,
     nombreCompleto: function() {
          return this.nombre + " " + this.apellidos;
     },
     fechaNacimiento: new Date("2018-10-07")
}

const persona3 = {
     nombre: "Antonio",
     apellidos: "Herrero",
     edad: 45,
     nombreCompleto: function() {
          return this.nombre + " " + this.apellidos;
     },
     fechaNacimiento: new Date("1977-06-12")
}

const persona4 = {
     nombre: "Zurano",
     apellidos: "Zapito",
     edad: 87,
     nombreCompleto: function() {
          return this.nombre + " " + this.apellidos;
     },
     fechaNacimiento: new Date("1935-01-03")
}

const persona5 = {
     nombre: "Javier",
     apellidos: "Liñan",
     edad: 18,
     nombreCompleto: function() {
          return this.nombre + " " + this.apellidos;
     },
     fechaNacimiento: new Date("2003-12-03")
}

const listaPersonas = [persona0, persona1, persona2, persona3, persona4, persona5];

function mostrarObjetos() {
     // Los objetos en JavaScript son dinámicos por lo que los puedes modificar sin tener
     // que reasignar el valor
     persona1.direccion = "Calle Grande 2, 1ºA";
     console.log(persona1.direccion);

     console.log(listaPersonas);
}

// JavaScript no puede ordenar un objeto sin más, hay que utilizar los valores de los objetos
function ordenarListaPersonasEdad() {
     console.log(listaPersonas.sort((a, b) => {
          return a.edad - b.edad;
     }));
}
function ordenarListaPersonasNombre() {
     console.log(listaPersonas.sort((a, b) => {
          if ( a.nombre < b.nombre ) { return -1; }
          if ( a.nombre > b.nombre ) { return 1; } 
          return 0;
     }));
}
function ordenarListaPersonasApellido() {
     console.log(listaPersonas.sort((a, b) => {
          if ( a.apellidos < b.apellidos ) { return -1; }
          if ( a.apellidos > b.apellidos ) { return 1; } 
          return 0;    
     }));
}

function ordenarListaPersonasNacimiento() {
     console.log(listaPersonas.sort((a, b) => {
          if ( a.fechaNacimiento < b.fechaNacimiento ) { return -1; }
          if ( a.fechaNacimiento > b.fechaNacimiento ) { return 1; } 
          return 0;    
     }));
}

function personaMayor() {
     document.getElementById("salida").innerHTML = (listaPersonas.sort((a, b) => {
          return b.edad - a.edad;
     })[0].nombreCompleto());
}
function personaMenor() {
     document.getElementById("salida").innerHTML = (listaPersonas.sort((a, b) => {
          return a.edad - b.edad;
     })[0].nombreCompleto());
}