const { produtos } = require("./produtosController")

const home = function(req, res) {
    res.render('home/index', {
        produtos
    })
}



module.exports = { home }
