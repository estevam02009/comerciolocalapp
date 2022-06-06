const express = require('express')
const router = express.Router()

// importar controller 'apiController.js'
const apiController = require('../controllers/apiController')

// URL de teste 'http://localhost:5000/api/teste
router.get('/teste', apiController.test)

// listar comercios e serviços
router.get('/details', apiController.details)

// adicionar comercio ou serviços
router.post('/interest', apiController.create)

// atualizar comerdio ou serviços
router.put('/interest/:id', apiController.update)

// deletar comercio ou serviços
router.delete('/interest/:id', apiController.delete)

module.exports = router