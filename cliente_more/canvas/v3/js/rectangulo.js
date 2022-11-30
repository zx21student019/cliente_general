class Rectangulo {
    constructor(ancho,alto,perimetro,area){
        this._ancho = ancho;
        this._alto = alto;
        this._perimetro = perimetro;
        this._area = area;
    }
    get ancho(){
        return this._ancho;
    }
    set ancho(a){
         this._ancho = a;
    }
    get alto(){
        return this._alto;
    }
    set alto(al){
         this._alto = al;
    }
    get perimetro(){
        return this._perimetro;
    }
    set perimetro(p){
         this._perimetro = p;
    }
    get area(){
        return this._area;
    }
    set area(ar){
         this._area = ar;
    }
}