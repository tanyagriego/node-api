'use strict';
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  first_name: {type: String, default: ''},
  last_name: {type: String, default: ''},
  favorites: {type: Array, default: []}
});

userSchema.methods.serialize = function() {
  return {
    id: this._id || '',
    username: this.username || '',
    first_name: this.first_name || '',
    last_name: this.last_name || '',
  };
};

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = function(password) {
  return bcrypt.hash(password, 10);
};

//creates a model
const User = mongoose.model('User', userSchema);

module.exports = {User};
