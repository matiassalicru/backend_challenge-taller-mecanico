const { update } = require('../controllers/crud');
const { Router } = require('express');

// Middleware -> Parser para poder usar req.body en el controller 'create'.
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const router = Router();

router.put('/create', jsonParser, update);

module.exports = router;