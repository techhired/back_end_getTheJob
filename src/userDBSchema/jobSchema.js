import * as mongoose from "mongoose";

/** DEPENDENCIES
 * ../auth/user model.js
 * Mongoose
 */
const User = require('./users-model');
const Schema = mongoose.Schema;

/** jobsSchema variable
 * Creates 'savedJob' as a new mongo schema, and defines types for jobTitle, location, summary, date and url.
 * @type {mongoose.Schema}
 */
const jobSchema = new Schema({
  jobTitle: string,
  location: string,
  summary: string,
  date: {type:Date, default:Date.now()},
  url: string,
  creator: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
});


/**
 * Exports userJobSchema for use outside of this file.
 */
module.exports = mongoose.model('savedJob', jobSchema);