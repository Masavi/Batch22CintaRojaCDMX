const request = require('request');

/* let promise = new Promise( function(resolve, reject){
    
    // Las promesas tienen tres estados:
    //  pendiente, rechazada, resuelta
    //
    resolve("Esta promesa se resolvió");
    reject("Esta promesa no se resolvió")
}); 

promise.then( function(respuesta){ console.log(respuesta) });
//promise.catch(); */


/* let promesa = new Promise( (resolve, reject) => {
    reject("No se resolvió");
});

console.log(promesa); */

/* console.log("Se van a imprimir los timeouts...");
setTimeout( function(){console.log("Pasaron dos segundos")}, 2000);
setTimeout(function () { console.log("Pasaron tres segundos") }, 3000);
console.log("Se imprimeron los timeouts :)"); */

/* console.log("Se va a ejecutar la promesa...");

let loquequieras = new Promise( (resolve, reject) => {

    setTimeout( () => {
        resolve("Se resolvio la promesa!");
    }, 3000 );
    
});

console.log(loquequieras);

console.log("Se acaba de terminar de ejecutar la promesa");

loquequieras.then( mensaje => console.log(mensaje) ); */

/* let promesa = new Promise( (resolve, reject) => {

    let numero = 6;

    if (numero % 2 == 0) {
        resolve("Sí es par");
    } else reject("No es par");

}); */




    /*  .then( function(mensaje) {
        console.log(mensaje);
    }) */

/* promesa
    .then( mensaje => console.log(mensaje) )



    .catch( mensaje => console.log(mensaje) ); */





/* let promesaSWAPI = new Promise( (resolve, reject) => {

    request.get("https://swapi.co/api/people/9999/", 
        (error, response, body) => {

        response.statusCode == 200
        ? resolve(JSON.parse(body))
        : reject("codigo de respuesta:" + response.statusCode);
    });
}); 

promesaSWAPI
    .then( json => console.log(json) )
    .catch( error => console.log(error)); */



