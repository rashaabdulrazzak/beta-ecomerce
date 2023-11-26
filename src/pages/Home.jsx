import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import ProductCard from "../components/ProductCard";
import Button from "@mui/material/Button";
import useListProduct from "../api/listProduct";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addToCart } from "../slices/cartSlice";
const productUrl =
  "https://linkedin-cv-crawler.beta-limited.workers.dev/interview/products";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);

  const handleAddtoCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };
  return (
    <Box sx={{ bgcolor: "#f6f9fc", pt: 10 }}>
      {status === "pending" ? (
        <p> loading</p>
      ) : (
        <>
          <Grid container spacing={2}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              sx={{ mx: "auto" }}
            >
              {items?.map((item) => (
                <Grid xs={3} sm={4} md={4} key={item.index}>
                  <ProductCard {...item} handleAddtoCart={handleAddtoCart} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid container justifyContent="center" alignItems="center">
            <Button variant="contained" color="primary" sx={{ mt: 3 }}>
              Load more{" "}
            </Button>
          </Grid>
        </>
      )}
    </Box>
  );
};

export default Home;
