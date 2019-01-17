'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const {Business} = require('./models');
const router = express.Router();
const jsonParser = bodyParser.json();

// Post to register a new log
router.post('', jsonParser, (req, res) => {
  //console.log("this is my test");
  return Business
    .create({
      business_name: req.body.business_name,
      business_id: req.body.business_id,
      business_webiste: req.body.business_webiste,
      hours_open: req.body.hours_open,
      hours_close: req.body.hours_close
    })
      .then(
      business => res.status(201).json(business.serialize()))
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

router.delete('', (req, res) => {
  console.log("delete request:", req.params.buisness_name)
  return Business
  .remove({businesses: req.params.buisness_name})
  .then(() => {
    Business
    .findByIdAndRemove(req.params.business_name)
    .then(() => {
      console.log ('Deleted business name \`{$business_name}\`');
      res.status(204).json({message: 'success'});
    });
  })
    .catch(err => {
      res.status(500).json({error: err.message});
  
    })
  });

router.put('', (req, res) => {
  return res.json('test string');
});

module.exports = {router};
