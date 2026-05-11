const clienteModel = require ("../models/clienteModel")

class clienteController {
    async buscar (id) {

        if (id) {
            return await clienteModel.obterUm(id)
        } else {
            return await clienteModel.listar()
        }

    }

    async criar (novoCliente) {
        return await clienteModel.criar(novoCliente)
    }

    async atualizar (id, dadosNovos) {
        return await clienteModel.atualizar(id, dadosNovos)
    }

    async deletar (id) {
        return await clienteModel.deletar(id)
    }
}

module.exports = new clienteController()