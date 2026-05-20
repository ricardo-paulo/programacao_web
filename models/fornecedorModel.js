const criarConnection = require("../connection/connection")

class fornecedorModel {

    async listar () {

        const sql = 'SELECT * FROM fornecedores;'

        const connection = await criarConnection()
        const [ res ] = await connection.query(sql)

        connection.end()

        return res

    }

    async obterUm (id) {

        const sql = 'SELECT * FROM fornecedores WHERE id = ?;'

        const connection = await criarConnection()
        const [ res ] = await connection.execute(sql, [ id ])

        connection.end()

        return res

    }

    async criar (novoProduto) {

        const sql = `INSERT INTO fornecedores 
        (razao_social, nome_fantasia, cnpj, email, telefone, endereco) 
        VALUES (?, ?, ?, ?, ?, ?);`

        const connection = await criarConnection()
        const resultado = await connection.execute(sql, novoProduto)

        connection.end()

        return resultado

    }

    async deletar (id) {

        const sql = 'DELETE FROM fornecedores WHERE id = ?;'

        const connection = await criarConnection()
        const resultado = await connection.execute(sql, [ id ])

        connection.end()

        return resultado

    }

    async atualizar (id, dadosNovos) {

        const sql = `
        UPDATE fornecedores
        SET razao_social = ?, 
        nome_fantasia = ?, 
        cnpj = ?, 
        email = ?, 
        telefone = ?, 
        endereco = ?
        WHERE id = ?;
        `

        dadosNovos.push(id)
        const connection = await criarConnection()
        const resultado = await connection.execute(sql, dadosNovos)

        connection.end()

        return resultado

    }

}

module.exports = new fornecedorModel()