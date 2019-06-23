'use strict';

/** NODE PACKAGES
 * Express
 */
const express = require('express');
const authRouter = express.Router();
const User = require('../userDBSchema/users-model');
const auth = require('./middleware');

/** the landing route for our web page*/
authRouter.route('/').get((req, res) => {
  Job.find(function(err, jobs) {
    if(err) {
      console.log(err);
    } else {
      res.json(jobs)
    }
  })
});

/** POST methods for SignUp*/
authRouter.post('/signup', (req, res, next) => {
  let user = new User(req.body);
  return user.save()
    .then(user => {
      req.token = user.generateToken();
      req.user = user;
      res.set('token', req.token);
      res.cookie('auth', req.token);
      res.send(req.token);
    }).catch(next);
});

/** POST methods for SignIn*/
authRouter.post('/signin', auth, (req, res, next) => {
  res.cookie('auth', req.token);
  res.send(req.token);
});

/** Exports authRouter for use outside of this file.*/
module.exports = authRouter;
