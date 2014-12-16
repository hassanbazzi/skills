var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
  content: String
});
mongoose.model('Message', MessageSchema);