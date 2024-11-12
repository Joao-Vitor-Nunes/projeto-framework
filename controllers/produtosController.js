const listar = function(req, res) {
    const nomeProduto = req.params.nome
    res.render('produtos/listar', {
        nomeProduto: nomeProduto
    })
}

const visualizar = function(req, res) {
    const id = req.params.id
    res.render('produtos/visualizar', {
        id
    })
}

const buscar = function(req, res) {
    const produto = req.query.produto
    res.render('produtos/buscar', {
        produto
    })
}

module.exports = { listar, visualizar, buscar }
