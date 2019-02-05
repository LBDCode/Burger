var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbars = {
            burgers: data
        };
        res.render("index", hbars);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create(req.body.name, function(result) {
        res.json({id: result.insertId});
    });

});

router.put("/api/burgers/:id", function(req, res) {
    var burgID = req.params.id;
    console.log(burgID, req.body.devoured);
    burger.update(req.body.devoured, burgID, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


module.exports = router;