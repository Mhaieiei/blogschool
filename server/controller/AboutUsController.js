const AboutUsModel = require('../model/AboutUsModel');

module.exports = {

  createAboutUs: (req, res) => {
    console.log('create about us');
    const data = {
      about: 'this is old school',
      history: 'this is match school',
      competition: 'math annop',
      vision: 'test',
    };
    return AboutUsModel
      .createAboutUs(data)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        console.log('err', error);
        res.status(400).json({
          msg: 'Fail to create AboutUs',
          error: error.message,
        });
      });
  },

  findOneAndUpdate: (req, res) => {
    console.log('edit aboutus detail');
    const query = {};
    const data = {
      about: 'this is old school eiei',
      history: 'this is match school',
      competition: 'math annop',
      vision: 'test',
    };
    return AboutUsModel
      .findOneAndUpdate(query, data)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        console.log('err', error);
        res.status(400).json({
          msg: 'Fail to create AboutUs',
          error: error.message,
        });
      });
  },


  getDetailAboutUs: (req, res) => {
    const query = {};
    return AboutUsModel.getDetailAboutUs(query)
      .then((result) => {
        if (result) {
          res.status(200).json(result);
        } else {
          res.status(404).json({
            code: 404,
            description: 'Aboutus not found',
          });
        }
      })
      .catch((error) => {
        res.status(500).json({
          code: 500,
          description: 'Fail to find AboutUs',
          error: error.message,
        });
      });
  },


};

