var orm = require("../config/orm");

// orm.selectAll("burgers");

// orm.insertOne("burgers", "Whopper", false);

// orm.updateOne("burgers", "Big Mac", false, 4);

//create burger obj with containing orm functions
var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", cb);
    },

    insertOne: function (targetTable, name, devoured, cb) {
        orm.insertOne(targetTable, name, devoured, cb);
    },

    updateOne: function(targetTable, name, devoured, id, cb) {
        orm.updateOne(targetTable, devoured, id, cb);
    }
}

module.exports = burger;