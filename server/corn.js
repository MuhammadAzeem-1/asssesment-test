const cron = require("node-cron");
const ProductModel = require("./Model/ProductModel");

cron.schedule("0 0 * * *", async () => {
  try {
    const products = await ProductModel.find();
    products.forEach(async (product) => {
      product.price = Math.floor(Math.random() * 300) + 1;
      await product.save();
    });
    console.log("Product prices updated successfully.");
  } catch (error) {
    console.error("Error updating product prices:", error);
  }
});
