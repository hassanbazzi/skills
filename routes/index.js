var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
var mongoose = require('mongoose');
var Message = mongoose.model('Message');

// Get all messages route

router.get('/messages', function(req, res, next) {
  Message.find(function(err, messages){
    if(err){ return next(err); }

    res.json(messages);
  });
});
// New Message Route

router.post('/messages', function(req, res, next) {
  var message = new Message(req.body);

  message.save(function(err, message){
    if(err){ return next(err); }

    res.json(message);
  });
});
