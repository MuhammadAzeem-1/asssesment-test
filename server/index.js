const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDb = require("./config/connectionDb");
require("dotenv").config();
const productRoutes = require("./routes/productRoute");
const userRoute = require("./routes/usersRoute");

const app = express();
app.use(cors());

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));
//
connectDb();

const PORT = process.env.PORT || 5000;

app.use("/products", productRoutes);
app.use("/users", userRoute);

//
//app.listen(PORT, () => console.log(`Server running sdsd on port ${PORT}`));
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
