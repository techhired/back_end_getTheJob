'use strict';

/** DEPENDENCIES
 * ./jobSchema.js
 * Mongoose
 */

const mongoose = require('mongoose');
const Job = require('./jobSchema');

/** notesSchema variable
 * Creates 'savedNotes' as a new mongo schema, and defines types for noteTitle, summary, and date.
 * @type {mongoose.Schema}
 */

const noteSchema = new mongoose.Schema({
  noteTitle: {type:String},
  summary: {type:String},
  date: {type:Date, default:Date.now()},
  // creator: { type: mongoose.Schema.ObjectId, ref: 'savedJob', required: true }
});

/**
 * Exports noteSchema for use outside of this file.
 */
module.exports = mongoose.model('savedNotes', noteSchema);