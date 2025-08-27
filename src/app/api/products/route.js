// src/app/api/products/route.js
import { connectToDatabase } from "@/lib/mongodb";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDatabase();
  const products = await Product.find({});
  return NextResponse.json(products);
}

export async function POST(request) {
  await connectToDatabase();
  const body = await request.json();
  const { name, price, description, img } = body;

  if (!name || !price) {
    return NextResponse.json(
      { error: "Name and price are required" },
      { status: 400 }
    );
  }

  const product = await Product.create({
    name,
    price: Number(price),
    description,
    img,
  });

  return NextResponse.json(product, { status: 201 });
}
