const routerCliente = require("./clienteRoute")
const routerProduto = require("./produtoRoute")

module.exports = (app) => {
    app.use(routerCliente)
    app.use(routerProduto)
}


