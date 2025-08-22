"use server"
import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    const productsCollection = await dbConnect("products");
    const products = await productsCollection.find({}).toArray();
    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
