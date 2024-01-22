const mongoose = require("mongoose");
const ProductModel = require("./product");

const cartSchema = mongoose.Schema({
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;