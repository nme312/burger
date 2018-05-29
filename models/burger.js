var orm = require("../config/orm");

orm.selectAll("burgers");

orm.insertOne("burgers", "Whopper", false);

orm.updateOne("burgers", "Big Mac", false, 4);