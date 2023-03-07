$(principal)

function principal () {
    $("body").append('<h2>Berenjenas rellenas de atún al horno</h2>');
    
    $("body").append('<h4>Preparación</h4>');
    $("body").append('<ol id="receta"></ol>');

    $("body").append('<h4 id="titulo">Ingredientes</h4>');
    $("body").append('<ul id="ingredientes"></ul>');

    $("#receta").append("<li>Calentar en el horno al maximo de potencia. Cortar la berenjena por la mitad.</li>")
    $("#receta").append("<li>Meter la berenjena al horno hasta que se queden blandas.</li>")
    $("#receta").append("<li>Sacar la berenjena de la piel y mezclar con todos los ingredientes.</li>")
    $("#receta").append("<li>Introducir la mezcla en las dos mitades de la berenjena.</li>")
    $("#receta").append("<li>Poner queso raallado encima y gratinar en el horno.</li>")

    $("#ingredientes").append("<li>Una berenjena.</li>")
    $("#ingredientes").append("<li>2 latas de atún.</li>")
    $("#ingredientes").append("<li>Tomate frito en aceite de oliva.</li>")
    $("#ingredientes").append("<li>Queso parmesano rallado.</li>")
    $("#ingredientes").append("<li>Cebolla molida.</li>")
    $("#ingredientes").append("<li>Comino en polvo.</li>")
}