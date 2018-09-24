import mongoose, { Schema } from 'mongoose';

const geniusSchema = new Schema({
  name: String,
  surname: String,
  course: String,
  pathPic: String,
  detail: String,
  school: String,
  grade: String,
});

const GeniusSchema = mongoose.model('genius', geniusSchema);
module.exports = GeniusSchema;

