const criarConnection = require("../connection/connection")

class clienteModel {

    async listar () {
    
        const sql = 'SELECT * FROM clientes'

        const connection = await criarConnection()
        const [ res ] = await connection.query(sql)
        
        connection.end()

        return res

    }

    async obterUm (id) {

        const sql = 'SELECT * FROM clientes WHERE id = ?'

        const connection = await criarConnection()
        const [ res ] = await connection.execute(sql, [ id ])

        connection.end()

        return res

    }

    async criar (novoCliente) {

        const sql = 'INSERT INTO clientes (nome, email, telefone, data_de_nascimento, data_cadastro) VALUES (?, ?, ?, ?, ?)'

        const connection = await criarConnection()
        const resultado = await connection.execute(sql, novoCliente)

        connection.end()

        return resultado

    }

    async deletar (id) {

        const sql = 'DELETE FROM clientes WHERE id = ?'

        const connection = await criarConnection()
        const resultado = await connection.execute(sql, id)

        connection.end()

        return resultado

    }

    async atualizar (id, dadosNovos) {

        const sql = `
        UPDATE clientes
        SET nome = ?,
        email = ?,
        telefone = ?,
        data_de_nascimento = ?,
        data_cadastro = ?
        WHERE id = ?;
        `

        dadosNovos.push(id)
        const connection = await criarConnection()
        const resultado = await connection.execute(sql, dadosNovos)

        connection.end()

        return resultado

    }

}

module.exports = new clienteModel()