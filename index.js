require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");
const cartRouter = require("./routes/cartRoutes");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));

const mongoDbUrl = process.env.SECRET_KEY;

mongoose.connect(mongoDbUrl, {});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Mongodb connection error: "));

db.once("open", () => {
  console.log("Connected to MongoDB!");
});

app.use(express.json());
app.use(productRouter);

app.use(express.json());
app.use(userRouter);

app.use(express.json());
app.use(cartRouter);

app.listen(4000, "0.0.0.0", () => {
  console.log("Server started at port 4000");
});