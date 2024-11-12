const express = require('express');
const router = express.Router();
const { listar, visualizar, buscar } = require('../controllers/produtosController.js')

/* GET home page. */
router.get('/', listar);
router.get('/:id', visualizar)
router.get('/buscar', buscar)

module.exports = router;
