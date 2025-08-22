import { notFound } from "next/navigation";
import ProductMotion from "./ProductMotion";

// Server Component to fetch product data
async function fetchProduct(id) {
  try {
    const res = await fetch(`https://my-shop-gilt-iota.vercel.app/api/items/${id}`, { cache: "no-store" });
    if (!res.ok) return null;
    const data = await res.json();
    return data.product;
  } catch (err) {
    console.error("Failed to fetch product:", err);
    return null;
  }
}

export default async function ProductDetails({ params }) {
  const { id } = params;
  const product = await fetchProduct(id);

  if (!product) return notFound(); // return 404 if not found

  return <ProductMotion product={product} />;
}
