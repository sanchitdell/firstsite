var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Landing', function(req, res, next) {
  res.render('Landing', { title: 'Express' });
});

router.post('/', function (req, res) {
    console.log(req.body.title);
    console.log(req.body.description);
    res.send(req.body.title + " desc " + req.body.description);
	
});



module.exports = router;
