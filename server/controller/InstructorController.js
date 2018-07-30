const InstructorModel = require('../model/InstructorModel');


module.exports = {
  createInstructor: (req, res) => {
    const data = {
      name: 'test',
      course: 'Math',
      detail: 'Knowledge is important',
    };
    return InstructorModel
      .createInstructor(data)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(400).json({
          msg: 'Fail to create instructor',
          error: error.message,
        });
      });
  },
  findOneInstructor: (req, res) => {
    const { id } = req.params;
    return InstructorModel.findOneInstructor(id)
      .then((result) => {
        if (result) {
          res.status(200).json(result);
        } else {
          res.status(404).json({
            code: 404,
            description: 'Instructor not found',
          });
        }
      })
      .catch((error) => {
        res.status(500).json({
          code: 500,
          description: 'Fail to find Instructor',
          error: error.message,
        });
      });
  },
  findAllInstructor: (req, res) => {
    const query = {};
    const { limit } = req.query;
    InstructorModel.findAllInstructor(query, parseInt(limit, 10))
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        res.status(500).json({
          code: 500,
          description: 'Fail to find Instructor',
          error: error.message,
        });
      });
  },
};

