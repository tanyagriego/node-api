'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const {Business} = require('./models');
const router = express.Router();
const jsonParser = bodyParser.json();

// Post to register a new log
router.post('', jsonParser, (req, res) => {
  console.log("Post Request");
  return Business
    .create({
      business_name: req.body.business_name,
      business_webiste: req.body.business_webiste,
      hours_open: req.body.hours_open,
      hours_close: req.body.hours_close
    })
    .then(business => res.status(201).json(business.serialize())
    )
    .catch(err => {
      console.error(err);
      res.status(500).json({message: 'Internal server error'});
    })
});

router.get('/', (req, res) => {
  console.log("get request", req.query.name);  
   return Business
    .find({business_name: req.query.name})
    .then(business_name_result => res.json(business_name_result))
    .catch(err => {
      res.status(500).json({error: err.message});
    })
});

router.delete('/:id', (req, res) => {
  console.log("delete request:", req.params.id)
  return Business
    .findByIdAndRemove(req.params.id)
    .then((response) => {
        res.status(204).json({message: response});
    })
    .catch(err => {
      res.status(500).json({error: err.message});
    })
});

router.put('/', (req, res) => {
  console.log ("Put request:")
  return Business
    .findOneAndUpdate({
      business_name: req.body.business_name,
      business_webiste: req.body.business_webiste,
      hours_open: req.body.hours_open,
      hours_close: req.body.hours_close
    })
    .then((updatedBusiness) => {
      res.json(updatedBusiness);
    })
    .catch(err => {
    res.status(500).json({error: err.message});
    })
});

module.exports = {router};
