const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

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
      match: [/.+@.+\..+/, 'Please fill a valid email address.'],
    },
    thoughts: [
      {
      type: Schema.Types.ObjectId,
      ref: thoughtSchema,
      },
    ],  
    friends: [
      {
        type: Schema.Types.ObjectId,
        // ref: userSchema,
        ref: 'user'
      },
    ],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

// create virtuals
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

//create User model
const User = model('user', userSchema);

User.find()
  .exec()
  .then(async collection => {
    // if (collection.length === 0) {
      const results = await User.insertMany(
        [
          { username: 'Sally',
            email: "sally@uofu.com",
            thoughts: [],
            friends: [] 
           },
           { username: 'Matt',
            email: "matt@uofu.com",
            thoughts: [],
            friends: [] 
           },
           { username: 'Owen',
            email: "owen@uofu.com",
            thoughts: [],
            friends: [] 
           },
        ]
      );
      return console.log('Users inserted', results);
    //}
   // return console.log('Already populated');
  })
  .catch(err => handleError(err));

module.exports = User;