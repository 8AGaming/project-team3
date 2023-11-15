import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ProductCardInterface } from "../interfaces/ProductCardInterface";
import { FC } from "react";

export const ProductCard: FC<ProductCardInterface> = ({
  title,
  description,
  price,
  thumbnail,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "16px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease-in-out", // Add a smooth transition for the transform property
        ":hover": {
          transform: "scale(1.03)", // Increase the scale on hover
        },
      }}
    >
      <CardMedia
        component="img"
        alt="Apple iPhone 11"
        height="140"
        image={thumbnail}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "1.25rem", color: "red" }}
        >
          ${price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button size="small" sx={{ backgroundColor: "#2196F3", color: "#fff" }}>
          Learn More
        </Button>
        <Button size="small" sx={{ backgroundColor: "#4CAF50", color: "#fff" }}>
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
};