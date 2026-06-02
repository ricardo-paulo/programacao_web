const clienteController = require("../controller/clienteController")

const Router = require ("express").Router
const router = Router()

router.get("/clientes" , async (req, res) => {
    
    try {
    
        const resultado = await clienteController.buscar(null)
        res.status(200).send(resultado)
        
    } catch (error) {
        
        res.status(500).json({
            message: "Falha ao listar todos os usuários.",
            error: error.message
        })

    }

})

router.get("/cliente/:id", async (req, res) => {

    const { id } = req.params

    try {

        const resultado = await clienteController.buscar(id)
        if (resultado.length > 0) {
            res.status(200).send(resultado[0])
        } else {
            res.status(404).json({
                message: "Usuário não encontrado.",
                resposta_db: resultado
            })
        }
        
    } catch (error) {
        
        res.status(500).json({
            message: "Falha ao obter usuário.",
            error: error.message
        })

    }

})

router.post("/cliente" , async (req, res) => {

    try {
        
        const novoCliente = Object.values(req.body)
        const resultado = await clienteController.criar(novoCliente)
    
        res.status(201).json({
            message: "Usuário criado com sucesso!",
            resposta_db: resultado
        })

    } catch (error) {
        
        if (error.code === 'ER_DUP_ENTRY') {

            res.status(409).json({
                error: "Cadastro duplicado! O email inserido já existe no sistema."
            })

        } else {

            res.status(500).json({
                message: "Falha ao criar um novo usuário.",
                error: error.message
            })

        }

    }
})

router.put("/cliente/:id" , async (req, res) => {
    const { id } = req.params
    
    try {
        
        const dadosNovos = Object.values(req.body)
        const resultado = await clienteController.atualizar(id, dadosNovos)

        if (resultado[0].affectedRows > 0) {
            
            res.status(200).json({
                message: "Usuário atualizado com sucesso!",
                resposta_db: resultado
            })

        } else {

            res.status(404).json({
                message: "Usuário não encontrado!",
                resposta_db: resultado
            })

        }

    } catch (error) {
        
        res.status(500).json({
            message: "Falha ao atualizar o usuário.",
            resposta_db: error.message
        })

    }

})

router.delete("/cliente/:id" , async (req, res) => {
    const { id } = req.params

    try {
        
        const resultado = await clienteController.deletar(id)

        if (resultado[0].affectedRows > 0) {
            
            res.status(200).json({
                message: "Usuário deletado com sucesso!",
                resposta_db: resultado
            })

        } else {

            res.status(404).json({
                message: "Usuário não encontrado!",
                resposta_db: resultado
            })

        }

    } catch (error) {
        
        res.status(500).json({
            message: "Falha ao deletar o usuário.",
            error: error.message
        })

    }
})

module.exports = router