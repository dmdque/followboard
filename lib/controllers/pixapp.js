'use strict';

var mongoose = require('mongoose');
    // , _ = require('lodash')

// Mongoose Schemas
var pixelGrid = mongoose.model('pixelGrid');
    // , Response = mongoose.model('Response');

exports.saveGrid = function(req, res) {
  // todo: make a model for pixelGrid

}

exports.getUser = function(req, res) {
  var DEBUG = false;
  if(DEBUG){console.log("getUser", req.params.id);}
  var userData = {};
  User.find({'_id': req.params.id}, {'google': 0})
  // .populate('user', {'_id': 1, 'email': 1})
  .exec(function(err, data){
    if(!err){
      if(DEBUG){console.log("found user: ", req.params.id);}
      userData.user = data;
      Doc.find({
          'user': req.params.id
        }, {'_id': 1, 'google.title': 1})
      // .populate('google', {'title': 1})
      .exec(function(err, data){
        if(!err){
          if(DEBUG){console.log("found docs");}
          userData.docs = data;
          EventAnalytic.find({
            'user': req.params.id
              // {'_id': req.params.id}
            // $or: [
            //   {event_name: "post: /api/add_highlight"},
            //   {event_name: "post: /api/create_text_comment"},
            //   {event_name: "post: /api/delete_highlight"},
            // ]
          }, {'_id': 0, '__v': 0})
          .populate('user', {'_id': 1, 'email': 1}).exec(function(err, data){
            if(!err){
              userData.events = data;
              if(DEBUG){console.log("found eventAnalytics");}
              return res.json(userData);
            } else {return res.send(err);}
          })
        } else {return res.send(err);}
      })
    } else {return res.send(err);}
  })
}
