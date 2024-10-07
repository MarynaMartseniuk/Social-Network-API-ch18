# Social-Network-API-ch18
 an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

## Description
### Motivation to create this App was a wish to learn noSQL DB on an social App example, which is wide used in real life.
### I built this App because it had some new coding challanges needed to be solved. For me, as for a begginer, it was importent to get a new skills and got understanding that "I can do it!".
### This App helps with 
- save and share your thoughts;
- get reactions on your thoughts from other users;
- create/udate a friend groups to share thoughts inside.
  
### This project was interesting and usefull for me because, as a begginer, I learned:
- MONGO DB (noSQL DB);
- backEnd sructure for MONGO DB;
- how to work with subdocs;
- how to optimize workflow using data population.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation
### To use this App you need to install GitBush/Terminal, NodeJs, Insomnia, Visual Studio Code.

## Usage
1. in the Command Line/GitBush/Terminal go to the folder with the code;
2. run "npm install" to buid the App;
3. run "node utils/seed.js" or "npm run seed" to seed database;
4. run "node index.js" or "npm run start" to start the App. You should get massage: "API server running on port 3001!". Now you can use Insomnia;
5. in Insomnia create requests to check resonses from database;
6. use "Ctrl+C" to exit the App.

### run the App will look like this:
#### Let's work with USER
1. GET all users (http://localhost:3001/api/users):
   
![GET all users:](https://github.com/MarynaMartseniuk/Social-Network-API-ch18/blob/main/utils/images/usersGET.jpg)

2. GET one user(http://localhost:3001/api/users/:userId):
   
![GET one user:](https://github.com/MarynaMartseniuk/Social-Network-API-ch18/blob/main/utils/images/oneUserGET.jpg)

3. POST (add) one user (http://localhost:3001/api/users with the body request):
   
![POST (add) one user:](https://github.com/MarynaMartseniuk/Social-Network-API-ch18/blob/main/utils/images/userPOST.jpg)

4. POST (add) a freind to one user (http://localhost:3001/api/users/:userId/friends with the body request):
   
![POST (add) a freind to one user:](https://github.com/MarynaMartseniuk/Social-Network-API-ch18/blob/main/utils/images/friendPOST.jpg)
    
5.  DELETE one friend from one user (http://localhost:3001/api/users/:userId/friends/:friendId with the body request):
    
![DELETE one friend from one user:](https://github.com/MarynaMartseniuk/Social-Network-API-ch18/blob/main/utils/images/friendDELETE.jpg)

6. PUT (update) one user (http://localhost:3001/api/users/:userId with the body request):
   
![PUT (update) one user:](https://github.com/MarynaMartseniuk/Social-Network-API-ch18/blob/main/utils/images/userPUT.jpg)

7. DELETE one user (http://localhost:3001/api/users/:userId):
    
![DELETE one user:](https://github.com/MarynaMartseniuk/Social-Network-API-ch18/blob/main/utils/images/userDELETE.jpg)

#### Let's work with THOUGHT
1. GET all thoughts (http://localhost:3001/api/thoughts):
   
![GET all thoughts:](https://github.com/MarynaMartseniuk/Social-Network-API-ch18/blob/main/utils/images/thoughtsGET.jpg)

2. GET one thought (http://localhost:3001/api/thoughts/:thoughtId):
   
![GET one thought:]()

3. POST (add) one thought (http://localhost:3001/api/thoughts with the body request) and user gets updated:
   
![POST (add) one thought:](https://github.com/MarynaMartseniuk/Social-Network-API-ch18/blob/main/utils/images/thoughtPOST.jpg)
![user gets updated:](https://github.com/MarynaMartseniuk/Social-Network-API-ch18/blob/main/utils/images/thoughtPOST-user.jpg)

4. POST (add) a reaction to one thought (http://localhost:3001/api/thoughts/:thoughtId/reactions with the body request):
   
![POST (add) a reaction to one though:](https://github.com/MarynaMartseniuk/Social-Network-API-ch18/blob/main/utils/images/reactionPOST.jpg)
    
5.  DELETE a reaction from a thought (http://localhost:3001/api/thoughts/:thoughtId/reactions/reactionId):
    
![DELETE one friend from one user:](https://github.com/MarynaMartseniuk/Social-Network-API-ch18/blob/main/utils/images/reactionDELETE.jpg)

6. PUT (update) one thought (http://localhost:3001/api/thoughts/:thoughtId with the body request):
   
![PUT (update) one thought :](https://github.com/MarynaMartseniuk/Social-Network-API-ch18/blob/main/utils/images/thoughtPUT.jpg)

7. DELETE one thought (http://localhost:3001/apithoughts/:thoughtId):
    
![DELETE one user:](https://github.com/MarynaMartseniuk/Social-Network-API-ch18/blob/main/utils/images/thoughtDELETE.jpg)

#### EXTRA option: if user got deleted then all related thoughts got deleted as well
1. GET all users (http://localhost:3001/api/users):
   
![GET all users:](https://github.com/MarynaMartseniuk/Social-Network-API-ch18/blob/main/utils/images/usersGET.jpg)

2. GET one user(http://localhost:3001/api/users/:userId):
   
![GET one user:](https://github.com/MarynaMartseniuk/Social-Network-API-ch18/blob/main/utils/images/oneUserGET.jpg)

3. POST (add) one user (http://localhost:3001/api/users with the body request):
   
![PUT (update) one user:](https://github.com/MarynaMartseniuk/Social-Network-API-ch18/blob/main/utils/images/userPOST.jpg)

4. POST (add) a freind to one user (http://localhost:3001/api/users/:userId/friends with the body request):
   
![PUT (update) one user:](https://github.com/MarynaMartseniuk/Social-Network-API-ch18/blob/main/utils/images/friendPOST.jpg)
    
5.  DELETE one friend from one user (http://localhost:3001/api/users/:userId/friends/:friendId with the body request):
    
![DELETE one friend from one user:](https://github.com/MarynaMartseniuk/Social-Network-API-ch18/blob/main/utils/images/friendDELETE.jpg)

6. PUT (update) one user (http://localhost:3001/api/users/:userId with the body request):
   
![PUT (update) one user:](https://github.com/MarynaMartseniuk/Social-Network-API-ch18/blob/main/utils/images/userPUT.jpg)

7. DELETE one user (http://localhost:3001/api/users/:userId):
    
![DELETE one user:](https://github.com/MarynaMartseniuk/Social-Network-API-ch18/blob/main/utils/images/userDELETE.jpg)

## Credits
1. bootcamp UofU, module # 18, activities ## 13, 23, 26, 28
2. https://mongoosejs.com

## License
### All assets and code are under the MIT license. Please, check more info in lisence section of this repo.
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## How to Contribute
### this section is comming soon

## Tests
### this section is comming soon

## Questions
### If you have any questions, please, contact me using my contact info bellow:
- my GitHub name: MarynaMartseniuk
- my GitHub link: https://github.com/MarynaMartseniuk
- my email address: marina.ved80@gmail.com
