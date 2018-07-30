const InstructorSchema = require('./schema/InstructorSchema');

module.exports = {
  createInstructor: data => InstructorSchema.create(data),
  findOneInstructor: id => InstructorSchema.findById(id),
  findAllInstructor: (query, limit) =>
    InstructorSchema
      .find(query)
      .limit(limit),
};

