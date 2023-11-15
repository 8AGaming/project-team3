import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Fab, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { productInCart } from "../types/productInCart";

const ProductInCart = (productOnCart: productInCart) => {
  const [quantityState, setQuantity] = useState(productOnCart.quantity);

  const handelQuantity = (type: string) => {
    if (type === "-") {
      if (quantityState > 1) {
        setQuantity(quantityState - 1);
      } else {
        setQuantity(quantityState);
      }
    } else if (type === "+") {
      setQuantity(quantityState + 1);
    }
  };
  return (
    <Card sx={{ width: 250, margin: 1 }}>
      <CardMedia
        sx={{ height: 140, maxWidth: 250 }}
        image={productOnCart.product.images[0]}
        title={productOnCart.product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {productOnCart.product.title}
        </Typography>
        <Grid>
          {productOnCart.product.discountPercentage &&
          productOnCart.product.discountPercentage > 0 ? (
            <>
              <Typography variant="body1" sx={{ display: "inline", margin: 1 }}>
                {parseFloat(
                  (
                    ((100 - productOnCart.product.discountPercentage) / 100) *
                    productOnCart.product.price
                  ).toFixed(1)
                )}
                $
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textDecoration: "line-through", display: "inline" }}
              >
                {productOnCart.product.price}$
              </Typography>
            </>
          ) : (
            <Typography variant="body1" sx={{ display: "inline" }}>
              {productOnCart.product.price}$
            </Typography>
          )}
        </Grid>
        <Grid>
          <Typography variant="body2" color="text.secondary">
            quantity {quantityState}
          </Typography>
        </Grid>
      </CardContent>
      <CardActions>
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Fab size="small" color="inherit" onClick={() => handelQuantity("+")}>
            <AddIcon />
          </Fab>
          <Fab
            size="small"
            color="inherit"
            disabled={quantityState === 1 ? true : false}
            onClick={() => handelQuantity("-")}
          >
            <RemoveIcon />
          </Fab>
          <Fab size="small" color="inherit">
            {/* להוסיף טיפול במחיקה של מוצר מהמערך של עגלת הקניות */}
            <DeleteIcon />
          </Fab>
        </Box>
      </CardActions>
    </Card>
  );
};
export default ProductInCart;
