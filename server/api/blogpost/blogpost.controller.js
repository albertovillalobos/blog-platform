'use strict';

var _ = require('lodash');
var Blogpost = require('./blogpost.model');

// Get list of blogposts
exports.index = function(req, res) {
  Blogpost.find(function (err, blogposts) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(blogposts);
  });
};

// Get a single blogpost
exports.show = function(req, res) {
  Blogpost.findById(req.params.id, function (err, blogpost) {
    if(err) { return handleError(res, err); }
    if(!blogpost) { return res.status(404).send('Not Found'); }
    return res.json(blogpost);
  });
};

// Creates a new blogpost in the DB.
exports.create = function(req, res) {
  Blogpost.create(req.body, function(err, blogpost) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(blogpost);
  });
};

// Updates an existing blogpost in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Blogpost.findById(req.params.id, function (err, blogpost) {
    if (err) { return handleError(res, err); }
    if(!blogpost) { return res.status(404).send('Not Found'); }
    var updated = _.merge(blogpost, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(blogpost);
    });
  });
};

// Deletes a blogpost from the DB.
exports.destroy = function(req, res) {
  Blogpost.findById(req.params.id, function (err, blogpost) {
    if(err) { return handleError(res, err); }
    if(!blogpost) { return res.status(404).send('Not Found'); }
    blogpost.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
