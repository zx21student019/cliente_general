$(creaTablero);
$(crearRandom);

let bucleArmas = ["img/gaia.png", "img/op.png", "img/gaia.png", "img/spectre.png", "img/op.png", "img/spectre.png"];
let bucleRandom = [];
let volteada = 0;
let idp1 = ""
let idp2 = ""
let par1 = ""
let par2 = ""

function creaTablero() {

    for (var i = 0; i < bucleArmas.length; i++) {
        let divItems = {
            class: "grid-item"
        }


        let img = {
            class: "imagenes",
            id: i,
            oculto: "si",
            src: "img/interrogacion.jpg"
        }

        let divImagenes = $("<div>", divItems);
        let imagen = $("<img>", img);

        $(divImagenes).append(imagen);
        $(".grid-container").append(divImagenes);
    }
    $(".imagenes").click(vueltaCartas);
}

function crearRandom() {
    bucleRandom = bucleArmas.sort(function () {
        return Math.random() - 0.5;
    });
}

function vueltaCartas() {
    let id = $(this).attr("id");

    $(this).attr("oculto", "no");

    if (volteada != 2) {
        $(this).attr("src", bucleRandom[id]);
        if (volteada == 0) {
            idp1 = "#" + id;
            par1 = $(this).attr("src");
            
        } else if (volteada == 1) {
            idp2 = "#" + $(this).attr("id");
            par2 = $(this).attr("src");

        }
        volteada++;
    }

    if (volteada == 2) {

        comprobar();
    }
}

function comprobar() {
    if (par1 == par2) {
        idp1 = "";
        idp2 = "";
        par1 = "";
        par2 = "";
        volteada = 0;
    } else {

        setTimeout(function () {
            $(idp1).attr("src", "img/interrogacion.jpg")
            $(idp1).attr("oculto", "si")

            $(idp2).attr("src", "img/interrogacion.jpg")
            $(idp2).attr("oculto", "si")
            par1 = "";
            par2 = "";
            volteada = 0;
        }, 1000);
    }

    if ($("[oculto = 'no']").length == bucleArmas.length) {
        setTimeout(function () {
            alert("HAS GANADO")
            let conf = confirm("Volver a jugar")
            if (conf) {
                $(".grid-container").empty();
                creaTablero();
                crearRandom();
            }
        }, 500);
    }

}
