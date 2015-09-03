var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/hapidemo');

var UserSchema = new Schema({
    firstname : { type: String, unique: true, required: true },
    lastname : { type: String, required: true },
})

var user = mongoose.model('user', UserSchema);

/** export schema */
module.exports = {
  User : user
};