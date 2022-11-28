class Empleado extends Persona {
    //constructor
    constructor(nom,ape,ed,sal) {
        super(nom,ape,ed);
        this._salario=sal;
    }
    get salario(){
        return this._salario;
    }
    set salario(s){
         this._salario = s;
    }
    infoEmpleado() {
        return this.infoPersona()+" "+this._salario;
    }
}