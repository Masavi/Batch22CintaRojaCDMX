/* function triple(numero){
    return numero * 3;
} */

//console.log(triple(3));

let triple = function(numero){
    return numero * 3;
}

let variable = triple;
let final = variable;
//console.log(final(4));

// Funciones de Orden Superior
// Funciones callback

let funcionDeOrdenSuperior = function( callback ){
    console.log("Hola, soy la funcion de orden superior");
    callback();
}

let funcionCallback = function(){
    console.log("Hola, soy la funcion callback");
}

//funcionDeOrdenSuperior( funcionCallback );




let ordenSuperior = function( saludar ){
    console.log("Hola, soy la funcion de orden superior");
    saludar();
}

// Forma de ejecución No. 1: Función al vuelo
/* ordenSuperior( function(){
    console.log("quiubo todo el mundo");
    }
); */

// Forma de ejecuciín No. 2: Pasando una variable que contiene una función
let callback = function () {
    console.log("quiubo todo el mundo");
}


let miFuncion = ( callback ) => { 
    console.log("Soy la funcion de orden superior");
    callback();
}
/* 
miFuncion( () => {
    console.log("Soy la funcion callback");
}); */


// EJERCICIO
// ¿Qué hace la siguiente función?

function enviaMensaje(mensaje, callback) {
    return callback(mensaje);
}

/* enviaMensaje("Mensaje para la consola", console.log);
enviaMensaje("Mensaje para alert", alert); */


/*
    Crear una funcion de orden superior llamada saluda() 
    que reciba dos parametros, "mensaje" y "formato".
    "formato" será una función callback que imprimirá "mensaje"
    en minusculas o en mayusculas
*/

/* let saluda = (mensaje, formato) => {
    formato(mensaje);
}

let minusculas = (mensaje) => {
    console.log(mensaje.toLowerCase());
}

let mayusculas = (mensaje) =>{
    console.log(mensaje.toUpperCase());
}

saluda("HoLa A tOdOs", mayusculas); */


// Filter (Filtro)
/* 
let animales = [
    { nombre: "Heladio",    especie: "tortuga"},
    { nombre: "Jose",       especie: "tigre"},
    { nombre: "Carlos",     especie: "cuyo"},
    { nombre: "Fabiola",    especie: "tortuga" },
    { nombre: "Mauricio",   especie: "cuyo" },
    { nombre: "Rogelio",    especie: "pato" }
];

let cuyos = [];

for (let i=0; i<animales.length; i++){
    if (animales[i].especie == "cuyo"){
        cuyos.push(animales[i]);
    }
}

let esCuyo = animal => { return animal.especie == "cuyo"; }
let esTortuga = animal => {
  return animal.especie == "tortuga";
};

//cuyos = animales.filter();
let tortugas = animales.filter(esTortuga); 

console.log(tortugas); */


// Map
let animales = [
    { nombre: "Heladio", especie: "tortuga" },
    { nombre: "Jose", especie: "tigre" },
    { nombre: "Carlos", especie: "cuyo" },
    { nombre: "Fabiola", especie: "tortuga" },
    { nombre: "Mauricio", especie: "cuyo" },
    { nombre: "Rogelio", especie: "pato" }
];

let patos = [];

for (let i=0; i<animales.length; i++){
    if (animales[i].especie == "pato"){
        patos.push(animales[i].nombre);
    }
}

/* patos = animales.map( function(animal){
        return animal.nombre;
}); */

// Empleando Map y Filter...
patos = animales
            .filter( animal => animal.especie == "pato" )
            .map( animal => animal.nombre );

console.log(patos);