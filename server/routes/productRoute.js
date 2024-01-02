const express = require("express");
const { getProducts } = require("../controllers/ProductController");

const router = express.Router();

// get Posts Routs
router.get("/", getProducts);

module.exports = router;
