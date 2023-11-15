import {
  SwipeableDrawer,
  Button,
  Box,
  Divider,
  List,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductInCart from "./ProductInCart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCart";
import { useAppSelector } from "../../../store/hooks";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { productInCart } from "../types/productInCart";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const [localStorageCart, setLocalStorageCart] = useState([]);
  const cart = useAppSelector((state) => state.cart.cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setLocalStorageCart(JSON.parse(localStorage.getItem("cart")));
  }, [cart]);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (event.type === "keydown") return;
      setOpen(open);
    };

  return (
    <Box>
      <Box component={Button} onClick={toggleDrawer(true)} variant="outlined">
        <ShoppingCartOutlinedIcon sx={{ color: "white" }} />
      </Box>

      <SwipeableDrawer
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {!localStorageCart.length ? (
          <Box sx={{ width: 260 }} role="presentation">
            <Typography
              variant="h4"
              align="center"
              sx={{
                fontWeight: "bold",
                color: "",
                mb: 4,
              }}
            >
              Your Cart is Empty
            </Typography>
          </Box>
        ) : (
          <>
            <Box sx={{ width: 260 }} role="presentation">
              {localStorageCart.map((productOnCart: productInCart) => (
                <React.Fragment key={productOnCart.product.title}>
                  <List>
                    <ProductInCart productCart={productOnCart} />
                  </List>
                  <Divider />
                </React.Fragment>
              ))}
            </Box>
            <Button fullWidth variant="contained" sx={{ mb: 1 }}>
              <ShoppingCartCheckoutIcon sx={{ mr: 1 }} /> Checkout
            </Button>
          </>
        )}
      </SwipeableDrawer>
    </Box>
  );
};

export default Cart;
