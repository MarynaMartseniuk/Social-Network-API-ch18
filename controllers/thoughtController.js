//const { ObjectId } = require('mongoose').Types;
const { Thought, User } = require('../models');

module.exports = {
    // Get all thoughts
    async getThoughts(req, res) {
      try {
        const thoughts = await Thought.find()
        .select('-__v');

        //console.log(thoughts[0].createdAt, typeof thoughts[0].createdAt);
         res.json(thoughts);
      } catch (err) {
        console.log(err);
        return res.status(500).json(err);
      }
    },

    // Get a single thought
    async getSingleThought(req, res) {
      try {
        const thought = await Thought.findOne({ _id: req.params.thoughtId })
          .select('-__v');
  
        if (!thought) {
          return res.status(404).json({ message: 'No thought with that ID' })
        }
  
        res.json(thought);
      } catch (err) {
        console.log(err);
        return res.status(500).json(err);
      }
    },

    // create a new thought
    async createThought(req, res) {
      try {
        //create a thought
        const thought = await Thought.create(req.body);

        //add thought ID to the User (to thoghts ID array)
        const user = await User.findOneAndUpdate(
          { username: req.body.username },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        );
  
        if (!user) {
          return res.status(404).json({
            message: 'Thought created, but found no user with that ID',
          })
        }
  
        res.json('a new Thought was created and added to the User');
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    },

    // update a thought
    async updateThought(req, res) {
      try {
        const thought = await Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $set: req.body },
          { 
            runValidators: true, 
            new: true 
          }
        );
  
        if (!thought) {
          return res.status(404).json({ message: 'No Thought with this id to update!' });
        }
  
        res.json(thought);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    },

    // delete a thought
    async deleteThought(req, res) {
      try {
        // delete a thought by ID from Thought model
        const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
  
        if (!thought) {
          return res.status(404).json({ message: 'No Thought with this id to delete!' });
        }
        
        // find a user with thought ID in thughts array from URL and then delete this thought from this array (update User model so it will not have refference to deleted thought)
        const user = await User.findOneAndUpdate(
          { thoughts: req.params.thoughtId },
          { $pull: { thoughts: req.params.thoughtId } },
          { new: true }
        );
  
        if (!user) {
          return res.status(404).json({
            message: 'Thought was deleted but no user with this thought id!',
          });
        }
  
        res.json({ message: 'Thought successfully deleted!' });
      } catch (err) {
        res.status(500).json(err);
      }
    },

    // create Reaction
    async addReaction(req, res) {
      try {
        const thought = await Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $addToSet: { reactions: req.body } },
          { runValidators: true, new: true }
        );
  
        if (!thought) {
          return res.status(404).json({ message: 'No Thought found with this id to add a reaction to!' });
        }
  
        res.json(thought);
      } catch (err) {
        res.status(500).json(err);
      }
    },

    // remove Reaction
    async removeReaction(req, res) {
      try {
        const thought = await Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $pull: { reactions: { reactionId: req.params.reactionId } } },
          { 
            runValidators: true, 
            new: true }
        );
  
        if (!thought) {
          return res.status(404).json({ message: 'No thought found with this id to delete reaction from!' });
        }
  
        res.json(application);
      } catch (err) {
        res.status(500).json(err);
      }
    },
};