'use strict';

/** NODE PACKAGES
 * Express
 */

const express = require('express');
const noteRouter = express.Router();
const Notes = require('../userDBSchema/noteSchema');
const auth = require('../auth/middleware');
const User = require('../userDBSchema/users-model');

noteRouter.post('/save/:username', (req, res, next) => {
    let note = new Notes(req.body);
    User.update(
        { username: `${req.params.username}`},
        {$push: {'$.notes': {title: 5}}}
    )

    //     .exec(function(err, note) {
    //     console.log(note);
    // });

    return note.save()
        .then(savedNotes => {
            console.log(savedNotes)
            res.status(200).json({'savedNotes': 'notes saved'});
        })
        .catch(err => {
            res.status(400).send('saving the Note failed');
        }).catch(next);
});


module.exports = noteRouter;