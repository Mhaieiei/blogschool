const ArticleModel = require('../model/ArticleModel');
const moment = require('moment');

module.exports = {

  createArticle: (req, res) => {
    console.log('create article');
    const data = {
      title: 'test',
      pathPic: '/test',
      detail: 'create article',
      createdDate: moment(),
      staticNum: 1, // เก็บ สถิติคนเข้าชม
    };
    return ArticleModel
      .createArticle(data)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(400).json({
          msg: 'Fail to create article',
          error: error.message,
        });
      });
  },


  findOneArticle: (req, res) => {
    const { id } = req.params;
    return ArticleModel.findOneArticle(id)
      .then((result) => {
        if (result) {
          res.status(200).json(result);
        } else {
          res.status(404).json({
            code: 404,
            description: 'Article not found',
          });
        }
      })
      .catch((error) => {
        res.status(500).json({
          code: 500,
          description: 'Fail to find Article',
          error: error.message,
        });
      });
  },

  findAllArticle: (req, res) => {
    console.log('find all article');
    const query = {};
    // start with page 0
    const { limit, page } = req.query;
    ArticleModel.findAllArticle(query, parseInt(limit, 10), parseInt(page, 10))
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        res.status(500).json({
          code: 500,
          description: 'Fail to find Article',
          error: error.message,
        });
      });
  },


};

