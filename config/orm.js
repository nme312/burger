var connection = require("./connection");

var orm = {
    selectAll: function (targetTable, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, targetTable, function (err, data) {
            if (err) throw (err);
            for (var i = 0; i < data.length; i++) {
                console.log(data[i]);
            }
            cb(data);
        });
    },

    insertOne: function (targetTable, name, devoured, cb) {
        var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?, ?)";
        connection.query(queryString, [targetTable, name, devoured], function (err, data) {
            if (err) throw (err);
            cb(data);
        });
    },

    updateOne: function (targetTable,devoured, id, cb) {
        var queryString = "UPDATE ?? SET devoured = ? WHERE id = ?";
        connection.query(queryString, [targetTable, devoured, id], function (err, data) {
            if (err) throw (err);
            cb(data);
        });
    }
}

module.exports = orm;