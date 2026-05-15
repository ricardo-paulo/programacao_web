const produtoModel = require("../models/produtoModel")

class produtoController {

    async buscar (id) {

        if (id) {
            return await produtoModel.obterUm(id)
        } else {
            return await produtoModel.listar()
        }

    }

    async criar (novoProduto) {
        return await produtoModel.criar(novoProduto)
    }

    async deletar (id) {
        return await produtoModel.deletar(id)
    }

    async atualizar (id, dadosNovos) {
        return await produtoModel.atualizar(id, dadosNovos)
    }

}

module.exports = new produtoController()