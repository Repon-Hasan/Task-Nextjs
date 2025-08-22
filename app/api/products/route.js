import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";


// POST /api/products
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, description, price, image } = body;

    if (!name || !description || !price || !image) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const productsCollection = await dbConnect("products");

    const newProduct = {
      name,
      description,
      price: Number(price),
      image,
      createdAt: new Date(),
    };

    const result = await productsCollection.insertOne(newProduct);

    return NextResponse.json(
      { message: "Product added successfully", productId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to add product" },
      { status: 500 }
    );
  }
}
