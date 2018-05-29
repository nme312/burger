var orm = require("../config/orm");

// orm.selectAll("burgers");
// orm.insertOne("burgers", "Whopper", false);

// targetTable, name, devoured, id

orm.updateOne("burgers", "Big Mac", false, 4);