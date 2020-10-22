import React from "react";

import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import AccountCircle from "@material-ui/icons/AccountCircle";

export default function UserMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {};
  const menuId = "primary-search-account-menu";

  return (
    <>
      <IconButton
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleMenuOpen}
      >
        <AccountCircle />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={logout}>Log out</MenuItem>
      </Menu>
    </>
  );
}
