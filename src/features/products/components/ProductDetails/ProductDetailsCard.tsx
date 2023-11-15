import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import OrderOptions from "./OrderOptions";
import QuantitySelector from "./QuantitySelector";
interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}
const ProductDetailsCard: React.FC<ProductCardProps> = ({
  title,
  description,
  price,
  thumbnail,
}) => {
  const [quantity, setQuantity] = React.useState(1);
  const handleQuantityChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setQuantity(event.target.value as number);
  };
  const handleAddToBasketClick = () => {
    console.log(`Added ${quantity} item(s) to the basket`);
  };
  const handlePriceComparisonClick = () => {
    console.log(`Clicked on price comparison`);
  };
  return (
    <Card
      sx={{
        maxWidth: 500,
        margin: "100px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={thumbnail}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${price}
        </Typography>
        <OrderOptions />
        <QuantitySelector value={quantity} onChange={handleQuantityChange} />
        <Button
          variant="contained"
          onClick={handleAddToBasketClick}
          sx={{
            width: "100%",
            marginTop: 2,
            backgroundColor: "#4CAF50",
            color: "#fff",
          }}
        >
          Add to Basket
        </Button>
        <Button
          variant="contained"
          onClick={handlePriceComparisonClick}
          sx={{
            width: "100%",
            marginTop: 2,
            backgroundColor: "#CAE942",
            color: "#fff",
          }}
        >
          Price Comparison
        </Button>
      </CardContent>
    </Card>
  );
};
export default ProductDetailsCard;
