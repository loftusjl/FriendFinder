const path = require('path');
const surveyQuestions = require('../data/surveyQuestions');
module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render('index');
    });
    app.get('/survey', function (req, res) {
        res.render('survey', {surveyQuestions});
    });

};