import React from "react";
import {
  AppBar,
  Box,
  InputBase,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";

import { Facebook, Instagram, Twitter } from "@mui/icons-material/";
const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const SocialBox = styled(Box)({
    display: "flex",
    gap: 10,
  });
  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
  });
  const SearchBox = styled(Box)({
    display: "flex",
    gap: 5,
  });
  const MenuItems = [
    { Name: "Home", Link: "/" },
    { Name: "Products", Link: "#" },
    { Name: "Portfolio", Link: "#" },
    { Name: "Blog", Link: "#" },
    { Name: "Contact Us", Link: "#" },
  ];
  return (
    <AppBar sx={{ background: "black" }}>
      <StyledToolbar>
        <SocialBox>
          <Facebook />
          <Instagram />
          <Twitter />
        </SocialBox>
        <MenuBox>
          {MenuItems.map((item) => (
            <Typography
              key={item.Name}
              sx={{ cursor: "pointer", fontSize: "14px" }}
            >
              {item.Name}
            </Typography>
          ))}
        </MenuBox>
        <SearchBox>
          <InputBase placeholder="Search..." sx={{ color: "white" }} />
        </SearchBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
