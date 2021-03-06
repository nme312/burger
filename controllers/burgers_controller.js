var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject)
    });
});

router.post("/insert", function (req, res) {
    burger.insertOne("burgers", req.body.burger_name, false, function (data) {
        res.status(200).end();
    });
});

router.put("/update/:id", function (req, res) {
    burger.updateOne(1, req.params.id, function (data) {
        res.status(200).end();
    });
});

module.exports = router;