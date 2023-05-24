export async function fetchCategories() {
  const response = await fetch('http://localhost:8000/categories');
  return response.json();
}

export async function fetchProducts() {
  const response = await fetch('http://localhost:8000/products');
  return response.json();
}

export async function addToCart({ productId, option, name, price, image }) {
  const response = await fetch('http://localhost:8000/cart', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productId, option, name, price, image }),
  });

  return response.json();
}

export async function fetchCart() {
  const response = await fetch('http://localhost:8000/cart');
  return response.json();
}
