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

const listar = function (req, res) {
  const nomeProduto = req.params.nome;
  res.render("produtos/listar", {
    nomeProduto: nomeProduto,
  });
};

const visualizar = function (req, res) {
  const id = req.params.id;
  res.render("produtos/visualizar", {
    id,
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
