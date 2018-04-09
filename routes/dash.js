var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://nimishAras:thesis_project@cluster0-gj7hf.mongodb.net/test";


/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("Rendering dash")
  res.render('dashView');
});

router.get('/:id/:ib', function(req, res, next) {
    MongoClient.connect(uri, function(err, client) {
        if (err) {
            console.error(err);
        }
        var id = req.params.id;
        var ib = req.params.ib;
        var fullname = id + '/' + ib;
        console.log(fullname);
        console.log('Retrieving project: ' + id);
        client.db("Thesis").collection('Repos', function(err, collection) {
            collection.findOne({'fullname': fullname}, function(err, item) {
                console.log("THE DATA: ");

                console.log(item);
                console.log(JSON.stringify(item));
                res.render('dashView', {
                    data: item
                });
                //res.json(item);
            });
        });

        console.log("connected to DB");
        client.close();


    });
});



module.exports = router;
