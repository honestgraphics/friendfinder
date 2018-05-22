// requiring node built in modules
const path = require('path');

// Routes for displaying html pages

module.exports = function(app){

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../public/home.html'));
  console.log(path.resolve(__dirname, '../public/home.html'));
});

app.get('/survey', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../public/survey.html'));
  console.log(path.resolve(__dirname, '../public/survey.html'));
});

}