const { Schema, model } = require('mongoose');
const assignmentSchema = require('./Assignment');

// Schema to create User model
const studentSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,

    },
    email: {
      type: String,
      required: true,
      unique: true,
      max_length: 50,
    },
    github: {
      type: String,
      required: true,
      max_length: 50,
    },
    assignments: [assignmentSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Student = model('student', studentSchema);

module.exports = Student;


