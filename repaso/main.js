// Variables
var saludo;

// Declaración de Variable
let loqueyoquiera;
// Asignación de variable
loqueyoquiera = 1;

let numero = 10; //Numeros
let caracter = "c"; //Caracter
let cadena = "hola que tal todo mundo"; //Cadenas de caracteres
let booleano = false;   // Booleanos

// Podemos mostrar en consola lo que deseemos utilizando "console.log()"

//console.log(numero);

// Estucturas de control

// CONDICIONAL IF-ELSE
//let edad = 30;

/* if ( edad >= 18 ){
    console.log("Eres legal");
} else {
    console.log("No eres legal :'( ")
}

if ( edad >= 60 ){
    console.log("Eres de la tercera edad");
} else {
    console.log("tas chavo, chavo");
} */

/* if (fruta == "manzana"){
    console.log("Es una ", fruta);
} else if (fruta == "pera") {
    console.log("Es una ", fruta);
} else if (fruta == "platano") {
    console.log("Es una ", fruta);
}
 */
// SWITCH
/* var fruta = "llanta";
    fruta = "manzana";

switch (fruta) {
    case "manzana":
        console.log("Es " + fruta);
        break;
    
    case "pera":
        console.log("Es " + fruta);
        break;

    case "platano":
        console.log("Es " + fruta);
        break;

    default:
        console.log("No conozco esa fruta :(")
} */

/* var edad = 16;
var sexo = "H";

if (edad >= 18 || sexo == "F"){
    console.log("Alguna condicion se cumplio");
} else console.log("Ninguna se cumplio");  */


// CICLOS FOR 
/* for (var i=1; i <= 100; i++){
    if (i % 2 == 0){
        console.log(i);
    }
} */


// ARREGLOS 
var arreglo = [];
//console.log( typeof(arreglo) );
/* arreglo=[10,"hola",true];
console.log(arreglo); */

arreglo = [
    "hola",
    "como",
    "estas",
    "mi",
    "nombre",
    "es",
    "mauricio",
    "saavedra"
];

//console.log(arreglo[2]);

/* for (var i=0; i<arreglo.length; i++){
    console.log(arreglo[i])
} */

/* var numeros = [];

for (var i=1; i <= 10; i++){
    numeros.push(i);
}

console.log(numeros); */


/* EJERCICIO

a partir de una cadena de texto, por ejemplo:

var texto = "cadenita";

muestren en consola esa cadena de texto pero convirtiendo 
los caracteres en una sucesion de minusculas y mayusculas, es decir:

resultado -> "cAdEnItA"; */