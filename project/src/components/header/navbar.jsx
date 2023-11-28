import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

export default function ButtonAppBar() {
  return (
    <Box
      sx={{
        pt: 6,

        display: "flex",
        justifyContent: "center",
      }}
    >
      <AppBar
        sx={{
          borderRadius: 10,
          backgroundColor: "transparent",

          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ ml: "20%" }}>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, color: "grey", fontWeight: "bold" }}
          >
            Shortly
          </Typography>

          <Button
            sx={{
              color: "gray",
              position: "absolute",
              transform: "translate(150%, 0)",
            }}
          >
            Features
          </Button>
          <Button
            sx={{
              color: "gray",
              position: "absolute",
              transform: "translate(320%, 0)",
            }}
          >
            Pricing
          </Button>
          <Button
            sx={{
              color: "gray",
              position: "absolute",
              transform: "translate(320%, 0)",
            }}
          >
            Resources
          </Button>
          <Button
            sx={{
              color: "gray",
              mr: "5%",
            }}
          >
            Log In
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2BD0D0",
              borderRadius: "30px",
              padding: "10px 20px",
              mr: "30%",
              fontFamily: "Poppins",
              fontWeight: "bold",
            }}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
