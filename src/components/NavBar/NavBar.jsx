import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import SearchBar from "../SearchBar";
import logo from "../../images/logo.png";
import { CustomBag } from "./styles";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <Box>
      <AppBar position="static" sx={{ bgcolor: "white" }}>
        <Toolbar>
          <Grid container alignItems="center" justifyContent="space-between">
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
                <SearchBar />
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sm={4}
              md={2}
              lg={2}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <Link to="/cart">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LocalMallOutlinedIcon fontSize="large" />
                  <CustomBag variant="subtitle1">{cartTotalQuantity}</CustomBag>
                </Box>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
