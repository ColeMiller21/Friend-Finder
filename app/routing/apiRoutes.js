
var friendArray = require("../data/friends")

module.exports = function (app) {

    app.get("/api/data/friends", function (req, res) {
        return res.send(friendArray);
    });

    app.post("/api/data/friends", function (req, res) {
        var newFriend = req.body;
        friendArray.push(newFriend)
        var difference;
        var totalDifference;

        function myFunc(total, num) {
            return total + num
        }

        var lowestNum = 50;
        var matchIndex = -1;
        friendArray.forEach(function (element, index) {
            var allChoices = element.choices

            var diffArray = [];
            for (var i = 0; i < newFriend.choices.length; i++) {
                difference = Math.abs(newFriend.choices[i] - allChoices[i])
                diffArray.push(difference)

            }

            totalDifference = (diffArray.reduce(myFunc))

            if (totalDifference < lowestNum) {
                lowestNum = totalDifference;
                matchIndex = index;
            }

        })
        // this is the object of the matched person
        var matchedFriend = friendArray[matchIndex]
        return res.send(matchedFriend);
    });


    app.post("/api/clear", function (req, res) {
        // Empty out the arrays of data
        friendArray.length = 0;
        res.json({ ok: true });
    });
};