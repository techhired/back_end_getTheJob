'use strict';

/** NODE PACKAGES
 * Express
 */

const express = require('express');
const authRouter = express.Router();
const User = require('./users-model');
const auth = require('./middleware');

/** POST methods for SignUp and SignIn */
authRouter.post('/signup', (req, res, next) => {

  let user = new User(req.body);
console.log(user)
  return user.save()
    .then(user => {
      req.token = user.generateToken();
      req.user = user;
      res.set('token', req.token);
      res.cookie('auth', req.token);
      res.send(req.token);
    }).catch(next);
});

authRouter.post('/signin', auth, (req, res, next) => {
  res.cookie('auth', req.token);
  res.send(req.token);
});

module.exports = authRouter;
