let openRequest = indexedDB.open("objetos", 1)
let bd;

openRequest.onsuccess = function(){

};
openRequest.onerror = function(){
    console.log("Error al acceder a la base de datos")
};
openRequest.onupgradeneeded = function(){
    let bd = openRequest.result;
    if (!bd.objectStoreNames.contains())

}