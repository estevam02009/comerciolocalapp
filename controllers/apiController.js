exports.test = function (req, res) {
    res.send('Olá! Teste de controller')
}

// Listar comercios e serviços de interesses
exports.details = function(req, res) {
    res.send({ type: 'GET' })
}

// adiciona um comercio ou serviço
exports.create = function(req, res) {
    res.send({ type: 'POST' })
}

// atualizar comercio local
exports.update = function(req, res) {
    res.send({ type: 'PUT' })
}

// deletar comercio ou serviço
exports.delete = function(req, res) {
    res.send({ type: 'DELETE' })
}