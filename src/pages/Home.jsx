import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import ProductCard from "../components/ProductCard";
import Button from "@mui/material/Button";
import useListProduct from "../api/listProduct";

const productUrl =
  "https://linkedin-cv-crawler.beta-limited.workers.dev/interview/products";

const Home = () => {
  // fetch without redux
  const {
    data: productsList,
    error: productsError,
    isLoading: productsIsLoading,
  } = useListProduct(productUrl);
  console.log(productsList);
  const handleAddtoCart = (product) => {
    console.log(product);
    //dispatch({ type: "ADD_TO_CART", payload: product });
    //  dispatch(addToCart(product));
    // navigate("/cart");
  };
  return (
    <Box sx={{ bgcolor: "#f6f9fc", pt: 10 }}>
      <Grid container spacing={2}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ mx: "auto" }}
        >
          {productsList?.map((item) => (
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
    </Box>
  );
};

export default Home;
