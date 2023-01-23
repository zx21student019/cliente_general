let cartas = [];
let cartasReordenadas = [];
let vidas = 3;
let victoria = false;
let victorias = 0;
let derrotas = 0;
let parejaActual = []
let parejasConseguidas = 0;
let parejas = [
     ['rayo-1', 'rayo-2'],
     ['avion-1', 'avion-2'],
     ['balon-1', 'balon-2'],
]

function reordenarCartas() {
     $('.tablero').children().each(function() {
          cartas.push($(this));
          $(this).remove();
     });
     cartasReordenadas = cartas.sort((a, b) => 0.5 - Math.random());
     $('.tablero').append(cartas);
     asociarRevelar();
}

function asociarRevelar() {
     for(let carta of $('.carta-contenedor')) {
          $(carta).bind('click', function() {
               revelar($(this));
          });
     }
}

function actualizarMarcador() {
     $('#victorias').text(victorias);
     $('#derrotas').text(derrotas);
     if (vidas >= 0) $('#vidas').text(vidas);
}

function revelar(carta) {
     if(!carta.hasClass('carta-contenedor-volteado') && vidas >= 0) {
          carta.toggleClass('carta-contenedor-volteado');
          parejaActual.push(carta.attr('id'));
          if(parejaActual.length == 2) comprobarParejas();
     }
}

function comprobarParejas() {
     let parejaEncontrada = false;
     for (let pareja in parejas) {
          if (parejas[pareja].sort().join(',') == parejaActual.sort().join(',')) {
               parejas.splice(pareja, 1);
               parejaEncontrada = true;
               break;
          }
     }

     if(!parejaEncontrada) {
          parejaIncorrecta();
     } else {
          comprobarVictoria();
     }

     parejaActual = [];
}

function parejaIncorrecta() {
     let parejaVoltear = parejaActual;
     setTimeout(() => {
          for (let carta of parejaVoltear) {
               $('#'+carta).toggleClass('carta-contenedor-volteado');
               setTimeout(() => {
                    $('#'+carta).effect('shake', {times: 2, distance: 5}, 200);
               }, 800);
          }
     }, 800);
     vidas--;
     comprobarDerrota();
     actualizarMarcador();
}

function comprobarDerrota() {
     if (vidas == -1) {
          $('.cabecera').animate({opacity: 0}, 800);
          derrotas ++;
          setTimeout(() => {
               $('.tablero').toggle("drop");
               setTimeout(() => {
                    $('#modal-derrota').fadeIn();
               }, 500);
          }, 1600);
     }
}

function comprobarVictoria() {
     if(parejas.length == 0) {
          $('.cabecera').animate({opacity: 0}, 800);
          victorias++;
          victoria = true;
          setTimeout(() => {
               $('.tablero').effect( "bounce", { times: 5, distance: 40}, 700 );
               setTimeout(() => {
                    $('#modal-victoria').fadeIn();
               }, 1200);
          }, 800);
     }
}

function reiniciarJuego() {

     $('.cabecera').animate({opacity: 1}, 800);

     console.log(victoria);
     console.log(victorias);

     for(let carta of $('.carta-contenedor')) {
          if($(carta).hasClass('carta-contenedor-volteado')) {
               $(carta).toggleClass('carta-contenedor-volteado');
          }
     }

     setTimeout(() => {
          if(victoria) {
               $('#modal-victoria').fadeOut();
               victoria = false;
          } else {
               $('#modal-derrota').fadeOut();
               $('.tablero').toggle( "drop");
          }
          reordenarCartas();
     }, 500)
     
     vidas = 3;
     actualizarMarcador();

     parejaActual = []
     parejasConseguidas = 0;
     parejas = [
          ['rayo-1', 'rayo-2'],
          ['avion-1', 'avion-2'],
          ['balon-1', 'balon-2'],
     ]
     
}

reordenarCartas();
actualizarMarcador();

// $('#boton-cerrar-modal').click(() => $('#modal-victoria').css("display","none"));

$('.boton-jugar-de-nuevo').bind('click', reiniciarJuego);