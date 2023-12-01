import * as React from "react";
import "./styles.css";

import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  Toolbar,
  Box,
  AppBar,
  IconButton,
  Typography,
  Menu,
} from "@mui/material";

import MenuItem from "@mui/material/MenuItem";

const pages = ["Features", "Pricing", "Resources"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      component="nav"
      sx={{
        backgroundColor: "transparent",
        pt: 5,
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <Typography
          variant="h4"
          component="a"
          sx={{
            mr: 2,
            fontFamily: "Poppins",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "black",
          }}
        >
          Shortly
        </Typography>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
          }}
        >
          <IconButton
            size="large"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
          >
            <MenuIcon sx={{ pl: 10, pr: 10 }} />
          </IconButton>

          <Menu
            id="menu-appbar"
            style={{ width: "100%", justifyContent: "center" }}
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",

              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",

              horizontal: "right",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {pages.map((page) => (
              <MenuItem id="blockMenu" key={page} onClick={handleCloseNavMenu}>
                <Typography>{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Typography
          variant="h5"
          noWrap
          component="a"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "Poppins",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "black",
            textDecoration: "none",
          }}
        >
          Shortly
        </Typography>

        <Box sx={{ display: "flex" }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{
                mr: 5,
                my: 2,
                fontFamily: "Poppins",
                color: "grey",
                "&:hover": {
                  color: "black",
                },
              }}
            >
              {page}
            </Button>
          ))}

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              sx={{
                color: "gray",
                "&:hover": {
                  color: "black",
                },

                fontFamily: "Poppins",
              }}
            >
              Log In
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#2BD0D0",
                "&:hover": {
                  background: "#bff0f0",
                  boxShadow: "none",
                },
                borderRadius: "30px",

                mt: 1,
                fontFamily: "Poppins",
                fontWeight: "bold",
                boxShadow: "none",
                height: 50,
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
