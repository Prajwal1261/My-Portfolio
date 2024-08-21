import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

const pages = ["About", "My Works", "Resume"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function NavBar({ selectedMenu, setSelectedMenu }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuSelect = (e, index) => {
    console.log(index);
    setAnchorElNav(null);
    setSelectedMenu(index);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#353839" }}>
      <Container style={{ maxWidth: "100%" }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              //   mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Arial, sans-serif",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              ml: "4rem",
            }}
          >
            Prajwal Allitti
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  key={page}
                  onClick={(e) => handleMenuSelect(e, index)}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              ml: "auto",
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={(e) => handleMenuSelect(e, index)}
                sx={{
                  my: 2,
                  marginRight: "20px",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "1rem",
                  mr: "2rem",
                  backgroundColor:
                    selectedMenu === index ? "#353839" : "transparent",
                  color: selectedMenu === index ? "#98FB98" : "#98FB98",
                  padding: "10px 20px",
                  fontWeight: 550,
                  transition:
                    "background-color 0.3s ease, color 0.3s ease, transform 0.2s ease",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: selectedMenu === index ? "70%" : "0",
                    height: "2px",
                    left: "15%",
                    bottom: "10px",
                    backgroundColor: "#32CD32",
                    transition: "width 0.3s ease", // Sliding effect
                  },

                  "&:hover::after": {
                    width: "70%",
                  },

                  "&:focus": {
                    outline: "none",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
