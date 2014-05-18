'use strict';

var api = require('./controllers/api'),
    // pixapp = require('./controllers/pixapp');
    index = require('./controllers');

var Twit = require('twit');
var T = new Twit({
    consumer_key: 'p1IDUamMTvMOwc82KpH8JRw6X'
  , consumer_secret: 'cVYhp32SCtZEIJybN25QICnsNwos8Q7BDZhReCgLzOELwgYPIu'
  , access_token: '156746251-fdS2QMwaGi2g3TeirieYpFX183ZKWVO0yveWA3w9'
  , access_token_secret: 'T0kvYsfIe72jEsMpjpy2Qt1ewxzIjHQw0OUm3yZHZdUQY'
})

/**
 * Application routes
 */
module.exports = function(app) {

  T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  console.log(data)
})
  // Server API Routes
  app.route('/api/awesomeThings')
    .get(api.awesomeThings);
  app.route('/api/getFollowers')
    .get(api.getFollowers);
  // app.route('/api/saveGrid')
  //   .get(pixapp.saveGrid);
  
  // app.get('/api/subjects/:query', profile.subjectQuery);
  // app.post('/api/add_subject', profile.addSubject);

  // All undefined api routes should return a 404
  app.route('/api/*')
    .get(function(req, res) {
      res.send(404);
    });

  // All other routes to use Angular routing in app/scripts/app.js
  app.route('/partials/*')
    .get(index.partials);

  app.route('/*')
    .get(index.index);
};