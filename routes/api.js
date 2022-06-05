const express = require('express')
const router = express.Router()

// importar controller 'apiController.js'
const apiController = require('../controllers/apiController')

// URL de teste 'http://localhost:5000/api/teste
router.get('/teste', apiController.test)

module.exports = router