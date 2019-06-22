'use strict';

/** DEPENDENCIES
 * ./jobSchema.js
 * Mongoose
 */
const mongoose = require('mongoose');
// const Job = require('./jobSchema');

/** notesSchema variable
 * Creates 'savedNotes' as a new mongo schema, and defines types for noteTitle, summary, and date.
 * @type {mongoose.Schema}
 */
const noteSchema = new mongoose.Schema({
  organization: {type: String},
  title: {type:String},
  location: {type:String},
  summary: {type:String},
  date: {type:Date, default:Date.now()},
  url: {type:String},
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

/**
 * Exports noteSchema for use outside of this file.
 */
let Notes =  mongoose.model('Notes', noteSchema);

module.exports = Notes;