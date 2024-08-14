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

export default function NavBar(props) {
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
    props.setSelectedMenu(index);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#353839" }}>
        <Container style={{ maxWidth: "100%" }}>
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
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
                    color: "white",
                    display: "block",
                    marginRight: "20px",
                    fontFamily: "Arial, sans-serif",
                    fontSize: "1rem",
                    mr: "2rem",
                    "&:hover": {
                      textDecoration: "underline",
                      textUnderlineOffset: "4px",
                      color: "#32CD32",
                      boxShadow: "none",
                    },

                    "&:focus": {
                      outline: "none", // Removes focus outline
                      boxShadow: "none", // Ensures no shadow on focus
                    },
                    "&:active": {
                      outline: "none", // Removes active outline
                      boxShadow: "none", // Ensures no shadow on active state
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
    </>
  );
}
