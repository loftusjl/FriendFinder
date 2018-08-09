// * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
var friends = require('../data/friends.js'); 
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        console.log(friends);
        res.json(friends);
    });

    app.post('/api/friends',function (req, res) {
        friends.push(req.body);
        res.json(friends);
        
        // fs.appendFile(friends, req.body, (err) => {
        //     if (err) throw err;
        //     console.log('Data appended to file!');
        //   })
    });
};