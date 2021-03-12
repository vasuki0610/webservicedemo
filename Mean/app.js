var express = require('express');
var app = express();
var path=require('path');
var routes = require('./routes');
// Define the port to run on
app.set('port', 3000);

// Add middleware to console log every request
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next(); 
});
// Set static directory before defining routes
//app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// Add some routing
app.use('/api', routes);
// app.get('/', function(req, res) {
//   console.log("GET the homepage", req.path);
//   res
//     .status(200)
//     .sendFile(path.join(__dirname, 'public', 'index.html'));
// });
// app.get('/',function(req,res){
// console.log("GET the homepage");
// res
// .status(404)
// .send("Express yourself");
// });
// app.get('/json',function(req,res){
//   console.log("GET the json");
//   res
//   .status(200)
//   .json({"jsondata":true});
//   });
  
//   app.get('/file',function(req,res){
//     console.log("GET the file");
//     res
//     .status(200)
//     .sendFile(path.join(__dirname,'app.js'));
//     });
// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});
//console.log("Me first!");