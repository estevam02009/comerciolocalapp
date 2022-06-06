// importar model
const CL = require('../models/CLmodel')

exports.test = function (req, res) {
    res.send('Olá! Teste de controller')
}

// Listar comercios e serviços de interesses
exports.details = function(req, res) {
    CL.find({}).then(function (cl) {
        res.send(cl)
    })
}

// adiciona um comercio ou serviço
exports.create = function(req, res, next) {
    CL.create(req.body).then(function(cl) {
        res.send(cl)
    }).catch(next)
}

// atualizar comercio local
exports.update = function(req, res, next) {
    CL.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(function(){
            CL.findOne({_id: req.params.id}).then(function(cl) {
                res.send(cl)
            })
        }).catch(next)
}

// deletar comercio ou serviço
exports.delete = function(req, res, next) {
    CL.findByIdAndRemove({_id: req.params.id}).then(function(cl) {
        res.send(cl)
    }).catch(next)
}