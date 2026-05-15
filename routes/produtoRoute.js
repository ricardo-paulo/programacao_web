const produtoController = require("../controller/produtoController")
const Router = require("express").Router
const router = Router()

router.get("/produtos", async (req, res) => {

    try {

        const resultado = await produtoController.buscar(null)
        res.status(200).send(resultado)
        
    } catch (error) {

        res.status(500).json({
            message: "Falha ao listar todos os produtos.",
            error: error.message
        })
        
    }

})

router.get("/produto/:id", async (req, res) => {

    const { id } = req.params;

    try {

        const resultado = await produtoController.buscar(id)
        if (resultado.length > 0) {
            res.status(200).json(resultado[0])
        } else {
            res.status(404).json({
                message: "Produto não encontrado.",
                resposta_db: resultado
            })
        }
        
    } catch (error) {

        res.status(500).json({
            message: `Falha ao obter o produto de ID ${id}.`,
            error: error.message
        })
        
    }

})

router.post("/produtos", async (req, res) => {

    try {

        const novoProduto = Object.values(req.body)
        const resultado = await produtoController.criar(novoProduto)
            
        res.status(201).json({
            message: "Produto cadastrado com sucesso!",
            resposta_db: resultado
        })
        
    } catch (error) {

        if (error.code === 'ER_DUP_ENTRY') {

            res.status(409).json({
                error: "Cadastro duplicado! O código de produto inserido já existe no sistema."
            })

        } else {

            res.status(500).json({
                message: "Falha ao cadastrar um novo produto.",
                error: error.message
            })

        }
        
    }

})

router.delete("/produto/:id", async (req, res) => {

    const { id } = req.params
    
    try {
        
        const resultado = await produtoController.deletar(id)

        if (resultado[0].affectedRows > 0) {
            
            res.status(200).json({
                message: "Produto deletado com sucesso!",
                resposta_db: resultado
            })

        } else {

            res.status(404).json({
                message: "Produto não encontrado!",
                resposta_db: resultado
            })

        }

    } catch (error) {
        
        res.status(500).json({
            message: `Falha ao deletar o produto de ID ${id}.`,
            error: error.message
        })

    }

})

router.put("/produto/:id", async (req, res) => {

    const { id } = req.params
        
    try {
        
        const dadosNovos = Object.values(req.body)
        const resultado = await produtoController.atualizar(id, dadosNovos)

        if (resultado[0].affectedRows > 0) {
            
            res.status(200).json({
                message: "Produto atualizado com sucesso!",
                resposta_db: resultado
            })

        } else {

            res.status(404).json({
                message: "Produto não encontrado!",
                resposta_db: resultado
            })

        }

    } catch (error) {
        
        res.status(500).json({
            message: `Falha ao atualizar o produto de ID ${id}.`,
            resposta_db: error.message
        })

    }

})

module.exports = router