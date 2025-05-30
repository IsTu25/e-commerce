const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const fs = require("fs");

// Create upload folder if it doesn't exist
const uploadPath = './upload/images';
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb+srv://isfak:124733isfak@isfakiqbal.hhon68j.mongodb.net/e-commarce");

// Root route
app.get("/", (req, res) => {
  res.send("Express app is running");
});

// Multer config
const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});
const upload = multer({ storage: storage });

// Serve uploaded images statically
app.use('/images', express.static('upload/images'));

// Upload image route
app.post("/upload", upload.single('product'), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`
  });
});

// Product model
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

// Add product route
app.post('/addproduct', async (req, res) => {
  try {
    const products = await Product.find({});
    let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

    const newProduct = new Product({
      id: id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });

    await newProduct.save();
    console.log("Product saved:", newProduct.name);

    res.json({
      success: true,
      name: newProduct.name,
    });

  } catch (err) {
    console.error("Error adding product:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Remove product route
app.post('/removeProduct', async (req, res) => {
  try {
    const { id } = req.body;

    if (!id || typeof id !== 'number') {
      return res.status(400).json({ success: false, message: "Invalid product ID" });
    }

    const deletedProduct = await Product.findOneAndDelete({ id });

    if (!deletedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    console.log("Product removed:", deletedProduct.name);
    res.json({
      success: true,
      name: deletedProduct.name,
    });
  } catch (err) {
    console.error("Error removing product:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Start server
app.listen(port, (error) => {
  if (!error) {
    console.log("Server Running on port " + port);
  } else {
    console.log("Error: " + error);
  }
});
