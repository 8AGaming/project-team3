import React from "react";
import ProductCard from "./ProductCard";
import { ProductCardInterface } from "../../interfaces/ProductCardInterface";

interface ProductDetailsPageProps {
  product: ProductCardInterface;
}

const ProductDetailsPage: React.FC<ProductDetailsPageProps> = ({ product }) => {
  return <ProductCard {...product} />;
};

export default ProductDetailsPage;
