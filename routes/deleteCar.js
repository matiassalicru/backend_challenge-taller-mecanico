const { deleteCar } = require('../controllers/crud');
const { Router } = require('express');

// Middleware -> Parser para poder usar req.body en el controller 'deleteCar'.
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const router = Router();

router.delete('/delete', jsonParser, deleteCar);

module.exports = router;
