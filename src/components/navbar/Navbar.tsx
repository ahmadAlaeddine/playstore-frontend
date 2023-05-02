import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import logo from "../../logo.jpg";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
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
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "32ch",
      },
    },
  },
}));

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleProfileMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleWishlist = () => {
    setAnchorEl(null);
    navigate("/wishlist");
  };

  const changeCurrency = () => {
    const currentCurrency = localStorage.getItem("currency");
    if (currentCurrency === "usd") {
      localStorage.setItem("currency", "lbp");
      return "lbp";
    } else {
      localStorage.setItem("currency", "usd");
      return "usd";
    }
  };

  const CustomButton = styled(Button)({
    borderRadius: "4px",
    textTransform: "none",
    fontWeight: "normal",
    color: "white",
  });

  const menuId = "primary-search-account-menu";

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "gray" }}>
        <Toolbar>
          <img src={logo} alt="logo" width={40} height={40} />
          <Typography variant="h6" noWrap component="div">
            Google Play
          </Typography>

          <ButtonGroup
            sx={{ marginLeft: "10%", marginRight: "40%" }}
            variant="text"
            color="primary"
            aria-label="device buttons"
          >
            <CustomButton
              onClick={() => navigate("/Apps".toLowerCase())}
              sx={{ marginLeft: "30%", color: "white" }}
            >
              Apps
            </CustomButton>
            <CustomButton
              onClick={() => navigate("/Movies".toLowerCase())}
              sx={{ marginLeft: "30%", color: "white" }}
            >
              Movies
            </CustomButton>
          </ButtonGroup>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <div>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div>
            <IconButton
              edge="end"
              aria-label="change currency"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={changeCurrency}
              color="inherit"
            >
              <CurrencyExchangeIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleWishlist}>Wishlist</MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
