var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.selectAll(function(res) {
          cb(res);
        });
      },

    create: function(burgerName, cb) {
      orm.insertOne(burgerName, function(res) {
        cb(res);
      });
    },

    update: function(status, burgerID, cb) {
      orm.updateOne(status, burgerID, function(res) {
        cb(res);
      });
    },

};



module.exports = burger;