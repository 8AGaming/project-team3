import { Routes, Route } from "react-router-dom";
import SignInPage from "../users/pages/SignInPage";
import SignUpPage from "../users/pages/SignUpPage";
import HomePage from "../products/pages/HomePage";
import CategoriesPage from "../categories/pages/CategoriesPage";
import HomeScreen from "../products/pages/HomeScreen";
import ProductsPage from "../products/pages/ProductsPage";
import CategoryPage from "../categories/pages/CategoryPage";
const RouterDom = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/home-screen" element={<HomeScreen />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/categories/:category" element={<CategoryPage />} />
      <Route path="/products" element={<ProductsPage />} />
      {/* <Route path="/product" element={<ProductDetailsPage />} />
      <Route path="/compare" element={<ComparePage />} />
      <Route path="/cart" element={<CartPage />} /> */}
    </Routes>
  );
};
export default RouterDom;
