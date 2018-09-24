const express = require('express');

const router = express.Router();

const GeniusController = require('../controller/GeniusController');

router.post('/genius', GeniusController.createGenius);
router.get('/genius', GeniusController.findAllGenius);

module.exports = router;
