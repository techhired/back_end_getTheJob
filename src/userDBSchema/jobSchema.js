'use strict';

/** DEPENDENCIES
 * ../auth/user model.js
 * Mongoose
 */
const mongoose = require('mongoose');

/** jobsSchema variable
 * Creates 'savedJob' as a new mongo schema, and defines types for jobTitle, location, summary, date and url.
 * @type {mongoose.Schema}
 */
const jobSchema = new mongoose.Schema({
  user : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  organization: {type: String},
  title: {type:String},
  location: {type:String},
  summary: {type:String},
  date: {type:Date, default:Date.now()},
  url: {type:String},
  // users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

/** Exports jobSchema for use outside of this file.*/
module.exports = jobSchema;
