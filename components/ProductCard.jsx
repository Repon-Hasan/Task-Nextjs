import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="rounded-xl border p-4 shadow-sm hover:shadow-md transition">
      <div className="relative h-48 w-full">
        <Image src={product.image} alt={product.name} fill className="object-cover rounded-lg" />
      </div>
      <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
      <Link
        href={`/products/${product._id}`}
        className="mt-2 inline-block text-blue-600 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
}
