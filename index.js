const express = require("express")
const app = express()
const port = 3000 

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const router = require("./routes/moduleRoute.js")
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