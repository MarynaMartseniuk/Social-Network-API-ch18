const { ObjectId } = require('mongoose').Types;
const { Thought } = require('../models');

module.exports = {
    // Get all thoughts
    async getThoughts(req, res) {
      try {
        const thoughts = await Thought.find();
  
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
  
        res.json(user);
      } catch (err) {
        console.log(err);
        return res.status(500).json(err);
      }
    },

    // create a new thought
    async createThought(req, res) {
      try {
        const thought = await Thought.create(req.body);
        res.json(thought);
      } catch (err) {
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
            new: true }
        );
  
        if (!user) {
          return res.status(404).json({
            message: 'No thought with that ID to update',
          })
        }
  
        res.json(user);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    },

    // delete a thought
    async deleteThought(req, res) {
      try {
        const thought = await User.findOneAndDelete({ _id: req.params.thoughtId });
  
        if (!thought) {
          return res.status(404).json({ message: 'No thought with that ID to delete' });
        }
  
        res.json({ message: 'Thought successfully deleted' });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    },
};