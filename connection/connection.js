const mysql = require ("mysql2/promise")
require('dotenv').config({ quiet: true })

const criarConnection = () => {

    return mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT
    })

}
    

module.exports = criarConnection
