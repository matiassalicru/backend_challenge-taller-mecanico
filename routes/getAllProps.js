const { showAll } = require('../controllers/propCrud');

const { Router } = require('express');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const router = Router();

router.get('/getall', jsonParser, showAll);

module.exports = router;
