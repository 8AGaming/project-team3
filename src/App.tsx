import "./App.css";
import Header from "./features/layout/Header";
import RouterDOM from "./features/router/RouterDOM";
import { GetProducts } from "./features/products/utils/GetProducts";
import Footer from "./features/layout/Footer";
import { GetCategories } from "./features/categories/utils/GetCategories";

const App = () => {
  GetProducts();
  GetCategories();
  return (
    <>
      <Header />
      <RouterDOM />
      <Footer />
    </>
  );
};

export default App;
