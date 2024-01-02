const express = require("express");
const { postUsers, getUsers } = require("../controllers/UserController");

const router = express.Router();

// get Posts Routs
router.post("/", postUsers);

router.get("/", getUsers);

module.exports = router;
