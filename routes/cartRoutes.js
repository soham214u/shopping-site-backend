const express = require("express");

const router = express.Router();

const cartController = require("../controllers/cartController");

router.post("/cart", cartController.addCartItem);

router.get("/cart", cartController.getCartItems);

router.delete("/cart/:productId", cartController.deleteCartItem);

module.exports = router;