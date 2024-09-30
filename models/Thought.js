const { Schema, model } = require('mongoose');
//const reactionSchema = require('./Reacrion');

// Schema to create Reaction model - subdocument
const reactionSchema = new Schema(
  {
    reactionId: {
      type: mongoose.Schema.Types.ObjectId,
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

module.exports = {Thought};