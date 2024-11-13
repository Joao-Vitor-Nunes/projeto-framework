const express = require('express');
const router = express.Router();
const { listar, visualizar, buscar } = require('../controllers/produtosController.js')

/* GET home page. */
router.get('/', listar);
router.get('/buscar', buscar)
router.get("/:id/listar", visualizar);

module.exports = router;
