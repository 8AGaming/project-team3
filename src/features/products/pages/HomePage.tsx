import { Box } from "@mui/material";
import { useAppSelector } from "../../../store/hooks";
import { GetCategories } from "../../categories/utils/GetCategories";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  GetCategories();
  const categories = useAppSelector((store) => store.categories).categories;
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", margin: "100px", flexWrap: "wrap" }}>
      {categories.map((category, i) => {
        return (
          <>
            <Box
              key={i}
              sx={{
                width: "200px",
                height: "200px",
                border: "inset",
                margin: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {
                navigate(`/categories/${category.category_name}`);
              }}
            >
              {category.category_name}
            </Box>
          </>
        );
      })}
    </Box>
  );
};
export default HomePage;
