mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    idUsuario: {
        type: String,
    },
    titulo: {
        type: String,
    },
    dia:{
        type: String,
    },
    checked:{
        type: String,
    },
    id:{
        type: String
    }
})

module.exports = mongoose.model('TodoNetwork', TodoSchema, 'Todo')