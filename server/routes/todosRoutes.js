const express = require('express')
const router = express.Router()

const todoControllers = require('../controllers/todoControllers')

router.post('/createTodo', todoControllers.createTodo)
router.put('/updateTodo/:id', todoControllers.toggleTodo)
router.delete('/deleteTodo/:id', todoControllers.deleteTodo)

module.exports = router