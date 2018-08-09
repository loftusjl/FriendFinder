const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// set public directory
app.use(express.static(path.join(__dirname, './app/public')));

// routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// set up dynamic listening port
const PORT = process.env.PORT || 3000;

// Middleware for parsing data
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// listen
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });