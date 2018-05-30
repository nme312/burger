var orm = require("../config/orm");

// orm.selectAll("burgers");

// orm.insertOne("burgers", "Whopper", false);

// orm.updateOne("burgers", "Big Mac", false, 4);

//create burger obj with containing orm functions
var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", cb);
    },

    insertOne: function (tableName, name, devoured, cb) {
        orm.insertOne(tableName, name, devoured, cb);
    }
}

module.exports = burger;