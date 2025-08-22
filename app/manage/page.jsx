// import { auth } from "@/auth";
// import { addProduct, listProducts } from "@/lib/data";
// import { redirect } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { revalidatePath } from "next/cache";

// export default async function ManagePage() {
//   const session = await auth();
//   if (!session) redirect("/login");

//   async function createProduct(formData) {
//     "use server";
//     const name = String(formData.get("name") || "");
//     const price = Number(formData.get("price") || 0);
//     const image =
//       String(formData.get("image") || "https://picsum.photos/seed/new/1200/800");
//     const description = String(formData.get("description") || "");

//     if (!name || !description || !price) return;

//     addProduct({ name, price, image, description });
//     revalidatePath("/products");
//     redirect("/products");
//   }

//   const products = listProducts();

//   return (
//     <div className="grid gap-10 lg:grid-cols-2">
//       {/* Add form */}
//       <section className="rounded-3xl border bg-white p-6 shadow-sm">
//         <h1 className="mb-4 text-2xl font-bold">Add a new product</h1>
//         <form action={createProduct} className="space-y-4">
//           <div>
//             <label className="mb-2 block text-sm font-medium">Name</label>
//             <input
//               name="name"
//               className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900"
//               placeholder="Product name"
//               required
//             />
//           </div>

//           <div>
//             <label className="mb-2 block text-sm font-medium">Price (USD)</label>
//             <input
//               name="price"
//               type="number"
//               min="0"
//               step="1"
//               className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900"
//               placeholder="99"
//               required
//             />
//           </div>

//           <div>
//             <label className="mb-2 block text-sm font-medium">Image URL (optional)</label>
//             <input
//               name="image"
//               className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900"
//               placeholder="https://images.unsplash.com/photo-..."
//             />
//           </div>

//           <div>
//             <label className="mb-2 block text-sm font-medium">Description</label>
//             <textarea
//               name="description"
//               rows={4}
//               className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900"
//               placeholder="What makes it great?"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="rounded-xl bg-gray-900 px-5 py-2 font-semibold text-white hover:bg-gray-800"
//           >
//             Add product
//           </button>
//         </form>
//       </section>

//       {/* Current products */}
//       <section className="space-y-4">
//         <h2 className="text-2xl font-bold">Current products</h2>
//         <div className="grid gap-4 sm:grid-cols-2">
//           {products.map((p) => (
//             <Link
//               key={p.id}
//               href={`/products/${p.id}`}
//               className="overflow-hidden rounded-2xl border bg-white shadow-sm hover:shadow-md"
//             >
//               <div className="relative aspect-[4/3]">
//                 <Image src={p.image} alt={p.name} fill className="object-cover" />
//               </div>
//               <div className="p-3">
//                 <div className="flex items-center justify-between">
//                   <p className="font-medium">{p.name}</p>
//                   <p className="font-semibold">${p.price}</p>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }
