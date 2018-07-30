const ArticleSchema = require('./schema/ArticleSchema');

module.exports = {
  createArticle: data => ArticleSchema.create(data),
  findOneArticle: id => ArticleSchema.findById(id),
  findAllArticle: (query, limit, page) =>
    ArticleSchema
      .find(query)
      .limit(limit)
      .skip(limit * page)
      .sort({ createdDate: 'desc' }),
};

