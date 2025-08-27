// src/app/api/products/route.js
// API route for GET and POST requests for products

import { connectToDatabase } from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET() {
  await connectToDatabase();
  const products = await Product.find({});
  return Response.json(products);
}

export async function POST(request) {
  await connectToDatabase();
  const body = await request.json();
  const { name, price } = body;
  if (!name || !price) {
    return Response.json({ error: "Name and price are required" }, { status: 400 });
  }
  const product = await Product.create({ name, price });
  return Response.json(product, { status: 201 });
}
