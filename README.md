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
1. GET all users:
   
![GET all users:](https://github.com/MarynaMartseniuk/Social-Network-API-ch18/blob/main/utils/images/usersGET.jpg)

2. GET one user:
   
![GET one user:](https://github.com/MarynaMartseniuk/Social-Network-API-ch18/blob/main/utils/images/oneUserGET.jpg)

3. POST (add) one user:
   
![PUT (update) one user:](https://github.com/MarynaMartseniuk/Social-Network-API-ch18/blob/main/utils/images/userPOST.jpg)

4. POST (add) a freind to one user:
   
![PUT (update) one user:](https://github.com/MarynaMartseniuk/Social-Network-API-ch18/blob/main/utils/images/friendPOST.jpg)
    
5.  DELETE one friend from one user:
    
![DELETE one friend from one user:](https://github.com/MarynaMartseniuk/Social-Network-API-ch18/blob/main/utils/images/friendDELETE.jpg)

6. PUT (update) one user:
   
![PUT (update) one user:](https://github.com/MarynaMartseniuk/Social-Network-API-ch18/blob/main/utils/images/userPUT.jpg)

7. DELETE one user:
    
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
