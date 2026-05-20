const routerCliente = require("./clienteRoute")
const routerProduto = require("./produtoRoute")
const routerFornecedor = require("./fornecedorRoute")

module.exports = (app) => {
    app.use(routerCliente)
    app.use(routerProduto)
    app.use(routerFornecedor)
}


