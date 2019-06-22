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
    .then(savedJobs => {
      res.status(200).json({'savedJobs': 'savedJobs added successfully'});
    })
    .catch(err => {
    res.status(400).send('saving the Job failed');
    });
});

jobroutes.get('/signin', auth, (req, res, next) => {
  job.find(function(error, savedJobs) {
    if (error){
      console.log(error);
    } else {
      res.json(savedJobs);
    }
  });
});

jobroutes.delete('/signin', auth, (req, res, next) => {


});
