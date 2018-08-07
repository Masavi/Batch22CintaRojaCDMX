/*
---------------------------------------------
                 Herencia
---------------------------------------------
*/

/* Podemos definir una clase padre que pasará sus
   atributos y métodos a clases derivadas de ésta,
   mejor conocidas como "clases hijas".
*/
class Animal {
    constructor(nombre, peso) {
        this.nombre = nombre;
        this.peso = peso;
    }

    // Los "getters" y "setters" son métodos que, por convención,
    // siempre debemos incluir en nuestras clases. Los "getters"
    // nos permiten obtener el valor de algún atributo, y los 
    // "setters" nos permiten modificar el valor de algún atributo.

    // Getters
    getNombre() {
        return this.nombre;
    }

    getPeso() {
        return this.peso;
    }

    // Setters
    setNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }

    setNombre(nuevoPeso) {
        this.peso = nuevoPeso;
    }

    // A partir de aquí, comienzan los métodos que nosotros querramos definir (aparte de los getters y setters)
    comer(comida) {
        return "El " + this.nombre + " esta comiendo " + comida;
    }
}

/* Usamos la palabra reservada "extends" para indicar que esta
   clase Perro está heredando o "extendiendo" de la clase Animal
*/
class Perro extends Animal {
    constructor(raza, nombre, peso) {
        // En las clases que heredan, dentro del constructor se debe incluir el 
        // metodo "super", dentro de este indicamos qué atributos hereda del 
        // constructor de la clase padre. En este caso, sería "nombre" y "peso"
        super(nombre, peso)
        this.raza = raza
    }

    getRaza() {
        return this.raza
    }

    setRaza(newRaza) {
        this.raza = newRaza
    }

    correr() {
        // Esta es otra forma de mostrar mensajes, usando comillas invertidas y
        // colocando las variables que deseemos mostrar dentro de algo como esto -> ${}
        return `El perro ${this.nombre} de la raza ${this.raza} esta corriendo`;
    }

    // Las clases que heredan un método del padre pueden volver a definirlo
    // como un método nuevo dentro de su clase para modificarlo según sea conveniente
    // Esta propiedad se conoce como "POLIMORFISMO"
    comer(comida) {
        // console.log ( super.comer(comida) );                           // Podemos llamar al método original de la clase padre usando "super."
        return `Soy el perro y yo como ${comida} así: mñam ñum ñimmm`;
    }
}

// Lo mismo ocurre con la clase Pájaro; esta extiende de Animal
class Pajaro extends Animal {
    constructor(color, nombre, peso) {
        super(nombre, peso)
        this.color = color
    }

    volar() {
        return `El pajarito ${this.nombre} de color ${this.color} esta volando`;
    }
}

var pug = new Perro("Pug", "Fido", 40);
console.log(pug);

var perico = new Pajaro("Azul", "Periquito", 5);
console.log(perico);

/*
   Pug y perico son instancias de las clases Perro y Pájaro,
   las cuales, a su vez, son clases hijas de la clase Animal.

   Por lo tanto, pug y perico no solo son instancias de la
   clase Perro y Pájaro, también son instancias de la clase Animal.

   Al ser instancias de la clase Animal, poseen los atributos y 
   métodos de esta clase. Por ello podemos utilizar el método 
   "comer" en cualquier instancia que herede de la clase "Animal"
*/

console.log( perico.comer("alpistle") );
console.log( pug.comer("croquetas") );

