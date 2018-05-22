// requiring node built in modules
const path = require('path');
const friends = require('../data/friends');



// API routes

module.exports = function(app){

// (five major routes: get, post, put, patch, delete)
app.post('/api/friends', function (req, res) {
  var compatibleFriend = friends.save(req.body);
  res.json(compatibleFriend);
});

app.get('/api/friends', function (req, res) {
  res.json(friends.friends);
});

}