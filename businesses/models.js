'use strict';
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const businessSchema = mongoose.Schema({
  business_name: {type: String, required: true},
  business_webiste: {type: String, required: true},
  hours_open:{type: String, required: true},
  hours_close:{type: String, required: true}
});

businessSchema.methods.serialize = function() {
  return {
    business_name: this.business_name || '',
    business_webiste: this.business_webiste || '',
    hours_open: this.hours_open || '',
    hours_close: this.hours_close || ''
  };
};

const Business = mongoose.model('Business', businessSchema);

module.exports = {Business};
