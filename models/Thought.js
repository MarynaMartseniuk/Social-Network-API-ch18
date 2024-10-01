const { Schema, model } = require('mongoose');

// Schema to create Reaction model - subdocument
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId() 
    },
    reactionBody: {
      type: String,
      required: true,
      minlength: 1, 
      maxlength: 280 
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date, 
      default: Date.now,
      get: function() {
        return this.formatDate(this.createdAt);
      }
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// Schema to create Thought model 
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1, 
      maxlength: 280 
    },
    createdAt: {
      type: Date, 
      default: Date.now,
      get: function() {
        return this.formatDate(this.createdAt);
      }
    },
    username: {
      type: String,
      required: true,
    }, 
    reactions: [
      reactionSchema
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

// Helper method to format date for reactionSchema
reactionSchema.methods.formatDate = function(date) {
  return date.toLocaleString(
    'en-US', 
    { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }
  ); 
};

// Helper method to format date for thoughtSchema
thoughtSchema.methods.formatDate = function(date) {
  return date.toLocaleString(
    'en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
    // hour: '2-digit', 
    // minute: '2-digit' 
    }
  ); 
};

// create virtuals
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

//create Thought model
const Thought = model('thought', thoughtSchema);

// User seeds. Got seeded if DB is emplty.
Thought.find()
  .exec()
  .then(async collection => {
    if (collection.length === 0) {
      const results = await Thought.insertMany(
        [
          { thoughtText: 'Follow the white rabbit',
            username: 'Matt',
            reactions: [
              // {
              //   reactionBody: 'like it!',
              //   username: 'Owen'
              // },
              // {
              //   reactionBody: 'What do you mean?',
              //   username: 'Sally'
              // },
            ] 
           },
           { thoughtText: 'Matrix is cool!',
            username: 'Owen',
            reactions: [
              // {
              //   reactionBody: 'agree!',
              //   username: 'Matt'
              // },
              // {
              //   reactionBody: 'I still can not get you, gyus :(',
              //   username: 'Sally'
              // },
            ] 
           },
           { thoughtText: 'I can code!!!',
            username: 'Matt',
            reactions: [
              // {
              //   reactionBody: 'Geate!',
              //   username: 'Owen'
              // },
              // {
              //   reactionBody: 'Congrats!!! :)))))',
              //   username: 'Sally'
              // },
              // {
              //   reactionBody: 'Keep working! Do not stop!',
              //   username: 'Owen'
              // },
            ] 
           },
           { thoughtText: 'I am working on a new project!',
            username: 'Sally',
            reactions: [
              // {
              //   reactionBody: 'Cool! Can I join?',
              //   username: 'Matt'
              // },
              // {
              //   reactionBody: 'What is ir about?',
              //   username: 'Owen'
              // },
            ] 
           },
        ]
      );
      return console.log('Thoughts inserted', results);
    }
    return console.log('Thought Collection is already populated');
  })
  .catch(err => handleError(err));

module.exports = {Thought};