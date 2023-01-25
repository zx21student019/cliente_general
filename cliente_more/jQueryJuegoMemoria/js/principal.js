$(creajuego);
$(desordenaCartas)

arrayCartas = ["imagenes/muerte.jpg","imagenes/loco.jpg","imagenes/luna.jpg","imagenes/muerte.jpg","imagenes/loco.jpg","imagenes/luna.jpg"]
cartasDdesordenadas = []
jugada = 0;
let idp1 = "";
let idp2 = "";
let par1 = "";
let par2 = "";

function creajuego(){

    for (var i = 0; i < arrayCartas.length; i++) {
        let divItems = {
            class: "grid-item"
        }


        let img = {
            class: "imagenes",
            id: i,
            oculto: "si",
            src: "imagenes/joker.jpg"
        }

        let divImagenes = $("<div>", divItems);
        let imagen = $("<img>", img);

        $(divImagenes).append(imagen);
        $(".cartas").append(divImagenes);
    }
    $(".imagenes").click(giraCartas);
}

function desordenaCartas() {
    cartasDdesordenadas = arrayCartas.sort(function () {
        return Math.random() - 0.5;
    });
}

function giraCartas() {
    let id = $(this).attr("id");

    $(this).attr("oculto", "no");

    if (jugada != 2) {
        $(this).attr("src", cartasDdesordenadas[id]);
        if (jugada == 0) {
            idp1 = "#" + id;
            par1 = $(this).attr("src");
            
        } else if (jugada == 1) {
            idp2 = "#" + $(this).attr("id");
            par2 = $(this).attr("src");

        }
        jugada++;
    }

    if (jugada == 2) {

        comprobar();
    }
}
function comprobar() {
    if (par1 == par2) {
        idp1 = "";
        idp2 = "";
        par1 = "";
        par2 = "";
        jugada = 0;
    } else {

        setTimeout(function () {
            $(idp1).attr("src", "imagenes/joker.jpg")
            $(idp1).attr("oculto", "si")

            $(idp2).attr("src", "imagenes/joker.jpg")
            $(idp2).attr("oculto", "si")
            par1 = "";
            par2 = "";
            jugada = 0;
        }, 1000);
    }
    if ($("[oculto = 'no']").length == arrayCartas.length) {
        setTimeout(function () {
            alert("HAS GANADO")
            let conf = confirm("Volver a jugar")
            if (conf) {
                $(".cartas").empty();
                creajuego();
                desordenaCartas();
            }
        }, 500);
    }
}