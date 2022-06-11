import { Box, Card, CardMedia, IconButton, Typography } from '@mui/material';
import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useShoppingCart } from '../context/ShoppingCartContext';

function CartItem(props) {
  const { cartItem } = props;
  const { removeFromCart } = useShoppingCart();

  return (
    <Card>
      <Box display="flex" alignItems="center">
        <Box px={2}>
          <CardMedia
            component="img"
            sx={{ width: 80, height: 80, p: 1 }}
            image={cartItem.image}
          />
        </Box>
        <Box px={2} display="flex" flexDirection="column" flexGrow={1}>
          <Box>
            <Typography fontWeight="bold">
              {cartItem.title}
            </Typography>
          </Box>
          <Box>
            <Typography fontWeight="bold">
              {cartItem.price / 100}
            </Typography>
          </Box>
        </Box>
        <Box px={2} display="flex" flexDirection="column">
          <Typography fontWeight="bold">
            x
            {cartItem.quantity}
          </Typography>
        </Box>
        <Box px={2} display="flex" flexDirection="column">
          <IconButton onClick={() => removeFromCart(cartItem.id)}>
            <DeleteForeverIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}

export default CartItem;