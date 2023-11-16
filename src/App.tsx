import "./App.css";
import Header from "./features/layout/Header/Header";
import RouterDOM from "./features/router/RouterDOM";
import { GetProducts } from "./features/products/utils/GetProducts";
import Footer from "./features/layout/Footer";
import { GetCategories } from "./features/categories/utils/GetCategories";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

const themeDark = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  GetProducts();
  GetCategories();
  return (
    <>
      <ThemeProvider theme={themeDark}>
        <Header />
        <RouterDOM />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
