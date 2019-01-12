'use strict';
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const beersSchema = mongoose.Schema({
      beerType: {type: String, required: true},
      display_name: {type: String, required: true},
      brewer_name: {type: String, required: true},
      on_draft: {type: boolean} 
});

const ResourceSchema = mongoose.Schema({ any: Object });

ResourceSchema.methods.serialize = function() {
  return {
    attribute1: this.attribute1 || '',
    attribute2: this.attribute1 || '',
    attribute3: this.attribute1 || ''
  };
};

const Resource = mongoose.model('Resource', ResourceSchema);

module.exports = {Resource};
