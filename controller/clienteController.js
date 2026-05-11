const clienteModel = require ("../models/clienteModel")

class clienteController {
    async buscarTodos () {
        return await clienteModel.listar()
    }

    async criar (novoCliente) {
        return await clienteModel.criar(novoCliente)
    }

    async alterar () {
        return "alterando o cliente com o código" + id + "com"
    }

    async deletar (id) {
        return await clienteModel.deletar(id)
    }
}

module.exports = new clienteController()