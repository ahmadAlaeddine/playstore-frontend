import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

import { useState, useEffect } from "react";
import UserService from "../services/user.service";
import { useLocation, useNavigate } from "react-router";
import { Box, Button } from "@mui/material";
import { CardItem } from "../components/card/CardItem";

export default function Wishlist() {
  const [wishList, setWishList] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const getWishList = async () => {
    const res = await UserService.getUserLastViewedAndWishList(1);
    console.log(res);
    setWishList(res.wishList);
  };

  useEffect(() => {
    getWishList();
  }, []);

  return (
    <>
      <Box sx={{ height: "100vh" }}>
        <Box>
        {wishList && <CardItem items={wishList} />}
          {!location.pathname.includes("wishlist") && (
            <Button
              sx={{
                position: "absolute",
                zIndex: 999,
                bottom: "10vh",
                right: "2vw",
              }}
            >
              <AddCircleOutlinedIcon
                onClick={() => navigate("createMovie")}
                sx={{ fontSize: 50, color: "gray" }}
              />
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
}
