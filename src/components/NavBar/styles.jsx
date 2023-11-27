import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
export const CustomBag = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "25px",
  width: "25px",
  borderRadius: "50%",
  background: "#b5565e",
  fontSize: "14px",
  fontWeight: 700,
  color: "white",
  marginLeft: "5px",
  textDecoration: "none",
}));
