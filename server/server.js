const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = 3000

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

require('dotenv').config({path: './config/.env'})

app.listen(PORT, () => {
    console.log(`O servidor está online na porta ${PORT}`)
})