const mongoose = require('mongoose')
require('dotenv').config()//por algum motivo o .env geral não tá funcionando, e tive que puxar localmente


const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.DB_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`Conectado ao banco de dados: ${conn.connection.host}`);
    }catch(error){
        console.log(error)
    }
}

module.exports = connectDB