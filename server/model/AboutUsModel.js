const AboutUsSchema = require('./schema/AboutUsSchema');

module.exports = {
  createAboutUs: data => AboutUsSchema.create(data),
  findOneAndUpdate: (query, data) => AboutUsSchema.findOneAndUpdate(query, data),
  getDetailAboutUs: query => AboutUsSchema.findOne(query),
};

