const BranchSchema = require('./schema/BranchSchema');

module.exports = {
  createBranch: data => BranchSchema.create(data),
  findAllBranch: query =>
    BranchSchema
      .find(query),
};

