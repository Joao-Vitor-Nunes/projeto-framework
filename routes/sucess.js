const express = require('express');
const router = express.Router();
const { sucess } = require('../controllers/sucessController')

/* GET home page. */
router.get('/', sucess);

module.exports = router;
