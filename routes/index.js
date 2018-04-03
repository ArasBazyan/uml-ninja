var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://nimishAras:thesis_project@cluster0-gj7hf.mongodb.net/test";

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Rendering index")
  res.render('index');
});


// to send all repos to frontend
router.get('/allrepos', function(req, res, next) {
    MongoClient.connect(uri, function(err, client) {
        if (err) {
            console.error(err);
        }
        client.db("Thesis").collection('Repos', function(err, collection) {
            collection.find({}).toArray(function (err, item) { 
  
                if (err) {
                  return console.log("error: " + err);
                }
                console.log(item)
                console.log(JSON.stringify(item)); 
                /*               
                res.render('index', {
                    data: item
                });
                */
                //Send repos as JSON to /allrepos
                res.json(item);
            });
        });

        console.log("connected to DB");
        client.close();
    });
});


// To send all commits to frontend
router.get('/allcommits', function(req, res, next) {
    MongoClient.connect(uri, function(err, client) {
        if (err) {
            console.error(err);
        }
     
        client.db("Thesis").collection('Commits', function(err, collection) {
            collection.find({}).toArray(function (err, item) { 
                if (err) {
                  return console.log("error: " + err);
                }
                console.log(item)
                console.log(JSON.stringify(item));                
                res.render('index', {
                    data: item
                });
                //console.log(item)
                //res.json(item);
            });
        });

        console.log("connected to DB");
        client.close();
    });
});




/*
//Send repo by id
router.get('/dash/:id', function(req, res, next) {
    MongoClient.connect(uri, function(err, client) {
        if (err) {
            console.error(err);
        }
        var id = req.params.id;
        var query = { 'repo_id' : parseInt(id) };
        console.log(query);
        client.db("Thesis").collection('Repos', function(err, collection) {
            collection.findOne(query, function(err, item) {
                if (err) {
                  return console.log("error: " + err);
                }
                console.log(item)
                console.log(JSON.stringify(item));                
                res.render('index', {
                    projectID: req.params.id,
                    data: item
                });
                //console.log(item)
                //res.json(item);
            });
        });

        console.log("connected to DB");
        client.close();
    });
});
*/

module.exports = router;
