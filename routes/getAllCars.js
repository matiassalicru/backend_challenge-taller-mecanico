const { showAll } = require('../controllers/carCrud');

const { Router } = require('express');

const router = Router();

router.get('/getall', showAll);

module.exports = router;
