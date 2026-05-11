const express = require("express")
const app = express()
const port = 3000 

app.use(express.json())

const router = require("./routes/moduleRotule.js")
const criarConexao = require("./connection/connection.js")
const table = require("./connection/tables.js")

table.init(criarConexao)
router(app)

app.listen(port, (error) => {
    if(error) {
        console.error(error)
        return
    }
    else{
        console.log("servidor rodando na porta: " + port) 
    }
})