'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing');

var Twit = require('twit');
var T = new Twit({
    consumer_key: 'p1IDUamMTvMOwc82KpH8JRw6X'
  , consumer_secret: 'cVYhp32SCtZEIJybN25QICnsNwos8Q7BDZhReCgLzOELwgYPIu'
  , access_token: '156746251-Fm6nFEVRJxWQM64pILAb1ZTHXfXEq593n733uJdL'
  , access_token_secret: '9LlklbvWsaQ49Kq9G9rR5buqcpZ4dEzoU9xKisoYCAMOp'
})

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

exports.getFollowers = function(req, res) {
  console.log("in getFollowers()")

  // T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  //   console.log("data: ", data)
  //   console.log("err: ", err) 
  //   // console.log("response: ", response) 
  // })
  T.get('followers/ids', { screen_name: 'kyudan2' },  function (err, data, response) {
    return res.json(data);
  }) 
  
  //  prune your followers list; unfollow a friend that hasn't followed you back
//
// Bot.prototype.prune = function (callback) {
//   var self = this;
  
//   this.twit.get('followers/ids', function(err, reply) {
//       if(err) return callback(err);
      
//       var followers = reply.ids;
      
//       self.twit.get('friends/ids', function(err, reply) {
//           if(err) return callback(err);
          
//           var friends = reply.ids
//             , pruned = false;
          
//           while(!pruned) {
//             var target = randIndex(friends);
            
//             if(!~followers.indexOf(target)) {
//               pruned = true;
//               self.twit.post('friendships/destroy', { id: target }, callback);   
//             }
//           }
//       });
//   });
};
exports.getBadFollowers = function(req, res) {
  console.log("will return " + req.params.num + " bad followers");
  return res.json("iunno");
  T.get('followers/ids', { screen_name: 'kyudan2' },  function (err, data, response) {
    return res.json(data);
  })
  
} 

exports.unfollow = function(req, res) {
  self.twit.post('friendships/destroy', { id: req.body.target }
    , function(err, reply) {
      if(err) console.log(err);

      var name = reply.screen_name
      console.log('\nunfollowed @'+ name);
    });
  return res.json(data);
};
