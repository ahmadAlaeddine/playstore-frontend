import React, { useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Rating,
  Chip,
  Button,
} from "@mui/material";
import { Review, Reply, App } from "../models/app.model";
import { useLocation } from "react-router";
import UserService from "../services/user.service";

interface ItemPageProps {
  app: App;
}

const ItemPage: React.FC<ItemPageProps> = ({ app }) => {
  const formatPrice = (price: any) => {
    const currency = localStorage.getItem("currency");

    if (currency === "lbp") {
      const lbpPrice = price / 100000;
      return `${lbpPrice} LBP`;
    } else {
      return `$${price}`;
    }
  };

  const addToWishlist = async (appId: number) => {
    const res = await UserService.updateUserWishList(0, appId);
    return res;
  };
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          {app.title}
          <Button sx={{ marginLeft: "60%" }}>
            <AddIcon onClick={() => addToWishlist(app.id)} />
          </Button>
        </Typography>
        <Rating value={app.averageRating} precision={0.1} readOnly />
        <Chip label={app.genre} style={{ margin: "0 5px" }} />
        <Typography variant="subtitle1">Type: {app.type}</Typography>
        <Typography variant="subtitle1">
          Price: {formatPrice(app.price || 0)}
        </Typography>
      </Box>
      <Card>
        <CardMedia
          component="img"
          alt={app.title}
          height="140"
          image={app.mainImage}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {app.description}
          </Typography>
        </CardContent>
      </Card>
      <Box my={4}>
        {app.reviews?.map((review: Review) => (
          <Box key={review.id}>
            <Box display="flex" alignItems="center" mb={1}>
              <Avatar alt={review.author || "Anonymous"} src={review.image} />
              <Box ml={2}>
                <Typography variant="subtitle2">
                  {review.author || "Anonymous"}
                </Typography>
                <Typography variant="caption">{review.date}</Typography>
              </Box>
            </Box>
            <Typography variant="body2">{review.text}</Typography>
            <Rating value={review.rating} precision={0.1} readOnly />
            {review.replies?.map((reply: Reply) => (
              <Box key={reply.id} ml={4} mt={1}>
                <Typography variant="caption">
                  {reply.author || "Anonymous"} - {reply.date}
                </Typography>
                <Typography variant="body2">{reply.text}</Typography>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default function AppDetails() {
  const location = useLocation();
  const item = location.state.item;
  return (
    <>
      <ItemPage app={item} />
    </>
  );
}
