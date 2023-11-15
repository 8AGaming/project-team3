import { Box } from "@mui/material";
import { useAppSelector } from "../../../store/hooks";
import { GetCategories } from "../../categories/utils/GetCategories";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
                navigate(`/home/categories/${category.category_name}`);
                const clicks = category.clicks;
                const updatedData = {
                  clicks: clicks + 1,
                };
                axios
                  .put(
                    `http://localhost:3333/api/categories/${category.category_name}`,
                    updatedData
                  )
                  .then((res) => console.log(res.data))
                  .catch((error) => console.log(error));
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
