import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";
export const CustomBox = styled(Box)(({ theme }) => ({
  top: 16,
  left: 16,
  backgroundColor: "#b5565e",
  color: "white",
  padding: "6px 18px",
  borderRadius: "50px",
}));
export const StyledButton = styled(MuiButton)({
  backgroundColor: "#b5565e",
  color: "white",
  fontWeight: "bold",
  ":hover": {
    backgroundColor: "#b5565e",
    color: "white",
  },
  width: "100%",
});
