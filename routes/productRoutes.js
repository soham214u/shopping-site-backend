const express = require("express");

const router = express.Router();

const productController = require("../controllers/productController");

router.post("/products", productController.createProduct);

router.get("/products", productController.products);

router.get("/products/:id", productController.singleProduct);

router.delete("/products/:id", productController.deleteProduct);

router.put("/products/:id", productController.updateProduct);

router.get("/product", productController.getRandomProducts);

router.get("/mobiles", productController.categoryOneProduct);

router.get("/headphones", productController.categoryTwoProduct);

router.get("/smartwatches", productController.categoryThreeProduct);

module.exports = router;
