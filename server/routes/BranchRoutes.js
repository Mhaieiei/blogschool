const express = require('express');

const router = express.Router();

const BranchController = require('../controller/BranchController');

router.post('/branch', BranchController.createBranch);
router.get('/branch', BranchController.findAllBranch);

module.exports = router;
