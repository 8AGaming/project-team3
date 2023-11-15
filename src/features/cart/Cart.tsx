import {
  SwipeableDrawer,
  Button,
  Box,
  Divider,
  List,
} from "@mui/material";
import { useState } from "react";
import ProductInCart from "./ProductInCart";
import { productForTesting } from "../comparison/component/Comparison";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (event.type === "keydown") return;
      setOpen(open);
    };

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open Cart</Button>

      <SwipeableDrawer
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box sx={{ width: 260 }} role="presentation">
          <List>
            <ProductInCart product={productForTesting} />
          </List>
          <Divider />
          <List>
            <ProductInCart product={productForTesting} />
          </List>
        </Box>
        <Button fullWidth variant="contained" sx={{ mb: 1 }}>
          Checkout
        </Button>
      </SwipeableDrawer>
    </div>
  );
};

export default Cart;
