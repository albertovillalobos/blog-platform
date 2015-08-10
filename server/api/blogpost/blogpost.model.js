'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BlogpostSchema = new Schema({
  title: String,
  content: String,
  active: Boolean,
  private: Boolean,
  timestamp : { type : Date, default: Date.now }
});

module.exports = mongoose.model('Blogpost', BlogpostSchema);
