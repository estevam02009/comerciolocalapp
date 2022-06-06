// associar as depencrncias instaladas
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// inicializar app express
const app = express()

// conectar ao Banco de Dados
mongoose.connect(
    'mongodb+srv://smartcode:ArchLinux0209@cluster0.nqltf.mongodb.net/comercio?retryWrites=true&w=majority'
);

// confirmar conexão
mongoose.connection.on('connected', function() {
    console.log('Conectado ao banco de dados: ' + 'comercio');
});

// erro de conexão
mongoose.connection.on('error', (err) => {
    console.log('Erro na conexão ' + err);
});

// ++++++++++ MIDDLEWARE ++++++++++++++++++
app.use(bodyParser.json())

// end point
app.get('/', function(req, res) {
    res.send('END POINT INVÁLIDO')
})

// todo o url começado por /api chama as rotas em /routes/api
const routes = require('./routes/api')
app.use('/api', routes)

// error handling middleware
app.use(function(err, req, res, next) {
    console.log(err);
    res.status(422).send({error: err.message})
})

let port = 5000

// servidor executando na porta 5000
app.listen(process.env.port || port, () => {
    console.log('Servidor rodando na porta: ' + port);
})
