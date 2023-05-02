import React from "react";
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
  Grid,
  Button,
} from "@mui/material";
import { useLocation } from "react-router";
import { Reply, Review } from "../models/app.model";
import { Movie, Cast, Credit } from "../models/movie.model";
import AddIcon from "@mui/icons-material/Add";
import UserService from "../services/user.service";

interface MoviePageProps {
  movie: Movie;
}

const MoviePage: React.FC<MoviePageProps> = ({ movie }) => {
  const addToWishlist = async (movieId: number) => {
    const res = await UserService.updateUserWishList(0, movieId);
    return res;
  };

  const formatPrice = (price: any) => {
    const currency = localStorage.getItem('currency');
  
    if (currency === 'lbp') {
      const lbpPrice = price / 100000;
      return `${lbpPrice} LBP`;
    } else {
      return `$${price}`;
    }
  };

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          {movie.title}
          <Button sx={{ marginLeft: "60%" }}>
            <AddIcon onClick={() => addToWishlist(movie.id)} />
          </Button>
        </Typography>
        <Rating value={movie.averageRating} precision={0.1} readOnly />
        <Chip label={movie.genre} style={{ margin: "0 5px" }} />
        <Typography variant="subtitle1">Type: {movie.type}</Typography>
        <Typography variant="subtitle1">
        Price: {formatPrice(movie.price || 0)}
        </Typography>
      </Box>
      <Card>
        <CardMedia
          component="img"
          alt={movie.title}
          height="140"
          image={movie.mainImage}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {movie.description}
          </Typography>
        </CardContent>
      </Card>
      <Box my={4}>
        <Typography variant="h6" component="h2" gutterBottom>
          Cast
        </Typography>
        <Grid container spacing={2}>
          {movie.cast?.map((castMember: Cast) => (
            <Grid item xs={6} sm={4} md={3} key={castMember.id}>
              <Typography variant="subtitle2">{castMember.name}</Typography>
              <Typography variant="caption">{castMember.role}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box my={4}>
        <Typography variant="h6" component="h2" gutterBottom>
          Credits
        </Typography>
        <Grid container spacing={2}>
          {movie.credits?.map((credit: Credit) => (
            <Grid item xs={6} sm={4} md={3} key={credit.id}>
              <Typography variant="subtitle2">{credit.name}</Typography>
              <Typography variant="caption">{credit.role}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box my={4}>
        {movie.reviews?.map((review: Review) => (
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

export default function MovieDetails() {
  const location = useLocation();
  const item = location.state.item;
  return (
    <>
      <MoviePage movie={item} />
    </>
  );
}
