import { Routes, Route } from "react-router-dom";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import HomePage from "../pages/HomePage";
import CategoriesPage from "../pages/CategoriesPage";
const RouterDom = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/categories" element={<CategoriesPage />} />
    </Routes>
  );
};
export default RouterDom;
