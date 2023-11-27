import React from "react";
import useListProduct from "../api/listProduct";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import ProductCard from "../components/ProductCard/ProductCard";
import { useParams } from "react-router-dom";

const SearchResult = () => {
  const { searchTerm } = useParams();
  const basicUrl = `https://linkedin-cv-crawler.beta-limited.workers.dev/interview/search?name=${searchTerm}`;

  const { data, error, isLoading } = useListProduct(basicUrl);
  console.log("search", searchTerm);
  return (
    <>
      <Box sx={{ bgcolor: "#f6f9fc", pt: 10 }}>
        {isLoading ? (
          <p> Loading....</p>
        ) : error ? (
          <p>Error</p>
        ) : (
          <Grid container spacing={2}>
            <Grid
              container
              spacing={{ xs: 2, md: 4 }}
              columns={{ xs: 4, sm: 8, md: 8 }}
              sx={{ mx: "auto" }}
            >
              {data?.map((item) => (
                <Grid xs={3} sm={4} md={4} key={item.index}>
                  <ProductCard {...item} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        )}
      </Box>
    </>
  );
};

export default SearchResult;
