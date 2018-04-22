var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('./uml_ninja');

var uri = "mongodb+srv://nimishAras:thesis_project@cluster0-gj7hf.mongodb.net/test";


/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("Rendering dash")
  res.render('dashView');
});


router.get('/:id', function(req, res, next){

    var idProject = req.params.id;
    var queryAll = "SELECT Project.*, Process.* , UML.* FROM Project INNER JOIN Process ON Process.idProject = Project.idProject INNER JOIN UML ON UML.idProject = Project.idProject WHERE Project.idProject =";
    var query = "SELECT Project.*, Process.* FROM Project INNER JOIN Process ON Process.idProject = Project.idProject WHERE Project.idProject =";
    db.each(query + idProject, function(err, row){
        console.log(query)
        if (err){
            console.error(err);
        } else {
            //console.log(row);
            console.log('Projects:  ' + JSON.stringify(row));
            res.render('dashView', {
                data: row
            });

            //res.json(row);
        }
    });

    // db.close();
});



/*
Mongo DB
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

*/

module.exports = router;
