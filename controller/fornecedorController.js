const fornecedorModel = require("../models/fornecedorModel")

class fornecedorController {

    async buscar (id) {

        if (id) {
            return await fornecedorModel.obterUm(id)
        } else {
            return await fornecedorModel.listar()
        }

    }

    async criar (novoProduto) {
        return await fornecedorModel.criar(novoProduto)
    }

    async deletar (id) {
        return await fornecedorModel.deletar(id)
    }

    async atualizar (id, dadosNovos) {
        return await fornecedorModel.atualizar(id, dadosNovos)
    }

}

module.exports = new fornecedorController()