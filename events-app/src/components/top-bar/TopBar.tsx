import {
  alpha,
  AppBar,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EventIcon from "@mui/icons-material/Event";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";

const TopBar: React.FC<{ searchInput: any }> = ({ searchInput }) => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/*
        For some unexplainable reason, the MUI input doesn't accept my search Queries.
        When using a simple HTML input, it works, that's why I included an unstyled HTML 
        component with the only necessary prop here for demo purposes.
      */}
      {/* <input onChange={searchInput} /> */}
      <AppBar color="default" position="static">
        <Toolbar>
          <EventIcon />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ ml: 1, display: { xs: "none", sm: "block" } }}
          >
            events
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={searchInput}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <ShoppingCartIcon />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;
