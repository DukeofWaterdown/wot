var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld',function(req, res) {
  res.render('helloworld', {title: 'Hello There!'});
});

/* Get Ownerlist page. */
router.get('/owner', function(req, res) {
    var db = req.db;
    var collection = db.get('ownercollection');
    collection.find({},{},function(e,docs){
        res.render('owner', {
            "ownerlist" : docs
        });
    });
});


/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('ownercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

module.exports = router;

/*

router.get('/ownerlist', function(req,res) {
  var db = req.db;
  var collection = db.get('ownercollection');
  collection.find({},{},{},function(e,docs){
    res.render('ownerlist', {title : "WOT"}, {
      "ownerlist" : docs
    });
  });
});

*/
