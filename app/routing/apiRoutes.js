
var friendArray = require("../data/friends")

module.exports = function (app) {

    app.get("/api/data/friends", function (req, res) {
        return res.json(friendArray);
    });



    app.post("/api/data/friends", function (req, res) {
        var newFriend = req.body;
        friendArray.push(newFriend)
        console.log(friendArray)
    });

    app.post("/api/clear", function (req, res) {
        // Empty out the arrays of data
        friendArray.length = 0;
        res.json({ ok: true });
    });
};