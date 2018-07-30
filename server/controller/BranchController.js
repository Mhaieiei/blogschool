const BranchModel = require('../model/BranchModel');

module.exports = {
  createBranch: (req, res) => {
    console.log('create Branch');
    const data = {
      name: 'test branch',
      pathPic: '/1/test',
      tel: '023435333',
      email: 'test@hotmail.com',
      address: {
        name: '223',
        address: 'ตึก อ อุ๊',
        subdistrict: 'พญาไท',
        district: 'พญาไท',
        province: 'กทม',
        zipcode: '10220',
      },
      promotionPathPic: ['/2/a', '/2/b'],
      workingTime: 'จันทร์ ถึง ศุกร์',
      detail: 'เรียนได้ไม่จำกัดเวลา',
    };
    return BranchModel
      .createBranch(data)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(400).json({
          msg: 'Fail to create branch',
          error: err.message,
        });
      });
  },
  findAllBranch: (req, res) => {
    console.log('find all branch');
    const query = {};
    BranchModel.findAllBranch(query)
      .then((result) => {
        console.log('result', result);
        res.send(result);
      })
      .catch(() => {
        res.status(500).json({
          code: 500,
          description: 'Fail to find Branch',
        });
      });
  },
};

