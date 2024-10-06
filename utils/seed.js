const connection = require('../config/connection');
const { User, Thought } = require('../models');

//connection.on('error', (err) => err);

connection.once('open', async () => {

// User seeds. Got seeded if DB is emplty.
User.find()
  .exec()
  .then(async collection => {
    if (collection.length === 0) {
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
      console.log('Users inserted', results);
    }
    console.log('User Collection is already populated');

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
            {
              reactionBody: 'like it!',
              username: 'Owen'
            },
            {
              reactionBody: 'What do you mean?',
              username: 'Sally'
            },
          ] 
         },
         { thoughtText: 'Matrix is cool!',
          username: 'Owen',
          reactions: [
            {
              reactionBody: 'agree!',
              username: 'Matt'
            },
            {
              reactionBody: 'I still can not get you, gyus :(',
              username: 'Sally'
            },
          ] 
         },
         { thoughtText: 'I can code!!!',
          username: 'Matt',
          reactions: [
            {
              reactionBody: 'Geate!',
              username: 'Owen'
            },
            {
              reactionBody: 'Congrats!!! :)))))',
              username: 'Sally'
            },
            {
              reactionBody: 'Keep working! Do not stop!',
              username: 'Owen'
            },
          ] 
         },
         { thoughtText: 'I am working on a new project!',
          username: 'Sally',
          reactions: [
            {
              reactionBody: 'Cool! Can I join?',
              username: 'Matt'
            },
            {
              reactionBody: 'What is it about?',
              username: 'Owen'
            },
          ] 
         },
      ]
    );
    console.log('Thoughts inserted', results);
   }
  console.log('Thought Collection is already populated');
  process.exit(0);
})
.catch(err => 
  // handleError(err)
  console.log(err)
);

  })
  .catch(err => handleError(err));



  // 
});