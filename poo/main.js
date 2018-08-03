/* let miObjeto = {
    texto: "Hola",
    numero: 20,
    booleano: true,
    arreglo: [1,2,3],
    objeto: {perro: "Fido"},
    funcion: function(){
        return "Soy una funcion";
    }
}; 

console.log(miObjeto);
console.log(miObjeto.funcion()); */

// Paradigma Estructurado
let sueldo_base = 5000;
let tarifa = 200;
let horas_extra = 4;

function calcularSueldo(sueldo, horas, tarifa){
    return sueldo + (horas * tarifa);
}

/* let resultado = calcularSueldo(sueldo_base, horas_extra, tarifa);
console.log(resultado);
 */
// Paradigma Orientado a Objetos
let empleado = {
    sueldo_base: 5000,
    tarifa: 200,
    horas_extra: 4,
    calcularSueldo: function(){
        return this.sueldo_base + (this.horas_extra * this.tarifa)
    }
}

//console.log(empleado.calcularSueldo());


// CLASES 
class Perro {
    constructor(nombre, raza, edad){
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
    }
    
    ladrar(){
        return "wooof woof woooof!!!";
    }

    comer(comida){
        return `${this.nombre} está comiendo ${comida}`
    }
}

/* let ayudanteDeSanta = new Perro("Ayudante de Santa", "Galgo", 7);
console.log(ayudanteDeSanta.comer("croquetas")); */
/* 
let fido = new Perro("Fido", "Salchicha", 3);
console.log(fido.comer("croquetas")); */

/*  EJERCICIO

    Haz una clase llamada Persona que siga las siguientes condiciones:
    Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
    calcularIMC()
    esMayorDeEdad()
    El constructor pide nombre, edad, sexo, peso y altura
    Generar el RFC a partir de el nombre, edad y sexo en un metodo
    llamado "calcularRFC"
*/

class Persona {
    constructor(nombre, edad, sexo, peso, altura){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
        return (this.peso / (this.altura*this.altura))
    }

    esMayorDeEdad(){
        if (this.edad < 18){
            return "Es menor de edad";
        } else return "Es mayor de edad";
    }

    calcularRFC(){
        this.rfc =  this.nombre + this.edad + this.sexo;
    }
}

let mauricio = new Persona("Mauricio", 22, "H", 70, 1.70);
//console.log(mauricio.calcularIMC().toFixed(3));
console.log(mauricio.rfc);
mauricio.calcularRFC();
console.log(mauricio.rfc);

/*
    EJERCICIO

	Crear una clase Cuenta que tenga los siguientes atributos y metodos:
	Titular y cantidad
	ingresar(cantidad)
	retirar(cantidad)
	Hacer las validaciones previas
	Como regla de negocio no debe de tener más de $900 y menos de $10
*/

class Cuenta {
    constructor(titular, cantidad) {
        this.titular = titular
        this.cantidad = cantidad
    }

    ingresar(cantidad) {
        if (this.cantidad + cantidad > 900) {
            return "Estas superando el limite de $900; operacion cancelada";
        } else {
            this.cantidad += cantidad;
            return "Operacion exitosa: Tu saldo es de " + this.cantidad;
        }
    }

    retirar(cantidad) {
        if (this.cantidad - cantidad < 10) {
            return "No tienes fondos suficientes; el minimo es de $10";
        } else {
            this.cantidad -= cantidad;
            return "Has retirado $" + cantidad + ". Tu nuevo saldo es de: " + this.cantidad;
        }

    }
}

let cuenta = new Cuenta("Mauricio Saavedra", 350);

console.log(cuenta.cantidad);

console.log(cuenta.retirar(400));
console.log(cuenta.ingresar(1000));

console.log(cuenta.retirar(50));
console.log(cuenta.ingresar(100));