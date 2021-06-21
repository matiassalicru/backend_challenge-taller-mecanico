const { newTransaction } = require('../controllers/propCrud');
const { Router } = require('express');

// Middleware -> Parser para poder usar req.body en el controller 'create'.
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const router = Router();

router.post('/new-transaction', jsonParser, newTransaction);

module.exports = router;
