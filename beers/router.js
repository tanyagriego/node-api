'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const {Beers} = require('./models');
const router = express.Router();
const jsonParser = bodyParser.json();

router.post('/', jsonParser, (req, res) => {
  console.log("Post Request");
  return Beers
  .create ({
    beer_type: req.body.beer_type,
    display_name: req.body.display_name,
    brewer_name: req.body.brewer_name,
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

router.delete('/', (req, res) => {
  return res.json('sup yo');
});

router.put('/', (req, res) => {
  return res.json('sup yo');
});

module.exports = {router};
