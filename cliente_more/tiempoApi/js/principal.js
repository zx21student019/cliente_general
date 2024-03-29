let urlDatos
let jsonResponse
let dias = [];
let tempMax = [];
let tempMin = [];

$(principal)

function principal() {

    $.ajax({
        "url": "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/28161/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtb3Jlc2VyZ2lvdmFsQGdtYWlsLmNvbSIsImp0aSI6ImYzMjE3YWJhLWViMTMtNDFiMS1iMzkzLWIzZjYxMmUyMTA1MCIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNjc1MjM2NjYyLCJ1c2VySWQiOiJmMzIxN2FiYS1lYjEzLTQxYjEtYjM5My1iM2Y2MTJlMjEwNTAiLCJyb2xlIjoiIn0.izGHILhTGnloR063P8rUPibOGMiiKxCopSJmGiwkFUk"
    }).done(function (response) {
        urlDatos = response.datos

        $.ajax({
            "url": urlDatos
        }).done(function (response) {
            jsonResponse = $.parseJSON(response)
            estructuraTabla(jsonResponse);
        });
    });

}

function estructuraTabla(datos) {
    let trDias = {
        class: "trDias"
    }
    let trImg = {
        class: "trImg"
    }
    let trPorcentaje = {
        class: "trPorcentaje"
    }
    let trMin = {
        class: "trMin"
    }
    let trMax = {
        class: "trMax"
    }

    let tr1 = $("<tr>", trDias);
    let tr2 = $("<tr>", trImg);
    let tr3 = $("<tr>", trPorcentaje);
    let tr4 = $("<tr>", trMax);
    let tr5 = $("<tr>", trMin);


    $(".tabla").append(tr1, tr2, tr3, tr4, tr5);

    rellenarTabla(jsonResponse)
}

function rellenarTabla(datos) {
    let arrayDias = datos[0].prediccion.dia;
    for (let index = 0; index < arrayDias.length; index++) {
        let fecha = arrayDias[index].fecha

        let fechaGuardar = new Date(fecha).getDate() + "/" + (new Date(fecha).getMonth() + 1);

        dias.push(fechaGuardar);

        const opciones = { weekday: 'short', day: 'numeric' }
        $(".trDias").append(
            `<td>${new Date(fecha).toLocaleDateString('es-ES', opciones)}</td>`
        )

        let contador = 0;

        while (arrayDias[index].estadoCielo[contador].value == '') {
            contador++;
        }

        $('.trImg').append(
            `<td><img src="https://www.aemet.es/imagenes/png/estado_cielo/${arrayDias[index].estadoCielo[contador].value}_g.png"></td>`
        );

        tempMax.push(arrayDias[index].temperatura.maxima);
        tempMin.push(arrayDias[index].temperatura.minima);


        $(".trMax").append(
            `<td>máxima ${arrayDias[index].temperatura.maxima}º</td>`
        )
        $(".trMin").append(
            `<td>mínima ${arrayDias[index].temperatura.minima}º</td>`
        )

    }
    creaGrafico(jsonResponse);
}
function creaGrafico(datos) {

    let grafLineas = $(".canvasGrafico")

    Chart.defaults.global.defaultFontSize = 19;

    let arrayDias = datos[0].prediccion.dia;

    var speedData = {
        labels: dias,
        datasets: [{
            label: "Tª máxima",
            data: tempMax,
            lineTension: 0,
            fill: false,
            borderColor: 'red',
            backgroundColor: 'transparent',
            borderDash: [5, 5],
            pointBorderColor: 'red',
            pointBackgroundColor: 'rgba(255,0,0,0.5)',
            pointRadius: 5,
            pointHoverRadius: 10,
            pointHitRadius: 30,
            pointBorderWidth: 2,
            pointStyle: 'rectRounded'
        },
        {
            label: "Tª mínima",
            data: tempMin,
            lineTension: 0,
            fill: false,
            borderColor: 'blue',
            backgroundColor: 'transparent',
            borderDash: [5, 5],
            pointBorderColor: 'blue',
            pointBackgroundColor: 'rgba(2,156,252,1)',
            pointRadius: 5,
            pointHoverRadius: 10,
            pointHitRadius: 30,
            pointBorderWidth: 2,
            pointStyle: 'rectRounded'
        }]
    };
    var chartOptions = {
        legend: {
            display: true,
            position: 'top',
            labels: {
                boxWidth: 5,
                fontColor: 'black'
            }
        }
    };

    var lineChart = new Chart(grafLineas, {
        type: 'line',
        data: speedData,
        options: chartOptions
    });
}