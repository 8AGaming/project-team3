import "./App.css";
// import Footer from "./components/Footer";
import Header from "./layout/Header";
import RouterDOM from "./router/RouterDOM";
import { GetProducts } from "./products/utils/GetProducts";

const App = () => {
  GetProducts();
  return (
    <>
      <Header />
      <RouterDOM />
      {/* <Footer /> */}
    </>
  );
};

export default App;
