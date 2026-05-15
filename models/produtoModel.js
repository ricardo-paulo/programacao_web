const criarConnection = require("../connection/connection")

class produtoModel {

    async listar () {

        const sql = 'SELECT * FROM produtos;'

        const connection = await criarConnection()
        const [ res ] = await connection.query(sql)

        connection.end()

        return res

    }

    async obterUm (id) {

        const sql = 'SELECT * FROM produtos WHERE id = ?;'

        const connection = await criarConnection()
        const [ res ] = await connection.execute(sql, [ id ])

        connection.end()

        return res

    }

    async criar (novoProduto) {

        const sql = 'INSERT INTO produtos (nome, codigo, categoria, valor) VALUES (?, ?, ?, ?);'

        const connection = await criarConnection()
        const resultado = await connection.execute(sql, novoProduto)

        connection.end()

        return resultado

    }

    async deletar (id) {

        const sql = 'DELETE FROM produtos WHERE id = ?;'

        const connection = await criarConnection()
        const resultado = await connection.execute(sql, [ id ])

        connection.end()

        return resultado

    }

    async atualizar (id, dadosNovos) {

        const sql = `
        UPDATE produtos
        SET nome = ?,
        codigo = ?,
        categoria = ?,
        valor = ?
        WHERE id = ?;
        `

        dadosNovos.push(id)
        const connection = await criarConnection()
        const resultado = await connection.execute(sql, dadosNovos)

        connection.end()

        return resultado

    }

}

module.exports = new produtoModel()