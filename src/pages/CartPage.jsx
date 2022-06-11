import React from 'react';
import { Box, Button } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import HomeIcon from '@mui/icons-material/Home';
import Layout from '../components/Layout';
import { useShoppingCart } from '../context/ShoppingCartContext';
import CartItem from './CartItem';

function CartPage() {
  const { shoppingCart, emptyCart } = useShoppingCart();
  // We want to display whats in the shopping cart.
  return (
    <Layout shoppingCart={shoppingCart}>
      <Box width={1} display="flex" flexDirection="column" alignItems="center">
        {shoppingCart.map((cartItem) => (
          <Box p={3} key={cartItem.id} width="100%" maxWidth={500}>
            <CartItem cartItem={cartItem} />
          </Box>
        ))}
        <Box>
          <Box mb={3}>
            <Button
              fullWidth
              variant="contained"
            >
              Checkout
            </Button>
          </Box>
          <Box mb={3}>
            <Button
              fullWidth
              variant="contained"
              startIcon={<ReplayIcon />}
              onClick={emptyCart}
            >
              Empty Cart
            </Button>
          </Box>
          <Box mb={3}>
            <Button
              fullWidth
              variant="contained"
              startIcon={<HomeIcon />}
            >
              Home
            </Button>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}

export default CartPage;