// models/Product.js
// Defines the Product schema and model

import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({

  name: {
    type: String,
    required: [true, "Product name is required"],
  },
  img: {
    type: String,
    required: [true, "Product image is required"],
  },
  description: {
    type: String,
    required: [true, "Product description is required"],
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
  },
});


// Avoid model overwrite in dev
export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
