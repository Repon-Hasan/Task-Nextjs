// app/products/page.jsx
import ProductCard from "@/components/ProductCard";

// Fetch products from your API
async function fetchProducts() {
  const res = await fetch("http://localhost:3000/api/items", {
    cache: "no-store", // prevent caching during development
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data.products; // based on GET API returning { products: [...] }
}

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">All Products</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
}
