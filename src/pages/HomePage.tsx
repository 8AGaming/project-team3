import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
// import "./HomePage.css";
import ProductDetails from "../components/ProductDetails";

const HomePage = () => {
  // נתוני מוצר לדוגמה
  const products = [
    { id: 1, name: "Product 1", price: 20.99, category: "Category 1" },
    { id: 2, name: "Product 2", price: 30.99, category: "Category 2" },
    { id: 3, name: "Product 3", price: 25.49, category: "Category 1" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // סינון מוצרים
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
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
            <option value="Category 1">Category 1</option>
            <option value="Category 2">Category 2</option>
          </select>
        </div>
        {/* <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div> */}
      </div>
    </>
  );
};

export default HomePage;
