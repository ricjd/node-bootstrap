'use strict';

const express = require('express');
const router = express.Router();
const controller= require('./controller');

const sendSucces = (req, res) => {
  res.send('');
};


router.get('/ping', (req, res) => {
  res.send('pong');
});

module.exports = router;