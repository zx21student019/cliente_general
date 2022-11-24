export default class Persona {
     constructor(nombre, apellidos, edad) {
          this.nombre = nombre;
          this.apellidos = apellidos;
          this.edad = edad;
     }
     nombreCompleto(){
          return this.nombre + ' ' + this.apellidos;
     }
}