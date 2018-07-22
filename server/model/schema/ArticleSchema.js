import mongoose, { Schema } from 'mongoose';

const articleSchema = new Schema({
  title: String,
  pathPic: String,
  detail: String,
  createdDate: Date,
  staticNum: Number, // เก็บ สถิติคนเข้าชม
});

const ArticleSchema = mongoose.model('article', articleSchema);
module.exports = ArticleSchema;

