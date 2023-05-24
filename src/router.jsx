import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProductListPage from './pages/ProductsListPage';
import CartPage from './pages/CartPage';
import CreateProductPage from './pages/CreateProductPage';
import ProductDetailPage from './pages/ProductDetailPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/product/0" replace />} />
        <Route path="/product/:categoryId" element={<ProductListPage />} />
        <Route path="/product-detail/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/create-product" element={<CreateProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
