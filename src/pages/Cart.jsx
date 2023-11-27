import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  decreaseCart,
  clearCart,
  getTotals,
} from "../slices/cartSlice";
import { Link } from "react-router-dom";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import {
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <Container sx={{ padding: "2rem", maxWidth: "md" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: 400, mb: "2rem" }}
      >
        Your Cart
      </Typography>

      {cart?.cartItems.length === 0 ? (
        <Box>
          <Typography
            variant="body1"
            align="center"
            sx={{ color: "rgb(84, 84, 84)", mb: "2rem" }}
          >
            Your cart is currently empty
          </Typography>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Link
              to="/"
              style={{
                color: "gray",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <KeyboardBackspaceOutlinedIcon fontSize="large" />
              <span style={{ marginLeft: "0.5rem" }}>Start Shopping</span>
            </Link>
          </Box>
        </Box>
      ) : (
        <Box>
          {cart.cartItems.map((cartItem) => (
            <Card
              key={cartItem.id}
              sx={{
                mb: "1rem",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                padding: "1rem",
              }}
            >
              <CardMedia
                component="img"
                alt={cartItem.name}
                height="80px"
                width="80px"
                image={cartItem.image}
                sx={{
                  mr: { xs: 0, md: "1rem" },
                  height: "80px",
                  width: "80px",
                }}
              />
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "start", md: "center" },
                  flexGrow: 1,
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 400, mb: "0.5rem" }}>
                  {cartItem.name}
                </Typography>
                <Button
                  onClick={() => handleRemoveFromCart(cartItem)}
                  sx={{ color: "black", mt: "0.7rem", bgcolor: "gray" }}
                >
                  Remove
                </Button>
              </CardContent>
              <Box
                style={{ display: "flex", alignItems: "center", width: "20%" }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Source Sans 3",
                    mb: { xs: "0.5rem", md: 0 },
                    minWidth: "80px",
                    textAlign: "center",
                  }}
                >{`$${cartItem.price}`}</Typography>
              </Box>

              <Box
                style={{ display: "flex", alignItems: "center", width: "25%" }}
              >
                <Button
                  onClick={() => handleDecreaseCart(cartItem)}
                  sx={{
                    border: "none",
                    outline: "none",
                    background: "none",
                    cursor: "pointer",
                    mr: "0.5rem",
                  }}
                >
                  -
                </Button>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 400, mx: "0.5rem" }}
                >
                  {cartItem.cartQuantity}
                </Typography>
                <Button
                  onClick={() => handleAddToCart(cartItem)}
                  sx={{
                    border: "none",
                    outline: "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                >
                  +
                </Button>
              </Box>
              <Box
                style={{ display: "flex", alignItems: "center", width: "25%" }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    textAlign: "right",
                    fontFamily: "Source Sans 3",
                  }}
                >{`$${cartItem.price * cartItem.cartQuantity}`}</Typography>
              </Box>
            </Card>
          ))}

          <Grid
            container
            sx={{
              justifyContent: "space-between",
              borderTop: "1px solid rgb(187, 187, 187)",
              pt: "2rem",
            }}
          >
            <Button
              onClick={handleClearCart}
              sx={{
                width: "130px",
                height: "40px",
                borderRadius: "5px",
                fontWeight: 400,
                letterSpacing: "1.15px",
                border: "0.5px solid rgb(177, 177, 177)",
                color: "gray",
              }}
            >
              Clear Cart
            </Button>
            <Box sx={{ width: "270px", textAlign: "right" }}>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "20px",
                }}
              >
                <span>Subtotal</span>
                <span
                  sx={{ fontWeight: 700 }}
                >{`$${cart.cartTotalAmount}`}</span>
              </Box>

              <Button
                sx={{
                  width: "100%",
                  height: "40px",
                  borderRadius: "5px",
                  fontWeight: 400,
                  letterSpacing: "1.15px",
                  backgroundColor: "#4b70e2",
                  color: "#f9f9f9",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                Check out
              </Button>
              <Box style={{ marginTop: "1rem" }}>
                <Link
                  to="/"
                  sx={{
                    color: "gray",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <KeyboardBackspaceOutlinedIcon
                    fontSize="medium"
                    sx={{ marginTop: "-5px" }}
                  />
                  <span style={{ marginLeft: "0.5rem" }}>
                    Continue Shopping
                  </span>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default Cart;
