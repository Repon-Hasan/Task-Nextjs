// Example Node/Next.js API: GET /api/items/:id

import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const { id } = params;
  try {
    const productsCollection = await dbConnect("products");
    const product = await productsCollection.findOne({ _id: new ObjectId(id) });

    if (!product) return NextResponse.json({ error: "Product not found" }, { status: 404 });

    return NextResponse.json({ product }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 });
  }
}
