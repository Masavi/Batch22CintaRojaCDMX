function miFuncion(){
    console.log("Hola");
}

//miFuncion();

/* function miNuevaFuncion(n){
    console.log("Hola " + n + " tambien agrego " + p "")
} */

let miNombre = "Mauricio";
//miNuevaFuncion(miNombre);

function saludar(nombre){
    console.log(`Hola ${nombre}`);
}

//saludar("Pedro");

// SCOPE - ALCANCE
/* function suma(num1, num2){
    return num1 + num2; 
}  */
//let resultado = suma(5, 3);
//console.log(resultado);

//console.log( suma(3,4) )


/* function suma(num1, num2) {
    // Variable Local
    let resultado = num1 + num2;
    return resultado;
}

// No podemos acceder fuera de 
// la funcion a una variable local
console.log(resultado); */

// Variable Global
//let resultado = 0;

function suma(num1, num2) {
    resultado = num1 + num2;
}

/* console.log(resultado);
suma(4,7);
console.log(resultado); */

/* let funcionAnonima = function(){
    console.log("Soy una funcion anonima");
} */

let funcionAnonima = () => {
    console.log("Soy una arrow function");
}

/* funcionAnonima(); */

/* let prueba = "";

let esMayorDeEdad = (edad) => {
    if(edad >= 18){
        return "Es mayor de edad";
        prueba = "Esto va despues del return";
    } else {
        return "No es mayor de edad";
    }
} */

/* console.log(esMayorDeEdad(19));
console.log(prueba);
 */


 // Objetos
 
/*  let miArreglo = [];
 miArreglo = ["hola", "como", "estas"];
 console.log(miArreglo[0]); */

  let miObjeto = {};
  //console.log(miObjeto);

  miObjeto = {
    num1: "hola",
    tomate: 10,
    num3: true
  }

  //console.log(miObjeto.tomate);


  let animales = {
      perico: "Pedo Perico",
      perro: "Paco",
      gato: "Gustavo"
  }

  //console.log(animales.perro);

  let persona = {
      nombre: "Juan Rulfo",
      estatura: 1.67,
      peso: "102 kg",
      nacionalidad: "Mexicano",
      edad: 57,
      presentarse: function(){
          //return `Hola, mi nombre es ${this.nombre}`;    // ECMAScript6
          return 'Hola, mi nombre es ' + this.nombre;      // Javascript
      }
    }

    console.log(persona.presentarse());