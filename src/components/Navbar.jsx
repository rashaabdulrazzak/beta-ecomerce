import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import SearchIcon from "@mui/icons-material/Search";
import logo from "../images/logo.png";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import SearchBar from "./SearchBar";
const Logo = styled("img")(({ theme }) => ({
  marginRight: "38px",
  height: "40px",
  [theme.breakpoints.down("md")]: {
    height: "18.39px",
    marginRight: 0,
  },
}));
const NavBar = ({ searchTerm, productSearchFunction }) => {
  return (
    <Box>
      <AppBar position="static" sx={{ bgcolor: "white" }}>
        <Toolbar>
          <Grid container alignItems="center" justifyContent="center">
            <Grid item xs={6} sm={4} md={2} lg={2}>
              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Link>
            </Grid>
            <Grid item xs={12} sm={8} md={8} lg={8}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <SearchBar
                  searchProduct={searchTerm}
                  productSearchFunction={productSearchFunction}
                />
              </Box>
            </Grid>
            <Grid item lg={2} md={2} />
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
