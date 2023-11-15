import { SetStateAction, useState } from "react";
import Header from "../../layout/Header/Header";
import { useAppSelector } from "../../../store/hooks";
import { ProductCard } from "../components/ProductCard";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
const HomePage = () => {
  // נתוני מוצר לדוגמה
  const products = useAppSelector((store) => store.products).products;

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // סינון מוצרים
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "All" || product.category === selectedCategory)
  );

  const handleSearchChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(e.target.value);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      <Header />
      <div className="container" style={{ padding: "20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Welcome to Our Online Store
        </h2>

        <div className="filter-section">
          <TextField
            label="Search products..."
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
          />

          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>Category selected</InputLabel>
            <Select value={selectedCategory} onChange={handleChange}>
              <MenuItem value={"All"} selected>
                All Categories
              </MenuItem>
              <MenuItem value={"smartphones"}>Smartphones</MenuItem>
              <MenuItem value={"fragrances"}>Fragrances</MenuItem>
              <MenuItem value={"home-decoration"}>Home Decoration</MenuItem>
              <MenuItem value={"groceries"}>Groceries</MenuItem>
              <MenuItem value={"laptops"}>Laptops</MenuItem>
              <MenuItem value={"skincare"}>Skincare</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={0}
              title={product.title}
              description={product.description}
              thumbnail={product.thumbnail}
              price={product.price}
              category={product.category}
              _id={""}
              rating={0}
              stock={0}
              brand={""}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default HomePage;
