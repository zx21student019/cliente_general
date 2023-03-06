$('body').append($('<h2>').text('Berenjenas rellenas de atún al horno'));
$('body').append($('<h4>').text('Preparación'));

let listaOrdenada = $('<ol>').attr('id', 'receta');
listaOrdenadaContenido = {
     0: $('<li>').text('Calentar el horno a máxima potencia. Cortar la berenjena por la mitad.'),
     1: $('<li>').text('Meter la berenjena al horno hasta que se queden blandas.'),
     2: $('<li>').text('Sacar la berenjena de la piel y mezclar con los ingredientes.'),
     3: $('<li>').text('Introducir la mezcla en las dos mitades de la berenjena.'),
     4: $('<li>').text('Poner queso rallado encima y gratinar al horno.')
}
for (elemento in listaOrdenadaContenido) listaOrdenada.append(listaOrdenadaContenido[elemento])
$('body').append(listaOrdenada);

$('body').append($('<h4>').attr('id', 'titulo').text('Ingredientes'));

let listaDesordenada = $('<ul>').attr('id', 'ingredientes');
listaDesordenadaContenido = {
     0: $('<li>').text('Una berenjena.'),
     1: $('<li>').text('2 latas de atún.'),
     2: $('<li>').text('Tomate frito en aceite de oliva.'),
     3: $('<li>').text('Queso parmesano rallado.'),
     4: $('<li>').text('Cebolla molida.'),
     5: $('<li>').text('Comino en polvo.'),
}
for (elemento in listaDesordenadaContenido) listaDesordenada.append(listaDesordenadaContenido[elemento])
$('body').append(listaDesordenada);