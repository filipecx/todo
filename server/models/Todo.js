mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Todo', TodoSchema)