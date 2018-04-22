var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('./uml_ninja');

var uri = "mongodb+srv://nimishAras:thesis_project@cluster0-gj7hf.mongodb.net/test"; // MONGO

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Rendering index")
  res.render('index');
});



router.get('/projectData', function(req, res){

    db.all("SELECT * FROM Project", function(err, row){
        if (err){
            console.error(err);
        } else {
            console.log(row);
            console.log('Projects:  ' + JSON.stringify(row));
            res.json(row);
        }
    });

   // db.close();
});






module.exports = router;
