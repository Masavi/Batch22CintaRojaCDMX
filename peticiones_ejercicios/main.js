/*
    Ejercicios de Peticiones a una API empleando el método GET
    Más información acerca de las peticiones http -> https://developer.mozilla.org/es/docs/Web/HTTP/Methods


    
    1.- Hacer una petición a la pokeapi y obtener cualquier pokemón y mostrar su(s) tipo(s) 
    
        https://pokeapi.co/        -> DOCUMENTACIÓN y sitio web oficial de la pokeapi
        http://pokeapi.co/api/v2/  -> URL_BASE para hacer peticiones a la API


       
    2.- Hacer una función que haga una petición a open library donde busque un libro y traiga el o los autores. 
        Ejemplo: peticionLibro(“i robot”);

        http://openlibrary.org/search.json?q=i+robot 
        URL_BASE                           QUERY PARAMETER  -> A partir del caracter "?" se manda una query "q" al servidor con contenido "i+robot"
        
        Más información acerca de los querys y params       -> https://www.youtube.com/watch?v=qv5XK91OhFo&feature=youtu.be 
                                                               (El video tiene subtítulos en español e inglés)



    3.- Hacer una petición a open library por autor y devolver la lista de libros de ese autor
        http://openlibrary.org/search.json?author=asimov
    




    4.- Devolver los asteroides que sean potencialmente peligrosos para la tierra de la semana pasada hasta hoy, empleando la API de la NASA
        https://api.nasa.gov





    5.- Hacer una petición a la swapi a un personaje para obtener sus películas.
    
        https://swapi.co/       -> DOCUMENTACIÓN y sitio web de la API de Star Wars
        https://swapi.co/api/   -> URL_BASE para hacer peticiones a la API




    6.- Traer los primeros 151 pokemones de la primera generación y devolver un objeto que contenga: 
        nombre, moves, tipos, tamaño y peso de cada pokemon.
*/



// Primero, como buenos programadores, guardamos lo que nos devuelve el "module.exports" 
// del módulo "request" en una constante "request" que usaremos a lo largo de todo este archivo.
const request = require('request');





/*
    1.- Hacer una petición a cualquier 
        pokemón y mostrar su(s) tipo(s).
*/
                                        // pedimos el pokemón #103
const URL_POKEMON = "http://pokeapi.co/api/v2/pokemon/103/";

/* request.get( URL_POKEMON, (error, response, body) => { */

    /* Para resolver este ejercicio, y otros más adelante,
       hago uso del "operador ternario"
       
       https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Conditional_Operator
       Más información de los operadores ternarios acá >╝
    */
/*     response.statusCode == 200 
    ? console.log(                          // El código de acá lo podríamos leer, 
        `Types: ` +                         // según su orden de ejecución, más o menos así:
        JSON.parse(body)                    // Obtengo un JSON al parsear el body(cuerpo) de la respuesta.
            .types                          // Accedo al atributo "types" del objeto JSON que acabo de obtener. 
            .map(type => type.type.name)    // Como "types" contiene un arreglo, puedo iterar dentro de este usando el método "map"
    )                                       // Cada iteración dentro del arreglo "types" devuelve CADA elemento del arreglo para
    : console.log(error);                   //   pasarlo a la callback function que el método "map" debe recibir como argumento. 
});         */                                 //   Aquí, cada elemento de esa iteración se pasa a la variable "type" de nuestra callback 
                                            //   function, y con la flecha gorda decimos qué debe devolver el método "map" en cada iteración.
                                            // Cada cosa que devuelva en la iteración será concatenada a nuestra cadena de texto final, la cual 
                                            // será la que imprima nuestro console.log, con el mensaje al inicio diciendo "Types: ". 



                                            
                                            
/*
    2.- Hacer una función que haga una petición 
        que busque un libro y traiga el o los autores.

    Ejemplo: peticionLibro(“i robot”)
    http://openlibrary.org/search.json?q=i+robot
*/

const URL_LIBRERIA = 'http://openlibrary.org/search.json?q=';

let peticioLibro = (titulo) => {

    let URL_FINAL = URL_LIBRERIA + titulo;      // Concatenamos el título del libro a la variable URL_LIBRERIA para guardarlo en la URL_FINAL 

    request.get( URL_FINAL, (error, response, body) => {
        if (response.statusCode == 200 ) 
        {                                         // El código de acá lo podemos leer más o menos así:
            JSON.parse(body)                      // Parseamos el body de la respuesta a un JSON
                .docs                             // Accedemos al atributo "docs" del JSON que recién parseamos   
                .map(   doc =>                    // Como el atributo "docs" es un arreglo, podemos hacer uso del método "map" sobre éste
                        doc.author_name           // "map" devuelve cada elemento de "docs". Cada elemento lo cachamos en la variable "doc".
                            .map(   author_name =>  // le decimos al primer "map" que devuelva el resultado de hacer un "map" sobre el atributo "author_name" de "doc".
                                    console.log(author_name))   // como el atributo "author_name" también es un arreglo, podemos usar "map" de nuevo acá. 
                                                                // Aquí, le mandamos cada elemento del arreglo "author_name" a la callback function dentro del map. 
                    );                                          // Esta callback recibe cada elemento del arreglo "author_name" para que, al final, el resultado de este último "map"
                                                                //    sea hacer un console.log de cada uno de estos elementos, los cuales son el nombre de cada autor.
            
        } else console.log (response.statusCode, error);
    });
}

