let urlDatos
let jsonResponse

function principal(){

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
  divsDias();
}

divsDias(){
    
}