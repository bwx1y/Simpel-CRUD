const { DataTypes } = require("sequelize");
const database = require("../config/Database");

const Barang = database.define(
  "barang",
  {
    namaBarang: DataTypes.TEXT,
    jumlahBarang: DataTypes.INTEGER,
    hargaBarang: DataTypes.INTEGER,
  },
  {
    freezeTableName: true,
  }
);

module.exports = Barang;

(() => {
  Barang.sync();
})();