//peticioLibro("por quien doblan las campanas");






/*
    3.- Hacer una función que haga una petición por 
        autor y devuelva la lista de sus libros 

    http://openlibrary.org/search.json?author=asimov
*/

let peticionAutor = (autor) => {

    let URL = 'http://openlibrary.org/search.json?author=' + autor;

    request.get(URL, (error, response, body) => {
        response.statusCode == 200
            ? console.log(          // Hacemos un console.log() del resultado de
                JSON.parse(body)    //   parsear el body a un JSON para 
                    .docs           //   acceder al atributo docs, que es un arreglo,   
                    .map(doc => doc.title_suggest)      // para hacer un map sobre este para 
            )                                           // agregar el valor del atributo "title_suggest" 
            : console.log(error);                       // de cada "doc". El resultado de esto es el arreglo 
    })                                                  // que se mandará al console.log del inicio.
}

// El resultado muestra en consola un arreglo que contiene los nombres de los libros; es decir contiene una LISTA de los libros.
//peticionAutor('lovecraft');









/*
    4.- Devolver los asteroides que sean potencialmente 
        peligrosos para la tierra de la semana pasada hasta hoy.

        (https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-04-16&end_date=2018-04-17&api_key=5NRaoTUZyOTmEBDXjaShiZDi7l7XhtICCEhj3z5i)
*/

const URL_NASA = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-04-16&end_date=2018-04-17&api_key=';
const API_KEY = 'a73nTGWyyibEkLxCGtuOgKMVdkyB0XkOtZdmVbCR';
let URL_NASA_FINAL = URL_NASA + API_KEY;
let asteroidesPeligrosos = [];

/* request.get( URL_NASA_FINAL, (error, response, body) => {

    if (response.statusCode == 200) {

        let asteroides = JSON.parse(body).near_earth_objects;

        // ¿Cómo iterar dentro de un objeto en javasript con objetos como miembros?
        // https://stackoverflow.com/questions/921789/how-to-loop-through-a-plain-javascript-object-with-the-objects-as-members
        Object.keys(asteroides).forEach(function (key) {

            // ¿Cómo convierto cadenas en una 'clave' de un objeto en javascript?
            // https://stackoverflow.com/questions/4841254/how-to-convert-string-as-objects-field-name-in-javascript
            asteroidesPeligrosos = asteroides[key].map( asteroide => {
                //console.log(asteroide.is_potentially_hazardous_asteroid);
                if (asteroide.is_potentially_hazardous_asteroid){
                    console.log(`${asteroide.name} ----- ES PELIGROSO PARA LA TIERRA` );
                } else console.log(`${asteroide.name} ----- no es peligroso`);
            })
        });

    } else console.log (error);

    if (asteroidesPeligrosos.length == 0) {
        return console.log("No hay peligro esta semana");
    }
});
 */






 




/*
    5.- Hacer una petición a la swapi 
        a un personaje y obtener sus películas.

        https://swapi.co/api/people/1/
*/

const URL_SWAPI = "https://swapi.co/api/people/";

let obtenerPeliculas = (arreglo) => {

    arreglo.map(endpoint => {

        request.get(endpoint, (error, response, body) => {
            response.statusCode == 200
                ? console.log(JSON.parse(body).title)
                : console.log(error)
        });
    });
}

let peliculasDePersonaje = (numeroPersonaje) => {

    URL_SWAPI_FINAL = `${URL_SWAPI}${numeroPersonaje}/`;

    request.get(URL_SWAPI_FINAL, (error, response, body) => {
        if (response.statusCode == 200) {
            let respuesta = JSON.parse(body);
            console.log(`${respuesta.name} aparece en las siguientes películas:`);
            obtenerPeliculas(respuesta.films);
        }
        else console.log(error);
    })
}

//peliculasDePersonaje(13);  // Películas donde aparece Chewbacca
















/*
    6.- Traer los primeros 151 pokemon de la primera 
        generacion y devolver un objeto con el nombre, 
        sus moves, tipos, tamaño y peso
*/
                            // Agregamos el query param "limit" con valor de 151
const URL_POKEAPI = 'http://pokeapi.co/api/v2/pokemon/?limit=3';

request.get( URL_POKEAPI, ( error, response, body) => {

    if (response.statusCode == 200)
    {
            JSON.parse(body)
                .results
                .map( 
                    pokemon => 
                    {
                        request.get( pokemon.url, (error, response, body) => {
                            
                            if (response.statusCode == 200)
                            {
                                let pokemon = JSON.parse(body);
                                console.log(pokemon);
                                // A partir de aquí accederíamos a cada atributo de pokemon, como...
                                // pokemon.name
                                // pokemon.moves
                                // pokemon.types ...

                                // Luego, tendríamos que guardar todos esos atributos de cada pokemon
                                //   dentro de un objeto. Luego, guardar cada uno de esos objetos dentro 
                                //   de un nuevo objeto que será el que mandemos como el resultado de 
                                //   efectuar esta petición.
                                // ¿Cómo podríamos agregar objetos a un objeto?

                                // OJO: La forma adecuada de hacer esto sería agregar cada objeto a un ARREGLO,
                                // no a otro nuevo objeto. Sin embargo, resolver esta situación es un buen reto ;)
                            }

                        });
                    });
    } 
    else console.log(response.statusCode, error);
}); 