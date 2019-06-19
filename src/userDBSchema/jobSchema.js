'use strict';

/** DEPENDENCIES
 * ../auth/user model.js
 * Mongoose
 */
const mongoose = require('mongoose');
const User = require('./users-model');
const noteSchema = require('./noteSchema');

/** jobsSchema variable
 * Creates 'savedJob' as a new mongo schema, and defines types for jobTitle, location, summary, date and url.
 * @type {mongoose.Schema}
 */
const jobSchema = new mongoose.Schema({
  jobTitle: {type:String},
  location: {type:String},
  summary: {type:String},
  date: {type:Date, default:Date.now()},
  url: {type:String},
  users: [{ type: mongoose.Schema.ObjectId, ref: 'user' }]
  // creator: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  // notes: [noteSchema]
});


/**
 * Exports jobSchema for use outside of this file.
 */
let jobModel = mongoose.model('savedJob', jobSchema);

let testJobs = new jobModel({title: 'mechanic', location: 'Tacoma', summary: 'fixing cars'});
// let testUser = new User({username:'sarkis', password: 'password'});
//
// testUser.jobSchema.push(testJobs);
//
// testUser.save(function (err, job) {
//   if (err) return console.error(err);
//   console.log(job.jobTitle + " saved to job collection.");
// });

module.exports = testJobs;
