'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const {Resource} = require('./models');
const router = express.Router();
const jsonParser = bodyParser.json();

// Post to register a new log
router.post('/', jsonParser, (req, res) => {
  console.log("this is my test");
  return res.json("test");
});

router.get('/', (req, res) => {
  return res.json('sup yo');
});

router.delete('/', (req, res) => {
  return res.json('sup yo');
});

router.put('/', (req, res) => {
  return res.json('sup yo');
});

module.exports = {router};
