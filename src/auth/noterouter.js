'use strict';

/** NODE PACKAGES
 * Express
 */

const express = require('express');
const noteRouter = express.Router();
const Notes = require('../userDBSchema/noteSchema');

noteRouter.post('/save', (req, res, next) => {
  let note = new Notes(req.body);
  console.log(req.body)
  return note.save()
    .then(savedNotes => {
      console.log(savedNotes)
      res.status(200).json({'savedNotes': 'notes saved'});
    })
    .catch(err => {
      res.status(400).send('saving the Note failed');
    }).catch(next);
});

// noteRoutes.get('/signin', auth, (req, res, next) => {
//   note.find(function(error, savedNotes) {
//     if (error){
//       console.log(error);
//     } else {
//       res.json(savedNotes);
//     }
//   });
// });
//
// noteroutes.delete('/signin', auth, (req, res, next) => {
//
//
// });

module.exports = noteRouter;