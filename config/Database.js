const { Sequelize } = require("sequelize");

const data = {
				database: "", /** Nama database anda */
				username: "", /** Username mysql anda */
				password: "", /** Password mysql anda */
};

const database = new Sequelize(data.database, data.username, data.password, {
  host: process.env.DATABASE_HOST,
  dialect: "mysql",
});

module.exports = database;
