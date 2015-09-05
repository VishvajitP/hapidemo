var Joi = require('joi'),
  Boom = require('boom'),
  User = require('../model/user').User,
  mongoose = require('mongoose');


exports.create = {
  validate: {
    payload: {
      firstname  : Joi.string().required(),
      lastname  : Joi.string()
    }
  },
  handler: function (request, reply) {
    var user = new User(request.payload);
    user.save(function (err, user) {
      if (!err) {
        return reply(user).created('/user/' + user._id); // HTTP 201
      }
      if (11000 === err.code || 11001 === err.code) {
        console.log('error is : --->>'+err);
        return reply(Boom.forbidden("please provide another user id, it already exist"));
      }
      return reply(Boom.forbidden(err)); // HTTP 403
    });
  }
};

exports.getOne = {
  handler: function (request, reply) {
    User.findOne({ 'userId': request.params.userId }, function (err, user) {
      if (!err) {
        return reply(user);
      }
      return reply(Boom.badImplementation(err)); // 500 error
    });
  }
};

exports.get = {
  handler: function (request, reply) {
    User.find({}, function (err, user) {
      if (!err) {
        return reply(user);
      }
      return reply(Boom.badImplementation(err)); // 500 error
    });
  }
};