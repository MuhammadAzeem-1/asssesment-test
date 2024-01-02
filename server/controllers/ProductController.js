const asynchandler = require("express-async-handler");
const mongoose = require("mongoose");
const ProductModel = require("../Model/ProductModel");

const getProducts = asynchandler(async (req, res) => {
  const products = await ProductModel.find();

  if (products) {
    res.status(200).json(products);
  } else {
    res.status(404).json({ error: "Error in fetching" });
  }
});

module.exports = {
  getProducts,
};
