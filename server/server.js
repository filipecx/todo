const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const connectDB = require('./config/db')

const mainRoutes = require('./routes/mainRoutes')
const todosRoutes = require('./routes/todosRoutes')

require('dotenv').config({path: './config/.env'})
const PORT = 3000
//conectar ao banco de dados(mongoDB)
connectDB()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use(express.static("public"));

app.use('/', mainRoutes)
app.use('/todo', todosRoutes)


mongoose.connection.once('open', () => {
    app.listen(PORT, () => {
        console.log(`O servidor está online na porta ${PORT}`)
    })
})
