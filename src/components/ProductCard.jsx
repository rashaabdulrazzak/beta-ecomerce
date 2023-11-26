import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

import CardActions from "@mui/material/CardActions";

import MuiButton from "@mui/material/Button";
import styled from "@mui/material/styles/styled";

const StyledButton = styled(MuiButton)({
  backgroundColor: "#b5565e",
  color: "white",
  fontWeight: "bold",
  ":hover": {
    backgroundColor: "#b5565e",
    color: "white",
  },
  width: "100%",
});
/* TODO pass required props
TODO: check the width of discount icon
and adjust it
accordingly
TODO MAKE SURE CARD IS RESPONSIVE
TODO CHECK STYLE


 */

const ProductCard = ({
  id,
  name,
  price,
  discount,
  originalPrice,
  rating,
  image,
  handleAddtoCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [value, setValue] = useState(rating);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    setQuantity(Math.max(0, quantity - 1));
  };
  const product = {
    id,
    name,
    price,
    image,
    quantity,
  };
  return (
    <Card sx={{ maxWidth: 345, position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          top: 16,
          left: 16,
          bgcolor: "primary.main",
          color: "white",
          p: 1.5,
          borderRadius: "50px",
        }}
      >
        {discount}
      </Box>
      <CardMedia component="img" height="194" alt={name} src={image} />
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
            }}
          >
            <Typography gutterBottom variant="p">
              {name}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <Typography variant="h6" color="text.secondary" sx={{ pl: 1 }}>
              ({rating})
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Typography
              variant="h6"
              color="primary"
              sx={{ fontWeight: "medium", pr: 1 }}
            >
              {price}$
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ textDecoration: "line-through" }}
            >
              {originalPrice}$
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "block",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
        >
          {/* todo: may check font awesome or button  */}
          <IconButton
            onClick={handleDecrease}
            variant="outlined"
            color="primary"
            size="large"
          >
            <IndeterminateCheckBoxOutlinedIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" sx={{ mx: 2 }}>
            {quantity}
          </Typography>
          <IconButton
            onClick={handleIncrease}
            color="primary"
            variant="outlined"
            size="medium"
          >
            <AddBoxOutlinedIcon fontSize="large" />
          </IconButton>
        </Box>
      </CardContent>
      <CardActions>
        <StyledButton onClick={() => handleAddtoCart(product)}>
          Add to Cart
        </StyledButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
