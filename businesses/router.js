'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const {Buisnesses} = require('./models');
const router = express.Router();
const jsonParser = bodyParser.json();

// Post to register a new log
router.post('/', jsonParser, (req, res) => {
  console.log("this is my test");
  return res.json('test string');
});

router.get('/', (req, res) => {
  return res.json('test string');
});

router.delete('/', (req, res) => {
  return res.json('test string');
});

router.put('/', (req, res) => {
  return res.json('test string');
});

module.exports = {router};
