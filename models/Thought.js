const { Schema, model } = require('mongoose');



const userSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
    //   validation: Must be between 1 and 280 characters 

    },
    createdAt: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   match: ,
    },
    username {
        
    }, 
    reactions {

    }

  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;