const { showAll, update, create, del } = require('../controllers/crud');

const { Router } = require('express');

const router = Router();

router.get('/getall', showAll);

module.exports = router;