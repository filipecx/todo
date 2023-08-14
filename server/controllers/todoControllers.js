const Todo = require('../models/Todo')

module.exports = {
    createTodo: async (req, res) => {
        try{
            await Todo.create({idUsuario: req.body.idUsuario, titulo: req.body.titulo, dia: req.body.dia, checked: 'false', id: req.body.id})
        }catch(error){
            console.log(error)
        }
    },
    
    toggleTodo: async (req, res) => {
        try{
            await Todo.findOneAndUpdate({id: req.params.id}, {checked: req.body.checked})
        }catch(error){
            console.log(error)
        }
    },
    deleteTodo: async (req, res) => {
        try{
            await Todo.findOneAndDelete({id: req.params.id})
        }catch(e){
            console.log(e)
        }
    }

    

    
}