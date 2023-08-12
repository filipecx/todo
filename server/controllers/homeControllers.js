const Todo = require('../models/Todo')

module.exports = {
    getSelf: async (req, res) => {
        try{
            const todos = Todo.find()
            console.log(todos)
        }catch(e){

        }
    }
}