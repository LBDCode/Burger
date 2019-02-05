var connection = require("../config/connection.js");

var orm = {

    selectAll: function(cb) {
        connection.query("SELECT * FROM burgers", function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });

    },

    insertOne: function(burger, cb) {
        var queryStr = "INSERT INTO burgers ";
        queryStr += "(burger_name, devoured) VALUES ('";
        queryStr += burger + "', false);";
        console.log(queryStr);
        connection.query(queryStr, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function(burgStatus, burgerID, cb) {
        var queryStr = "UPDATE burgers SET devoured = " + burgStatus; 
        queryStr += " WHERE id = " + burgerID + ";";
        console.log(queryStr);
        connection.query(queryStr, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }

};




module.exports = orm;