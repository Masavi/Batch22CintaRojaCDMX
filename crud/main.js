// CRUD de Goodreads
const request = require('request')
const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/'


// Create
function createAuthor(nombre, apellidos, nacionalidad, biografia, genero, edad) {
    const URI = 'authors/'
    var urlFinal = URL_BASE + URI

    var jsonSend = {
        "name": nombre,
        "last_name": apellidos,
        "nacionalidad": nacionalidad,
        "biography": biografia,
        "gender": genero,
        "age": edad
    }

    return new Promise((resolve, reject) => {
        request.post({ url: urlFinal, form: jsonSend }, (err, response, body) => {
            let json = JSON.parse(body)
            response.statusCode == 201
                ? resolve(json)
                : reject('Error al crear un nuevo autor')
        })
    })
}

// Read
function readAuthor(id) {
    const URI = `authors/${id}/`;
    var urlendpoint2 = URL_BASE + URI;
    return new Promise((resolve, reject) => {
        request.get(urlendpoint2, (error, response, body) => {
            response.statusCode == 200
                ? resolve(JSON.parse(body))
                : reject("Error en GET")
        });
    });
}

// Update
function updateAuthor(id, name, last_name, nacionalidad, biography, gender, age) {
    const URI = `authors/${id}/`;
    var urlendpoint2 = URL_BASE + URI;
    var jsonUpdate = {
        "name": name,
        "last_name": last_name,
        "nacionalidad": nacionalidad,
        "biography": biography,
        "gender": gender,
        "age": age
    }
    return new Promise((resolve, reject) => {
        request.put({ url: urlendpoint2, form: jsonUpdate }, (error, response, body) => {
            response.statusCode == 200
                ? resolve(JSON.parse(body))
                : reject("Error en update")
        });
    });
}

// Delete
function deleteAuthor(id) {
    const URI = `authors/${id}/`;
    var urlendpoint3 = URL_BASE + URI;
    return new Promise((resolve, reject) => {
        request.delete(urlendpoint3, (error, response, body) => {
            response.statusCode == 204
                ? resolve("El autor se eliminó exitosamente")
                : reject("Error en DELETE");
        });
    });
}

// Ejecutar promesa para eliminar un autor por ID
/* eliminarAuthor(1158)
     .then(autor=>console.log(autor))
     .catch(error =>console.log(error)) */

// Obtener un autor y modificarlo en la misma promesa
/* readAuthor(1144)
    .then( 
        json => {
            console.log(json);
            updateAuthor(
                "20000", 
                "mollyUpdate", 
                "loquitaUpdate",  
                "MX", 
                "le gustan las chelas y los tacos", 
                "F", 
                "3" 
            ).then( jsonActualizado => console.log(jsonActualizado) )
             //.catch ( error => console.log(error)) 
        }
    )
    .catch( error => console.log(error)); */

