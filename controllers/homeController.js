const home = function(req, res) {
    res.render('home/index', {
        title: "Choque"
    })
}



module.exports = { home }
