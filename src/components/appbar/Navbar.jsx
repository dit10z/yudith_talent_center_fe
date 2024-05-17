import {
  AccountCircle,
  AdfScannerRounded,
  ArrowDropDown,
  Bookmark,
  LogoutRounded,
  MoreVert,
  Notifications,
} from "@mui/icons-material";
import {
  AppBar,
  Autocomplete,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const top100Films = [
    { id: 1, title: "JavaScript" },
    { id: 2, title: "The Godfather" },
    { id: 3, title: "The Godfather: Part II" },
    { id: 4, title: "The Dark Knight" },
    { id: 5, title: "12 Angry Men" },
  ];

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounter
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={1}
        sx={{ padding: "10px" }}
      >
        <Button
          sx={{ color: "#212121", padding: "7px 20px 7px 20px" }}
          startIcon={<AdfScannerRounded />}
        >
          MyRequest
        </Button>
        <Button
          sx={{ color: "#212121", padding: "7px 20px 7px 20px" }}
          startIcon={<LogoutRounded />}
        >
          SignOut
        </Button>
      </Stack>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent="4" color="error">
            <Bookmark />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <Notifications />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ backgroundColor: "#081E43", padding: "20px 50px" }}
        >
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap={"15px"}
          >
            <img
              className="Logo"
              src={logo}
              alt="logo"
              style={{ height: "40px", width: "260px" }}
            />
          </Stack>
          <Stack sx={{ borderRadius: "8px", width: "100vh" }}>
            <Autocomplete
              sx={{ padding: "10px 20px", borderRadius: "10px" }}
              renderInput={(params) => (
                <TextField
                  sx={{ backgroundColor: "#FFFF", borderRadius: "10px" }}
                  {...params}
                  placeholder="Search"
                  InputProps={{
                    ...params.InputProps,
                    notched: false, // Hilangkan border
                    // endAdornment: (
                    //   <InputAdornment position="end">
                    //     <IconButton onClick={handleSearch}>
                    //       {' '}
                    //       <SearchIcon />
                    //     </IconButton>
                    //   </InputAdornment>
                    // ),
                  }}
                />
              )}
            />
          </Stack>
          <Stack
            direction="row"
            sx={{ display: { xs: "none", md: "flex", gap: 10 } }}
          >
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent="4" color="error">
                <Bookmark />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={null} color="error">
                <Notifications />
              </Badge>
            </IconButton>
            <Divider
              orientation="vertical"
              variant="middle"
              sx={{ width: "1px", backgroundColor: "#FFFF" }}
              flexItem
            />
            <Button
              startIcon={<AccountCircle />}
              endIcon={<ArrowDropDown />}
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <Typography sx={{ textTransform: "none" }}>user 79</Typography>
            </Button>
          </Stack>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreVert />
            </IconButton>
          </Box>
        </Stack>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
