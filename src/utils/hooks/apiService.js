export async function fetchCategories() {
  const response = await fetch('http://localhost:8000/categories');
  return response.json();
}
