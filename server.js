// requiring node built in modules
const path = require('path');

// requiring node third party nodules
const express = require('express');
const bodyParser = require('body-parser');

// invoke express function and assign return value to "app" variable
var app = express();

// use middleware (app.use) to tell express/node that you modify requests when they come in
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// require routes
require('./app/routing/htmlroutes.js')(app);
require('./app/routing/apiroutes.js')(app);


// allows our app to use a public folder
app.use(express.static(__dirname + '/app/public'));











app.listen(process.env.PORT || 3000, function () {
  console.log('App listening on localhost:3000')
});