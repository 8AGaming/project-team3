import { Box, Typography } from "@mui/material";
import { GetCategories } from "../../categories/utils/GetCategories";
import { useAppSelector } from "../../../store/hooks";
import { GetProducts } from "../utils/GetProducts";
import { ProductCard } from "../components/ProductCard";

const HomePage = () => {
  GetCategories();
  GetProducts();

  const categories = useAppSelector((store) => store.categories).categories;
  const products = useAppSelector((store) => store.products).products;

  return (
    <Box sx={{ marginTop: "80px" }}>
      {categories.map((category, i) => {
        const sortedProducts = products.filter(
          (product) => product.category === category.category_name
        );

        return (
          <>
            <Typography
              variant="h2"
              sx={{
                display: "flex",
                justifyContent: "space-around",
                margin: "5px",
              }}
            >
              {category.category_name}
            </Typography>
            <div key={i} style={{ display: "flex" }}>
              {sortedProducts.map((product) => ProductCard(product))}
            </div>
          </>
        );
      })}
    </Box>
  );
};

export default HomePage;
