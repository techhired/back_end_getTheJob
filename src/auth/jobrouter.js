'use strict';

/** NODE PACKAGES
 * Express
 */
const express = require('express');
const jobroutes = express.Router();
const Job = require('../userDBSchema/jobSchema');

/** saves the job to the user's profile for later checking*/
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

/** finds all saved jobs to the user's profile for the front-end*/
jobroutes.get('/retrieve', auth, (req, res, next) => {
  job.find(function(error, savedJobs) {
    if (error){
      console.log(error);
    } else {
      res.json(savedJobs);
    }
  });
});


///** removes the selected job from the user's profile*/
// jobroutes.delete('/remove', auth, (req, res, next) => {
//
//
// });

