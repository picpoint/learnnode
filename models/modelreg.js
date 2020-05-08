const {Schema, model} = require('mongoose');

const registration = new Schema({
  regfirstname: {
    type: String,
    required: true
  },
  reglastname: {
    type: String,
    required: true
  },
  reglogin: {
    type: String,
    required: true
  },
  regpass: {
    type: String,
    required: true
  }

});


module.exports = model('user', registration);