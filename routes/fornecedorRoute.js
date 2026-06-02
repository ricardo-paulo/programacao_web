const fornecedorController = require("../controller/fornecedorController")
const Router = require("express").Router
const router = Router()

router.get("/fornecedores", async (req, res) => {

    try {

        const resultado = await fornecedorController.buscar(null)
        res.status(200).send(resultado)
        
    } catch (error) {

        res.status(500).json({
            message: "Falha ao listar todos os fornecedores.",
            error: error.message
        })
        
    }

})

router.get("/fornecedor/:id", async (req, res) => {

    const { id } = req.params;

    try {

        const resultado = await fornecedorController.buscar(id)
        if (resultado.length > 0) {
            res.status(200).json(resultado[0])
        } else {
            res.status(404).json({
                message: "Fornecedor não encontrado.",
                resposta_db: resultado
            })
        }
        
    } catch (error) {

        res.status(500).json({
            message: `Falha ao obter o fornecedor de ID ${id}.`,
            error: error.message
        })
        
    }

})

router.post("/fornecedor", async (req, res) => {

    try {

        const novoFornecedor = Object.values(req.body)
        const resultado = await fornecedorController.criar(novoFornecedor)
            
        res.status(201).json({
            message: "Fornecedor cadastrado com sucesso!",
            resposta_db: resultado
        })
        
    } catch (error) {

        if (error.code === 'ER_DUP_ENTRY') {

            res.status(409).json({
                error: "Cadastro duplicado! O fornecedor inserido já existe no sistema."
            })

        } else {

            res.status(500).json({
                message: "Falha ao cadastrar um novo produto.",
                error: error.message
            })

        }
        
    }

})

router.delete("/fornecedor/:id", async (req, res) => {

    const { id } = req.params
    
    try {
        
        const resultado = await fornecedorController.deletar(id)

        if (resultado[0].affectedRows > 0) {
            
            res.status(200).json({
                message: "Fornecedor deletado com sucesso!",
                resposta_db: resultado
            })

        } else {

            res.status(404).json({
                message: "Fornecedor não encontrado!",
                resposta_db: resultado
            })

        }

    } catch (error) {
        
        res.status(500).json({
            message: `Falha ao deletar o fornecedor de ID ${id}.`,
            error: error.message
        })

    }

})

router.put("/fornecedor/:id", async (req, res) => {

    const { id } = req.params
        
    try {
        
        const dadosNovos = Object.values(req.body)
        const resultado = await fornecedorController.atualizar(id, dadosNovos)

        if (resultado[0].affectedRows > 0) {
            
            res.status(200).json({
                message: "Fornecedor atualizado com sucesso!",
                resposta_db: resultado
            })

        } else {

            res.status(404).json({
                message: "Fornecedor não encontrado!",
                resposta_db: resultado
            })

        }

    } catch (error) {
        
        res.status(500).json({
            message: `Falha ao atualizar o fornecedor de ID ${id}.`,
            resposta_db: error.message
        })

    }

})

module.exports = router