const { produtos } = require("./produtosController")

const catalogo = function(req, res) {
    res.render('catalogo/index', {produtos})
}


module.exports = { catalogo }