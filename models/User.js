const { Schema, model } = require('mongoose');
const thoughtsSchema = require('./Thought');

// Schema to create User model
const userSchema = new Schema(
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
      match: ,
    },
    thoughts: [thoughtsSchema],
    friends: [userSchema]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;


