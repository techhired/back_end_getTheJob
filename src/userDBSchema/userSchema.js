import * as mongoose from "mongoose";

/** DEPENDENCIES
 * ../auth/user model.js
 * Mongoose
 */
const User = require('./users-model');
const Schema = mongoose.Schema;

/** userJobsSchema variable
 * Creates 'savedJob' as a new mongo schema, and defines types for jobTitle, location, summary, date and url.
 * @type {mongoose.Schema}
 */
const userJobsSchema = new Schema({
  jobTitle: string,
  location: string,
  summary: string,
  date: {type:Date, default:Date.now()},
  url: string
});

/**
 * Exports userJobSchema for use outside of this file.
 */
module.exports = mongoose.model('savedJob', userJobsSchema);