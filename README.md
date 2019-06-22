# UML Ninja
Automatically assess UML documentation practices in open source projects


## Set up and deployment:
 * Clone the repo: https://github.com/ArasBazyan/uml-ninja
 * run `npm install` in the folder. You have to install npm if you don’t have it
 (https://nodejs.org/en/)
 * run `node server.js` and the app should be running on port 8000.
 (http://localhost:8000/)`


 ##### In case there is a problem with `Sqlite3` library while installing the app, please remove the folder `sqlite3` in the `node_modules` folder and run `npm install` again. The reason is that the operating system might not be compatible with SQLite3 version.