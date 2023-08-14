const Todo = require('../models/Todo')

module.exports = {
    getSelf: async (req, res) => {
        try{
            const date = new Date()
            const dia = date.getDay()
            const todos = await Todo.find({dia: `${dia}`})
            res.json(todos)
        }catch(e){

        }
    }
}