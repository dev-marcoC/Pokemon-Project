import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, Outlet, useLocation } from "react-router-dom";

import { useState } from "react";
import CButton from "./Buttons";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event: any) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Navbar */}
      <AppBar
        position="static"
        color="transparent"
        sx={{ boxShadow: "none", p: { xs: "10px 15px", md: "20px 30px" } }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography
            variant="h4"
            color="primary"
            sx={{
              flexGrow: 1,
              letterSpacing: { xs: "4px", sm: "8px", md: "12px" },
              fontSize: { xs: "1.5rem", md: "2.125rem" },
            }}
          >
            Title Website
          </Typography>

          {/* Menu Desktop */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
              flexShrink: 0,
            }}
          >
            <CButton
              variantType="primary"
              component={Link}
              to="/"
              disabled={location.pathname === "/"}
            >
              Events
            </CButton>
            <CButton
              variantType="primary"
              component={Link}
              to="/decklist"
              disabled={location.pathname === "/decklist"}
            >
              Tournament Decklist
            </CButton>
            <CButton
              variantType="primary"
              component={Link}
              to="/contact-us"
              disabled={location.pathname === "/contact-us"}
            >
              Contact us
            </CButton>
          </Box>

          {/* Menu Mobile */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={handleMenuOpen} color="primary">
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem
                component={Link}
                to="/"
                onClick={handleMenuClose}
                disabled={location.pathname === "/"}
              >
                Events
              </MenuItem>
              <MenuItem
                component={Link}
                to="/decklist"
                onClick={handleMenuClose}
                disabled={location.pathname === "/decklist"}
              >
                Tournament Decklist
              </MenuItem>
              <MenuItem
                component={Link}
                to="/contact-us"
                onClick={handleMenuClose}
                disabled={location.pathname === "/contact-us"}
              >
                Contact us
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Content */}
      <Container maxWidth={"xl"} sx={{ my: 4 }}>
        <Outlet />
      </Container>

      <Footer />
    </Box>
  );
};

export default Layout;
