const clienteController = require("../controller/clienteController")

const Router = require ("express").Router
const router = Router()

router.get("/clientes" , async (req, res) => {
    res.send(await clienteController.buscarTodos())
})

router.post("/clientes" , async (req, res) => {

    try {
        
        const novoCliente = Object.values(req.body)
    
        res.status(201).json({
            message: "Usuário criado com sucesso!",
            resposta_db: await clienteController.criar(novoCliente)
        })

    } catch (error) {
        
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({
                error: "Cadastro duplicado! O email inserido já existe no sistema."
            })
        }

    }
})

router.put("/cliente/:id" , (req, res) => {
    const { id } = req.params
    res.send(`Cliente atualizado com sucesso! ${id}`)
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