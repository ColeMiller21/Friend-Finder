app.get("/api/friends", function (req, res) {
    return res.json(tables);

});

app.post("/api/reservations", function (req, res) {
    console.log(res);

});
