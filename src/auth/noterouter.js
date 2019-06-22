'use strict';

/** NODE PACKAGES
 * Express
 */

const express = require('express');
const noteRouter = express.Router();
const Notes = require('../userDBSchema/noteSchema');
const User = require('../userDBSchema/users-model');

noteRouter.post('/save/:username', async (req, res, next) => {
    let note = new Notes(req.body);
    note.save();

    User.find({username:`${req.params.username}`})
        .populate('notes')
        .exec(function(err, user) {
            if (err) console.log(err);
            user[0].notes.push(note);
            user[0].save()
        })
});


module.exports = noteRouter;

