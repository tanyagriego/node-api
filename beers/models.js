'use strict';
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const beersSchema = mongoose.Schema({
    beer_type: {type: String, required: true},
    display_name: {type: String, required: true},
    brewer_name: {type: String, required: true},
    on_draft: {type: boolean, required: true} 
});

beersSchema.methods.serialize = function() {
  return {
    beer_type: this.beer_type || '',
    display_name: this.display_name || '',
    brewer_name: this.brewer_name || '',
    on_draft: this.on_draft || ''
  };
};

const Beers = mongoose.model('Beers', beersSchema);

module.exports = {Beers};
