export let productsData = [
  {
    id: "p-1001",
    name: "Minimal Chair",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop",
    description: "A clean, minimal chair that works in any modern home office."
  },
  {
    id: "p-1002",
    name: "Soft Throw Blanket",
    price: 49,
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop",
    description: "Cozy cotton throw blanket in a warm neutral colorway."
  },
  {
    id: "p-1003",
    name: "Desk Lamp",
    price: 69,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    description: "Adjustable LED desk lamp with a soft glow diffuser."
  }
];

export function listProducts() {
  return productsData;
}

export function getProduct(id) {
  return productsData.find((p) => p.id === id);
}

export function addProduct(input) {
  const newProduct = {
    id: `p-${Date.now()}`,
    ...input
  };
  productsData = [newProduct, ...productsData];
  return newProduct;
}
