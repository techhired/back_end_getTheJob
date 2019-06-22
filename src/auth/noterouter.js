'use strict';

/** NODE PACKAGES
 * Express
 */
const express = require('express');
const noteRouter = express.Router();
const Notes = require('../userDBSchema/noteSchema');
const auth = require('../auth/middleware');
const User = require('../userDBSchema/users-model');

noteRouter.post('/save/:username', async (req, res, next) => {
    let note = new Notes(req.body);
    note.save()

    User.find({username:`${req.params.username}`})
        .populate('notes')
        .exec(function(err, user) {
            if (err) console.log(err);
            user[0].notes.push(note)
            user[0].save()

                .then(() => {
                    res.status(200).json('saving the Note succeeded');
                })
                .catch(err => {
                    res.status(400).send('saving the Note failed');
                }).catch(next);

        })
});


/** Exports noteRouter for use outside of this file.*/
module.exports = noteRouter;