const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "mechanicalGod@2025", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
