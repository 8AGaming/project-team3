import { useParams } from "react-router-dom";

//   return <>{category}</>;
// };

// export default CategoryPage;

import { Box, Typography } from "@mui/material";
import { GetCategories } from "../../categories/utils/GetCategories";
import { useAppSelector } from "../../../store/hooks";
import { GetProducts } from "../../products/utils/GetProducts";
import { ProductCard } from "../../products/components/ProductCard";

const CategoryPage = () => {
  const { category } = useParams();
  GetCategories();
  GetProducts();

  const products = useAppSelector((store) => store.products).products;

  const productsNow = products.filter(
    (product) => product.category === category
  );

  return (
    <div style={{ margin: "80px" }}>
      <Typography
        variant="h2"
        sx={{
          display: "flex",
          justifyContent: "space-around",
          margin: "5px",
        }}
      >
        {category}
      </Typography>

      <Box>{productsNow.map((product) => ProductCard(product))}</Box>
    </div>
  );
};

export default CategoryPage;
