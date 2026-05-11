const clienteModel = require ("../models/clienteModel")

class clienteController {
    async buscarTodos () {
        return await clienteModel.listar()
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