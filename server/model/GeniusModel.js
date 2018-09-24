const GeniusSchema = require('./schema/GeniusSchema');

module.exports = {
  createGenius: data => GeniusSchema.create(data),
  findAllGenius: query =>
    GeniusSchema
      .find(query),
};

