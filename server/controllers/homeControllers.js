const Todo = require('../models/Todo')

module.exports = {
    getSelf: async (req, res) => {
        try{
            const todos = await Todo.find()
            res.json(todos)
        }catch(e){

        }
    }
}