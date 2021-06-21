const { Router } = require('express');
const { deleteProp } = require('../controllers/propCrud');

// Middleware -> Parser para poder usar req.body en el controller 'deleteCar'.
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const router = Router();

router.delete('/delete', jsonParser, deleteProp);

module.exports = router;
