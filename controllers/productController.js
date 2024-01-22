const ProductModel = require("../models/product");

exports.createProduct = async (req, res) => {
  try {
    const { title, description, category, price, imgUrl } = req.body;

    let newProduct = new ProductModel({
      title,
      description,
      category,
      price,
      imgUrl,
    });

    newProduct = await newProduct.save();

    res.status(200).json(newProduct);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.products = async (req, res) => {
  try {
    const products = await ProductModel.find({});

    res.status(200).json(products);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.singleProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    const singleProduct = await ProductModel.findById(productId);

    if (!singleProduct) {
      return res.status(404).json({ message: "No such product found" });
    }

    res.status(200).json(singleProduct);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    await ProductModel.findByIdAndRemove(productId)

    res.status(200).json({message: `Product with id ${productId} deleted successfully!`});
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { title, description, category, price, imgUrl } = req.body;
    const productId = req.params.id;

    let updatedProduct = new ProductModel({
      title,
      description,
      category,
      price,
      imgUrl,
      _id: productId,
    });

    await ProductModel.findByIdAndUpdate(productId, updatedProduct);

    res.status(200).json({message: `Product with id ${productId} updated successfully!`});
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};


exports.getRandomProducts = async (req, res) => {
  try {
    const count = await ProductModel.countDocuments();

    const limit = 20;
    const randomProducts = [];

    while (randomProducts.length < limit) {
      const randomIndex = Math.floor(Math.random() * count);

      const randomProduct = await ProductModel.findOne().skip(randomIndex);

      if (!randomProducts.some((product) => product._id.equals(randomProduct._id))) {
        randomProducts.push(randomProduct);
      }
    }

    res.status(200).json(randomProducts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



exports.categoryOneProduct = async (req, res) => {
  try {
    const categoryOneProduct = await ProductModel.find({ category: "Mobiles" });

    res.status(200).json(categoryOneProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



exports.categoryTwoProduct = async (req, res) => {
  try {
    const categoryTwoProduct = await ProductModel.find({ category: "Headphones"});

    res.status(200).json(categoryTwoProduct);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};



exports.categoryThreeProduct = async (req, res) => {
  try {
    const categoryThreeProduct = await ProductModel.find({ category: "Smartwatches"});

    res.status(200).json(categoryThreeProduct);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};