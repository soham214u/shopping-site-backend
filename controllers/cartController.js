const Cart = require("../models/cart");
const ProductModel = require("../models/product");

exports.addCartItem = async (req, res) => {
    try {
        const { productId } = req.body;

        const product = await ProductModel.findById(productId);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        let cart = await Cart.findOne();
        if (!cart) {
            cart = new Cart();
        }

        cart.items.push(product);
        await cart.save();

        res.status(200).json({ message: "Product added to cart successfully." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCartItems = async (req, res) => {
    try {
        const cart = await Cart.findOne().populate("items");

        res.status(200).json({ items: cart ? cart.items : [] });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

exports.deleteCartItem = async (req, res) => {
    try {
        const { productId } = req.params;
        const cart = await Cart.findOne();

        cart.items = cart.items.filter(item => item.toString() !== productId);
        await cart.save();

        res.status(200).json({ message: "Product removed from cart successfully." });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};