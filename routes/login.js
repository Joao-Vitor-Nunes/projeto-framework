const express = require('express');
const router = express.Router();
const { login, validarUsuario } = require('../controllers/loginController')

/* GET home page. */
router.get('/', login);
router.post('/validar-usuario', validarUsuario);

module.exports = router;
