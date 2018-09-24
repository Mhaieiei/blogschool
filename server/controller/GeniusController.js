const GeniusModel = require('../model/GeniusModel');

module.exports = {
  createGenius: (req, res) => {
    console.log('create Genius');
    const data = {
      name: 'passakun',
      surname: 'siri',
      course: 'Mathematics',
      pathPic: '/test/path',
      detail: '',
      school: 'TUN',
      grade: '3.5',
    };
    return GeniusModel
      .createGenius(data)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(400).json({
          msg: 'Fail to create Genius',
          error: error.message,
        });
      });
  },
  findAllGenius: (req, res) => {
    console.log('find all Genius');
    const query = {};
    GeniusModel.findAllGenius(query)
      .then((result) => {
        console.log('result', result);
        res.send(result);
      })
      .catch((error) => {
        res.status(500).json({
          code: 500,
          description: 'Fail to find Genius',
          error: error.message,
        });
      });
  },
};

