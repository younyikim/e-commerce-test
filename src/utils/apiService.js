export async function fetchCategories() {
  const response = await fetch('http://localhost:8000/categories');
  return response.json();
}

export async function fetchProducts() {
  const response = await fetch('http://localhost:8000/products');
  return response.json();
}
