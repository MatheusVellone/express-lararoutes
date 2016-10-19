var path = require('path');
var express = require('express');
var lararoutes = require('express-lararoutes');
var app = express();

// load controller
lararoutes.registerRoutes(path.join(__dirname, 'routes.js'), path.join(__dirname, 'controllers'), app);


app.listen(3000);
console.log('Express started on port 3000');
