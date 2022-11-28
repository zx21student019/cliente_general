class Persona {
    constructor(nom,ape,ed) {
        this._nombre=nom;
        this._apellido=ape;
        this._edad=ed;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(n){
         this._nombre = n;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(a){
         this._apellido = a;
    }
    get edad(){
        return this._edad;
    }
    set edad(e){
         this._edad = e;
    }

    infoPersona() {
        return this._nombre+" "+this._apellido+" "+this._edad;
    }
}