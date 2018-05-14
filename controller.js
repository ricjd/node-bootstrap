'use strict';
const common = require('common');
const Person = common.models.Person;
const Team = common.models.Team;

exports.getrick = async (req, res, next) => {
  try {
    req.person = await Person.findOne({ primaryEmail: 'rick.knowler@human.x.ai' });
    req.team = await Team.findOne({ _id: req.person.teams[0].teamId });
    next();
  } catch(e) {
    next(e);
  }
};

exports.getrickerror = async (req, res, next) => {
  try {
    req.person = await Person.findOne({ primaryEmail: 'rick.knowler@human.x.ai' });
    req.team = await Team.findOne({ _id: person.teams[0].teamId });
    next();
  } catch(e) {
    next(e);
  }
};

exports.showRick = ( req, res, next) => {
  const reply = `${req.person.name.first} ${req.person.name.last} is on team ${req.team.name}`;
  res.send(reply);
};

exports.showRickerror = ( req, res, next) => {
  const reply = `${req.person.WRONG.first} ${req.person.name.last} is on team ${req.team.name}`;
  res.send(reply);
};

exports.getpeople = async (req, res, next) => {
  try {
    const [user, product] = await Promise.all([
      req.person1 = await Person.findOne({ primaryEmail: 'rick.knowler@human.x.ai' }),
      req.person2 = await Person.findOne({ primaryEmail: 'holdentest+9391@test.x.ai' })
    ])
    next();
  } catch (e) {
    next(e);
  }
};

exports.showpeople = ( req, res, next) => {
  const reply = `${req.person1.name.first} ${req.person1.name.last} and ${req.person2.name.first} ${req.person2.name.last}`;
  res.send(reply);
};