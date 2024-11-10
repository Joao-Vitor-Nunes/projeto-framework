const { redirect } = require("express/lib/response")

const login = function(req, res) {
    res.render('login/index', {
        title: "Teste"
    })
}

const validarUsuario = function(req, res) {
    if (req.body.usuario == 'choque' && req.body.senha == '123') {
    res.redirect('/')
}   else {
    res.status(500).send({ error: 'Usuário não existe'})
    }
}

module.exports = { login, validarUsuario }