// associar as depencrncias instaladas
const express = require('express')

// inicializar app express
const app = express()

// end point
app.get('/', function(req, res) {
    res.send('END POINT INVÁLIDO')
})

// todo o url começado por /api chama as rotas em /routes/api
const routes = require('./routes/api')
app.use('/api', routes)

let port = 5000

// servidor executando na porta 5000
app.listen(process.env.port || port, () => {
    console.log('Servidor rodando na porta: ' + port);
})
