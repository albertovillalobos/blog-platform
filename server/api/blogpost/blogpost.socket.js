/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Blogpost = require('./blogpost.model');

exports.register = function(socket) {
  Blogpost.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Blogpost.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('blogpost:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('blogpost:remove', doc);
}