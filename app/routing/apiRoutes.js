
var friendArray = require("../data/friends")

module.exports = function (app) {

    app.get("/api/data/friends", function (req, res) {
        return res.json(friendArray);
    });

    app.post("/api/data/friends", function (req, res) {
        var newFriend = req.body;
        friendArray.push(newFriend)


        for (var i = 0; i < friendArray.length; i++) {
            //console.log("just the choices out of the friend array " + friendArray[i].choices);
        }

        friendArray.forEach(function (element) {
            console.log("THIS IS ELEMENT " + element.choices)
            console.log("------------------------------------");
            console.log(element[0])
        })

        console.log(friendArray)

        return res.send(newFriend);
    });






    app.post("/api/clear", function (req, res) {
        // Empty out the arrays of data
        friendArray.length = 0;
        res.json({ ok: true });
    });
};