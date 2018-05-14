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

router.get('/rick',
  //IO function
  controller.getrick,
  //function with all the logic
  controller.showRick
);

router.get('/rickerr1',
  //IO function
  controller.getrickerror,
  //function with all the logic
  controller.showRick
);

router.get('/rickerr2',
  //IO function
  controller.getrick,
  //function with all the logic
  controller.showRickerror
);

router.get('/people',
  //IO function
  controller.getpeople,
  //function with all the logic
  controller.showpeople
);

module.exports = router;