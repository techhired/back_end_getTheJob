'use strict';

/** NODE PACKAGES
 * Express
 */

const express = require('express');
const jobroutes = express.Router();
const Job = require('../userDBSchema/jobSchema');

jobroutes.post('/save', (req, res, next) => {

  let job = new Job(req.body);

  return job.save()


});

jobroutes.get('/signin', auth, (req, res, next) => {



});

jobroutes.delete('/signin', auth, (req, res, next) => {



});