'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const {Beers} = require('./models');
const router = express.Router();
const jsonParser = bodyParser.json();

router.post('/', jsonParser, (req, res) => {
  console.log("Post Request");
  // return res.status(200);
  return Beers
  .create ({
    beer_type: req.body.beer_type,
    display_name: req.body.display_name,
    brewer_name: req.body.brewer_name,
    associated_business: req.body.associated_business,
    on_draft: req.body.on_draft
  })
  .then(beer => res.status(201).json(beer.serialize())
  )
  .catch(err => {
    res.status(500).json({error: err.message});
    })
  });

router.get('/', (req, res) => {
  console.log("Get request:", req.query.type);
  return Beers
  .find({beer_type: req.query.type})
  .then(beer_type_result => res.json(beer_type_result))
  .catch(err => {
    res.status(500).json({error: err.message});
  })
});

router.delete('/:id', (req, res) => {
  console.log("Delete Request:", req.params.id)
  return Beers
  .findByIdAndRemove(req.params.id)
  .then((response) => {
    res.status(204).json({message: response});
  })
  .catch(err => {
    res.status(500).json({error: err.message});
  })
});

router.put('/:id', jsonParser, (req, res) => {
  console.log("Put request:", req.body);
  return Beers
  .findByIdAndUpdate(req.params.id, req.body)
  .then((updatedBeer) => {
    res.status(204).json(updatedBeer);
  })
  .catch(err => {
    res.status(500).json({error: err.message});
  })
});

module.exports = {router};
