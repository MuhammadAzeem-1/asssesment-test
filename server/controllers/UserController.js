const asynchandler = require("express-async-handler");
const mongoose = require("mongoose");
const UserModel = require("../Model/UsersModel");

const postUsers = asynchandler(async (req, res) => {
  const { email, name, star, productName } = req.body;

  if (!name || !email) {
    res.status(400);
    throw new Error("All Feilds are Mandatory");
  }

  // const result = await UserModel.findOne({ email });

  // if (result.email && (result.productName = "Hospital Managaement Tool	")) {
  //   return res.status(409).json({ error: "*You Already Rate this Productr" });
  // } else if (
  //   result.email &&
  //   (result.productName = "Inventary Management Tool")
  // ) {
  //   return res.status(409).json({ error: "*You Already Rate this Product" });
  // } else if (result.email && (result.productName = "Product Management Tool")) {
  //   return res.status(409).json({ error: "*You Already Rate this Product" });
  // }

  // console.log("ahsdhgh");

  const user = await UserModel.create({
    email,
    name,
    star,
    productName,
  });

  if (!user) {
    res.status(401).json({ error: "*unable to register" });
  }
  res.status(200).json(user);
});

const getUsers = asynchandler(async (req, res) => {
  const products = await UserModel.find().sort({ _id: -1 });

  if (products) {
    res.status(200).json(products);
  } else {
    res.status(404).json({ error: "Error in fetching" });
  }
});

module.exports = {
  postUsers,
  getUsers,
};
