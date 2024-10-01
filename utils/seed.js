// const connection = require('../config/connection');
// const { User, Thought } = require('../models');

// //connection.on('error', (err) => err);

// connection.once('open', async () => {
//   // Delete the collections if they exist
//   let userCheck = await connection.db.listCollections({ name: 'user' }).toArray();
//   if (userCheck.length) {
//     await connection.dropCollection('user');
//   };
//   console.log(`!!!!!!`);
//   console.log(userCheck.length);
//   console.log(`!!!!!!`);

//   let thoughtCheck = await connection.db.listCollections({ name: 'thought' }).toArray();
//   if (thoughtCheck.length) {
//     await connection.dropCollection('thought');
//   };
//   console.log(`%%%%%%`);
//   console.log(thoughtCheck);
//   console.log(`%%%%%%`);

//   const users = [
//     { username: 'Sally 1',
//         email: "sally@uofu.com",
//         thoughts: [],
//         friends: [] 
//        },
//        { username: 'Matt',
//         email: "matt@uofu.com",
//         thoughts: [],
//         friends: [] 
//        },
//        { username: 'Owen',
//         email: "owen@uofu.com",
//         thoughts: [],
//         friends: [] 
//        },
//   ];

//   const thoughts = [
//     { thoughtText: 'Follow the white rabbit 1',
//         username: 'Matt',
//         reactions: [
//           // {
//           //   reactionBody: 'like it!',
//           //   username: 'Owen'
//           // },
//           // {
//           //   reactionBody: 'What do you mean?',
//           //   username: 'Sally'
//           // },
//         ] 
//        },
//        { thoughtText: 'Matrix is cool!',
//         username: 'Owen',
//         reactions: [
//           // {
//           //   reactionBody: 'agree!',
//           //   username: 'Matt'
//           // },
//           // {
//           //   reactionBody: 'I still can not get you, gyus :(',
//           //   username: 'Sally'
//           // },
//         ] 
//        },
//        { thoughtText: 'I can code!!!',
//         username: 'Matt',
//         reactions: [
//           // {
//           //   reactionBody: 'Geate!',
//           //   username: 'Owen'
//           // },
//           // {
//           //   reactionBody: 'Congrats!!! :)))))',
//           //   username: 'Sally'
//           // },
//           // {
//           //   reactionBody: 'Keep working! Do not stop!',
//           //   username: 'Owen'
//           // },
//         ] 
//        },
//        { thoughtText: 'I am working on a new project!',
//         username: 'Sally',
//         reactions: [
//           // {
//           //   reactionBody: 'Cool! Can I join?',
//           //   username: 'Matt'
//           // },
//           // {
//           //   reactionBody: 'What is ir about?',
//           //   username: 'Owen'
//           // },
//         ] 
//        },
//   ];

//   await User.insertMany(users);
//   console.log(users);

//   await Thought.insertMany(thoughts);
//   console.log(thoughts);

//   process.exit(0);
// });