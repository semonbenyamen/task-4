//first step
require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");

const Task = require("./models/Task");

async function dbconnection() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/firstApp");
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
}
dbconnection();

app.post("/Product", async(req, res) => {
    try {
        const product = await Protact.create (req.body);
        res.status(201).json({
            success: true,
            msg: "Done Created Product",
            data: Product,
        });
    } catch (error) {
        console.log(error);
    }
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find(req.query);
    res.status(201).json({
      success: true,
      count: products.length,
      data: products,
    });
    } catch (error) {
   console.log(error);
  }
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Server is running");
});
