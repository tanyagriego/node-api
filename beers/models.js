'use strict';
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const beersSchema = mongoose.Schema({
    beer_type: {type: String, required: true},
    display_name: {type: String, required: true},
    brewer_name: {type: String, required: true},
    on_draft: {type: boolean, required: true} 
});

//const ResourceSchema = mongoose.Schema({ any: Object });

beersSchema.methods.serialize = function() {
  return {
    attribute1: this.attribute1 || '',
    attribute2: this.attribute1 || '',
    attribute3: this.attribute1 || ''
  };
};

const Beers = mongoose.model('Beers', beersSchema);

module.exports = {Beers};
