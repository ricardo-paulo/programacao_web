//  AQUIVO ONDE EXPORTA TODAS AS ROTAS CRIADAS

const routerCliente = require("./clienteRoute")

module.exports = (app) => {
    app.use(routerCliente)    
}


