import mongoose, { Schema } from 'mongoose';

const branchSchema = new Schema({
  name: String,
  pathPic: String,
  tel: String,
  email: String,
  address: {
    name: String,
    address: String,
    subdistrict: String,
    district: String,
    province: String,
    zipcode: String,
  },
  promotionPathPic: [String],
  workingTime: String,
  detail: String,
});

const BranchSchema = mongoose.model('branch', branchSchema);
module.exports = BranchSchema;

