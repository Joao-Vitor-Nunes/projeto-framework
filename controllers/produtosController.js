const { faker } = require("@faker-js/faker");

const produtos = [];

Array.from({ length: 20 }).forEach((_, index) => {
  produtos.push({
    id: index,
    titulo: faker.book.title(),
    autor: faker.book.author(),
    genero: faker.book.genre(),
  });
});

const listar =  (req, res) => {
  return res.render("produtos/listar", { produtos });
};

const visualizar = function (req, res) {
  const id = req.params.id;
  const produto = produtos.filter((produto) => produto.id == id)

  res.render("produtos/visualizar", {
    produto:produto[0],
  });
};

const buscar = function (req, res) {
  const titulo = req.query.titulo;
  const produtosFiltrados = produtos.filter((produto) => produto.titulo.toLowerCase().includes(titulo.toLowerCase()));
  res.render("produtos/buscar", {
    produtosFiltrados,
  });
};




module.exports = { listar, visualizar, buscar, produtos };
