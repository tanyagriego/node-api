'use strict';
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const businessesSchema = mongoose.Schema({
  businessName: {type: String, required: true},
  businessWebiste: {type: String, required: true},
  businessOpen:{type: String, required: true},
  businessClose:{type: String, required: true}
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
