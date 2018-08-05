import mongoose, { Schema } from 'mongoose';

const aboutUsSchema = new Schema({
  about: String, // เกี่ยวกับเรา
  history: String, // ประวัติโรงเรียน
  competition: String, // ข้อมูลการสอบเเข่งขัน
  vision: String, // วิสัยทัศน์
});

const AboutUsSchema = mongoose.model('aboutus', aboutUsSchema);
module.exports = AboutUsSchema;

