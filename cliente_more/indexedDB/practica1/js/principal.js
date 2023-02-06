let openRequest = indexedDB.open("valores" ,1);

let bd


openRequest.onsuccess = function(){
    console.log("Base de datos abierta con exito");

    bd = openRequest.result;

    let trns = bd.transactio("datosFormulario", "readWrite");

}
openRequest.onerror = function(){
    console.log("Base de datos abierta con ERROR")
}
openRequest.onupgradeneeded = function(evento){
    console.log("lanzado el evento upgrade needed")

        switch(evento.oldVersion) {
        case 0:
            console.log("no hay base de datos")
            break;
        case 1:
            console.log("Base de datos en version")
            break;
        default:
            console.log("version:"+evento.oldVersion)
            break;
    }
}
