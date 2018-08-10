// * A GET Route to `/survey` which should display the survey page.
// * A default, catch-all route that leads to `home.html` which displays the home page. 
const path = require('path');
const surveyQuestions = require('../data/surveyQuestions');
module.exports = function (app) {

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public', 'home.html'));
    });
    app.get('/survey', function (req, res) {
        res.render('index', {surveyQuestions});
        // res.sendFile(path.join(__dirname, '../public', 'survey.html'));
    });

};