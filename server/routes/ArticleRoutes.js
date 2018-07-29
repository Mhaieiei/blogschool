const express = require('express');

const router = express.Router();

const ArticleController = require('../controller/ArticleController');

router.post('/article', ArticleController.createArticle);
router.get('/article/:id', ArticleController.findOneArticle);
router.get('/article', ArticleController.findAllArticle);

module.exports = router;
