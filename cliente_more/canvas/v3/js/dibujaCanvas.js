class dbjCanvas {
    static limpiarLienzo(cnv){
        let ctx = cnv.getContext("2d");
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0,0,400,600);
    }
    static dibujarRectangulo(cnv,rctngl){
        let coordenadaX = 200 - rctngl.ancho/2;
        let coordenadaY = 400 - rctngl.alto/2;

        dbjCanvas.limpiarLienzo(cnv);
        let preimetro = (rctngl.ancho*2) + (rctngl.alto*2);
        let area = rctngl.ancho * rctngl.alto;

        let ctx = cnv.getContext("2d");

        ctx.fillStyle = "black";
        ctx.font="15pt Verdana";
        ctx.fillText("El alto es: "+rctngl.alto,10,30,200)
        ctx.fillText("El ancho es: "+rctngl.ancho,10,80,200)
        ctx.fillText("El perimetro es: "+preimetro,10,130,200)
        ctx.fillText("El area es: "+area,10,180,200)

        ctx.fillRect(coordenadaX,coordenadaY,rctngl.ancho,rctngl.alto);
    }

}