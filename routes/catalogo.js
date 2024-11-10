const express = require('express');
const router = express.Router();
const { catalogo } = require('../controllers/catalogoController')

/* GET home page. */
router.get('/', catalogo);


module.exports = router;
