'use strict';

/** NODE PACKAGES
 * Express
 */

const express = require('express');
const noteRoutes = express.Router();
const Jobs = require('../userDBSchema/jobSchema');

noteRoutes.post('/save', (req, res, next) => {
  let note = new Jobs(req.body);
  return note.save()
    .then(savedNotes => {
      res.status(200).json({'savedNotes': 'savedNotes added successfully'});
    })
    .catch(err => {
      res.status(400).send('saving the Note failed');
    }).catch(next);
});

noteroutes.get('/signin', auth, (req, res, next) => {
  note.find(function(error, savedNotes) {
    if (error){
      console.log(error);
    } else {
      res.json(savedNotes);
    }
  });
});

noteroutes.delete('/signin', auth, (req, res, next) => {


});