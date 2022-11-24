const persona1 = {
    nombre:"Ana",
    apellidos:"Lopez",
    edad:29,
    nombrecompleto: function(){
        return this.nombre + " " + this.apellidos;
    }
}

const persona2 = {
    nombre:"Juan",
    apellidos:"Garcia",
    edad:4
}

const listaPersonas = [persona1,persona2];

function mostrarObjetos() {
    console.log(persona1.nombre);
    console.log(persona1.apellidos);
    console.log(persona1.edad);
    console.log(persona1.nombrecompleto())

    console.log(persona2["nombre"]);
    console.log(persona2["apellidos"]);
    console.log(persona2["edad"]);

    console.log(listaPersonas);
}

function ordenarListaPersonasPorEdad() {
    console.log(listaPersonas);
    listaPersonas.sort((a, b) => a.edad - b.edad);
    console.log(listaPersonas);
}

function ordenarAlfabeticoPorApellidos(a,b) {
    if(a.apellidos < b.apellidos) {return -1;}
    if(a.apellidos > b.apellidos) {return 1;}
    return 0;
}

function ordenarListaPersonasPorFecNac(a,b) {
    if(a.apellidos < b.apellidos) {return -1;}
    if(a.apellidos > b.apellidos) {return 1;}
    return 0;
}