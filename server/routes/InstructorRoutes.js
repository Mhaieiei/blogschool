const express = require('express');

const router = express.Router();

const InstructorController = require('../controller/InstructorController');

router.post('/instructor', InstructorController.createInstructor);
router.get('/instructor/:id', InstructorController.findOneInstructor);
router.get('/instructor', InstructorController.findAllInstructor);

module.exports = router;
