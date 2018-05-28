var connection = require("./connection");

var orm = {
    selectAll: function (targetTable) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, targetTable, function (err, data) {
            if (err) throw (err);
            for (var i = 0; i < data.length; i++) {
                console.log(data);
            }
        });
    },

    insertOne: function (targetTable, name, devoured) {
        var queryString = "INSERT INTO ?? SET burger_name = ? devoured = ?";
        connection.query(queryString, [targetTable, name, devoured], function (err, data) {
            if (err) throw (err);
        });
    },

    updateOne: function (targetTable, name, devoured, id) {
        var queryString = "UPDATE ?? SET burger_name = ? devoured = ? WHERE id = ?";
        connection.query(queryString, [targetTable, name, devoured, id], function (err, data) {
            if (err) throw (err);
        })
    }
}

module.exports = orm;