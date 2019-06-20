'use strict';

/** NODE PACKAGES
 * Express
 */

const express = require('express');
const authRouter = express.Router();
const User = require('../userDBSchema/users-model');
const Job = require('../userDBSchema/jobSchema')
const auth = require('./middleware');


authRouter.route('/').get((req, res) => {// to retrieve all users info
    Job.find(function(err, jobs) {
        if(err) {
            console.log(err);
        }
        else {
            res.json(jobs)
        }
    })
});


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
