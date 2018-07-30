import mongoose, { Schema } from 'mongoose';

const instructorSchema = new Schema({
  name: String,
  course: String,
  detail: String,
});

const InstructorSchema = mongoose.model('instructor', instructorSchema);
module.exports = InstructorSchema;

