const express = require("express");
const Barang = require("../models/Barang");

const route = express.Router();

route.get("/", async (req, res) => {
  res.render("index", { data: await Barang.findAll() });
});

route
  .route("/add")
  .get((req, res) => res.render("addBarang"))
  .post(async (req, res) => {
    const data = req.body;
    try {
      await Barang.create(data);
      res.status(200).json({ message: "Data berhasil di buat" });
    } catch (error) {
      console.log(error);
    }
  });

route
  .route("/edit/:id")
  .get(async (req, res) => {
    const data = await Barang.findOne({
      where: {
        id: req.params.id,
      },
    });
    data ? res.render("editBarang", { data }) : res.redirect("/");
  })
  .put(async (req, res) => {
    const data = req.body;

    try {
      await Barang.update(data, {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({ message: "data berhasil di ubah" });
    } catch (error) {
      console.log(error);
    }
  });

route
  .route("/delete/:id")
  .get(async (req, res) => {
    const data = await Barang.findOne({
      where: {
        id: req.params.id,
      },
    });
    data ? res.render("deleteBarang", { data }) : res.redirect("/");
  })
  .delete(async (req, res) => {
    const { nama, harga, jumlah } = req.body;
    const { namaBarang, hargaBarang, jumlahBarang } = await Barang.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (nama == namaBarang && harga == hargaBarang && jumlah == jumlahBarang) {
      try {
        await Barang.destroy({
          where: {
            id: req.params.id,
            namaBarang: nama,
            hargaBarang: harga,
            jumlahBarang: jumlah,
          },
        });
        res.status(200).json({ message: "data berhasil di hapus" });
      } catch (error) {
        console.log(error);
      }
    } else res.status(400).json({ message: "data tidak sama" });
  });

module.exports = route;
