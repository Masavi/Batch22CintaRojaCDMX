const mongoose = require('mongoose');
let url = 'mongodb://GerardoArjona:1q2w3e4r5t6y@ds121262.mlab.com:21262/prueba';

mongoose.connect(url);

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

const programaSchema = new Schema({
    programa:ObjectId,
    descripcion:String,
    duracion: String
});

const alumnoSchema = new Schema({
    alumno:ObjectId,
    nombre:String,
    apellidos:String,
    edad:Number,
    programa:{
        type: Schema.ObjectId,
        ref:'Programa'
    }
});

var Alumno = mongoose.model('Alumno', alumnoSchema);
var Programa = mongoose.model('Programa', programaSchema);

module.exports = {Alumno, Programa}
