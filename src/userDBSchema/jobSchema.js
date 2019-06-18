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
  // creator: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  notes: [noteSchema]
});


/**
 * Exports jobSchema for use outside of this file.
 */
module.exports = mongoose.model('savedJob', jobSchema);