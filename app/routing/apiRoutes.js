var friends = require('../data/friends.js');
let friendGroup = [];

// used to reduce score arrays once maths have been done
const reducer = (accumulator, currentValue) => accumulator + currentValue;

module.exports = function (app) {
    // send list of all people who have taken the survey
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    // check compatibility between end-user and friends list data
    app.post('/api/friends', function (req, res) {
        let newFriend = req.body;
        console.log(newFriend)
        let closestMatch = [];

        // check answers against each friend
        friends.forEach(friend => {
            let scoreArray = [];
            // compare survey answers to calculate compatibility
            friend.scores.forEach((score, index) => {
                scoreArray.push(Math.abs(newFriend.scores[index] - score))
            })
            // reduce score arrays 
            closestMatch.push({
                name: friend.name,
                score: scoreArray.reduce(reducer),
                photo: friend.photo
            })
        });
        // get an array of just difference of scores
        let lowNum = closestMatch.map(function (match) {
            return match.score;
        })
        // use the difference of scores array to find the closest match score
        min = Math.min.apply(null, lowNum);
        // find all friends with a score matching the closest match and push them to the friendGroup array
        closestMatch.forEach(match => findLowest(match));
        res.json(friendGroup); // send JSON of closest match friends

        
    });
};

// pushes all lowest difference matches to an array
// allows for multiple friends in the off chance there is a tie
function findLowest(match) { 
    if (match.score === min) {
        friendGroup.push({name:match.name, photo: match.photo } );
    } 
}