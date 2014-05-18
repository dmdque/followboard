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
T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  console.log("data: ", data)
  console.log("err: ", err) 
  // console.log("response: ", response) 
})
T.get('followers/ids', { screen_name: 'danielque' },  function (err, data, response) {
  console.log("data: ", data)
  console.log("err: ", err) 
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
  return res.json("not finished yet.");
  
  
};
