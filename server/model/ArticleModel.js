const ArticleSchema = require('./schema/ArticleSchema');

module.exports = {
  findOneArticle: id => ArticleSchema.findById(id),
  findAllArticle: query => ArticleSchema.find(query),
};

