'use strict';

var api = require('./controllers/api'),
    // pixapp = require('./controllers/pixapp');
    index = require('./controllers');
    
/**
 * Application routes
 */
module.exports = function(app) {

  // T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  //   console.log(data)
  // })
  // Server API Routes
  app.route('/api/awesomeThings')
    .get(api.awesomeThings);
  app.route('/api/getFollowers')
    .get(api.getFollowers);
  app.route('/api/getBadFollowers/:num')
    .get(api.getBadFollowers);
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