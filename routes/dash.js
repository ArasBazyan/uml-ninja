var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://nimishAras:thesis_project@cluster0-gj7hf.mongodb.net/test";


/* GET home page. */
router.get('/', function(req, res, next) {
    
    console.log("dash")
    console.log("RENDER DASH!!!!")
  res.render('dashView');
});

router.get('/:id', function(req, res, next) {
    MongoClient.connect(uri, function(err, client) {
        if (err) {
            console.error(err);
        }

        var id = req.params.id;
        console.log('Retrieving wine: ' + id);
        client.db("Thesis").collection('Repos', function(err, collection) {
            collection.findOne({'repo_id': id}, function(err, item) {
                console.log(item)
                res.json(item);
            });
        });

        console.log("connected to DB");
        client.close();


    });
});



module.exports = router;
