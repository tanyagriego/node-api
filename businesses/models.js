'use strict';
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const businessesSchema = mongoose.Schema({
  business_name: {type: String, required: true},
  business_id: {type: String, required: true},
  business_webiste: {type: String, required: true},
  hours_open:{type: String, required: true},
  hours_close:{type: String, required: true}
});

const BusinessesSchema = mongoose.Schema({ any: Object });

BusinessesSchema.methods.serialize = function() {
  return {
    attribute1: this.attribute1 || '',
    attribute2: this.attribute1 || '',
    attribute3: this.attribute1 || ''
  };
};

const Buisnesses = mongoose.model('Businesses', BusinessesSchema);

module.exports = {Resource};
