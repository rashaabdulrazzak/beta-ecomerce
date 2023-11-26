import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { useNavigate } from "react-router-dom";
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    if (searchTerm) {
      console.log(searchTerm);
      navigate(`/search-result/${encodeURIComponent(searchTerm)}`);
    } else {
      alert("Please enter a search term");
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
      <TextField
        fullWidth
        variant="outlined"
        value={searchTerm}
        placeholder="Searching for..."
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          style: { height: { xs: 40, md: 50 } },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "20px 0 0 20px",
            height: { xs: 40, md: 50 },
            width: "100%",
          },
        }}
      />
      <Button
        variant="contained"
        sx={{ borderRadius: "0 20px 20px 0", height: { xs: 40, md: 50 } }}
        onClick={handleSearch}
      >
        Search
      </Button>
    </Box>
  );
}

export default SearchBar;
