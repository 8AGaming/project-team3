import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { PropProducts } from "../../comparison/components/ComparisableProductInfo";
import { Box, Fab, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const ProductInCart = ({ product }: PropProducts) => {
  const [quantity, setQuantity] = useState(1);

  const handelQuantity = (type: string) => {
    if (type === "-") {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      } else {
        setQuantity(quantity);
      }
    } else if (type === "+") {
      setQuantity(quantity + 1);
    }
  };
  return (
    <Card sx={{ width: 250, margin: 1 }}>
      <CardMedia
        sx={{ height: 140, maxWidth: 250 }}
        image={product.thumbnail}
        title={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Grid>
          {product.discountPercentage && product.discountPercentage > 0 ? (
            <>
              <Typography variant="body1" sx={{ display: "inline", margin: 1 }}>
                {parseFloat(
                  (
                    ((100 - product.discountPercentage) / 100) *
                    product.price
                  ).toFixed(1)
                )}
                $
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textDecoration: "line-through", display: "inline" }}
              >
                {product.price}$
              </Typography>
            </>
          ) : (
            <Typography variant="body1" sx={{ display: "inline" }}>
              {product.price}$
            </Typography>
          )}
        </Grid>
        <Grid>
          <Typography variant="body2" color="text.secondary">
            quantity {quantity}
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
            disabled={quantity === 1 ? true : false}
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
