const express = require('express');
const router = express.Router();
const { listar, visualizar } = require('../controllers/produtosController.js')

/* GET home page. */
router.get('/', listar);
router.get('/:id', visualizar)
router.get('/busca', visualizar)

module.exports = router;
