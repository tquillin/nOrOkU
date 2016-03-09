var express = require('express');
var app = express();

// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// var mongoose = require('mongoose');

// var songSchema = mongoose.Schema({
//   name: {type: String},
//   description: {type: String}
// }, {
//   timestamps: true
// });

// var Song = mongoose.model('Song', songSchema);

// mongoose.connect('mongodb://localhost/song-01');
//

//views// set the view engine to ejs
// app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
    // ejs render automatically looks in the views folder
    // res.render('index');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
