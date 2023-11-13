import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import React from "react";

const ProductDetails = () => {
  const [quantity, setQuantity] = React.useState(1);

  const handleQuantityChange = (event: {
    target: { value: React.SetStateAction<number> };
  }) => {
    setQuantity(event.target.value);
  };

  // ניהול כפתור הוסף לסל
  const handleAddToBasketClick = () => {
    console.log(`Added ${quantity} item(s) to the basket`);
  };
  //   ניהול כפתור השוואת מחירים
  const handlePriceComparisonClick = () => {
    console.log(`Added ${quantity} item(s) to the basket`);
  };

  return (
    <Card
      sx={{
        maxWidth: 500,
        margin: "16px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardMedia
        component="img"
        alt="Apple iPhone 11"
        height="140"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18L3oYjp6SrpQxrOHgmF_dFfa2pLOad_Gog&usqp=CAU"
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          iPhone 11 Details
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Apple iPhone 11 128GB Apple ACTIVE white
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: $1849
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Display: 6.1 inches Liquid Retina HD display
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Camera: Dual-camera system with 12MP Ultra-Wide and Wide cameras
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Processor: A13 Bionic chip with third-generation Neural Engine
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Battery: Built-in rechargeable lithium‑ion battery
        </Typography>

        {/* אפשרויות משלוח*/}
        <Typography variant="h6" color="text.primary" sx={{ marginTop: 2 }}>
          Order Options
        </Typography>
        <TextField
          select
          label="Delivery Option"
          value="standard"
          sx={{ width: "100%", marginTop: 1 }}
        >
          <MenuItem value="standard">Standard Delivery</MenuItem>
          <MenuItem value="express">Express Delivery</MenuItem>
        </TextField>

        {/* כמות הזמנה */}
        <Typography variant="h6" color="text.primary" sx={{ marginTop: 2 }}>
          Quantity
        </Typography>
        <TextField
          select
          label="Quantity"
          value={quantity}
          onChange={handlePriceComparisonClick}
          sx={{ width: "100%", marginTop: 1 }}
        >
          {[1, 2, 3, 4, 5].map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </TextField>

        {/* הוסף לסל*/}
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
        {/* השוואת מחיר*/}
        <Button
          variant="contained"
          onClick={handlePriceComparisonClick}
          sx={{
            width: "100%",
            marginTop: 2,
            backgroundColor: "#cae942",
            color: "#fff",
          }}
        >
          price comparison{" "}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;
