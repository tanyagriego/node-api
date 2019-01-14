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

//const BusinessesSchema = mongoose.Schema({ any: Object });

BusinessesSchema.methods.serialize = function() {
  return {
    business_name: this.business_name || '',
    business_id: this.business_id || '',
    business_webiste: this.business_webiste || '',
    hours_open: this.hours_open || '',
    hours_close: this.hours_close || ''
  };
};

const Buisnesses = mongoose.model('Businesses', businessesSchema);

module.exports = {Buisnesses};
