const express = require('express');

const router = express.Router();

const AboutUsController = require('../controller/AboutUsController');

router.post('/aboutus', AboutUsController.createAboutUs);
router.put('/aboutUs', AboutUsController.findOneAndUpdate);
router.get('/aboutus', AboutUsController.getDetailAboutUs);


module.exports = router;
