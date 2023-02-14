let urlDatos
let jsonResponse

$(principal)

function principal() {

    $.ajax({
        "url": "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/28161/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtb3Jlc2VyZ2lvdmFsQGdtYWlsLmNvbSIsImp0aSI6ImYzMjE3YWJhLWViMTMtNDFiMS1iMzkzLWIzZjYxMmUyMTA1MCIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNjc1MjM2NjYyLCJ1c2VySWQiOiJmMzIxN2FiYS1lYjEzLTQxYjEtYjM5My1iM2Y2MTJlMjEwNTAiLCJyb2xlIjoiIn0.izGHILhTGnloR063P8rUPibOGMiiKxCopSJmGiwkFUk"
    }).done(function (response) {
        console.log(response);
        urlDatos = response.datos

        $.ajax({
            "url": urlDatos
        }).done(function (response) {
            console.log(response);
            jsonResponse = $.parseJSON(response)
        });
    });
    divsDias()
}

function divsDias() {
    for (var i = 0; i < 6; i++) {
        let trDias = {
            class: "tr"
        }
        let img = {
            class: "imagenes",
            id: i,
            oculto: "si",
            src: "imagenes/joker.jpg"
        }
        let trPorcentaje = {
            class: "tr"
        }
        let trMinMax = {
            class: "tr"
        }

        let tr1 = $("<tr>", trDias);
        let tr2 = $("<img>", img);
        let tr3 = $("<tr>", trPorcentaje);
        let tr4 = $("<tr>", trMinMax);

        $(".tabla").append(tr1, tr2, tr3, tr4);
    }
}