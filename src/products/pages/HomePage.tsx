import { useState } from "react";
// import ProductCard from "../components/ProductCard";
import Header from "../../layout/Header";
import { useAppSelector } from "../../store/hooks";
import { store } from "../../store/store";
import { ProductCard } from "../components/ProductCard";
// import "./HomePage.css";
// import ProductDetails from "../components/ProductDetails";

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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <>
      <Header />
      <div className="container" style={{ padding: "20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Welcome to Our Online Store
        </h2>
        <div className="filter-section">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="All">All Categories</option>
            <option value="smartphones">Smartphones</option>
            <option value="fragrances">Fragrances</option>
            <option value="home-decoration">Home Decoration</option>
            <option value="groceries">Groceries</option>
            <option value="laptops">Laptops</option>
            <option value="skincare">Skincare</option>
          </select>
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
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
