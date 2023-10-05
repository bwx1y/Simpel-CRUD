const { Sequelize } = require("sequelize");

const data = {
  database: "toko_kasir",
  username: "root",
  password: "nedy_888",
};

const database = new Sequelize(data.database, data.username, data.password, {
  host: process.env.DATABASE_HOST,
  dialect: "mysql",
});

module.exports = database;
