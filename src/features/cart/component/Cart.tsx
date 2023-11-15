import { SwipeableDrawer, Button, Box, Divider, List } from "@mui/material";
import { useState } from "react";
import ProductInCart from "./ProductInCart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCart";
import { useAppSelector } from "../../../store/hooks";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const cart = useAppSelector((state) => state.cart.cart);

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
        <Box sx={{ width: 260 }} role="presentation">
          {cart.map((productOnCart) => (
            <>
              <List>
                <ProductInCart
                  product={productOnCart.product}
                  quantity={productOnCart.quantity}
                />
              </List>
              <Divider />
            </>
          ))}
        </Box>
        <Button fullWidth variant="contained" sx={{ mb: 1 }}>
          Checkout
        </Button>
      </SwipeableDrawer>
    </Box>
  );
};

export default Cart;
