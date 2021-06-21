const { update } = require('../controllers/carCrud');
const { Router } = require('express');

// Middleware -> Parser para poder usar req.body en el controller 'create'.
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const router = Router();

router.put('/update', jsonParser, update);

module.exports = router;
