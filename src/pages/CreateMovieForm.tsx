import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Divider } from "@mui/material";
import { Review } from "../models/app.model";
import { Movie, Cast, Credit } from "../models/movie.model";
import MovieService from "../services/movie.service"

const MovieForm = () => {
  const [movie, setMovie] = useState<Movie>({
    id: 0,
    mainImage: "",
    title: "",
    averageRating: 0,
    genre: "",
    type: "",
    price: "",
    description: "",
    allReviews: "",
    additionalInformation: "",
    reviews: [],
    trailerLink: "",
    cast: [],
    credits: [],
  });

  const [cast, setCast] = useState<Cast>({ id: 0, name: "", role: "" });
  const [credit, setCredit] = useState<Credit>({ id: 0, name: "", role: "" });
  const [review, setReview] = useState<Review>({
    id: 0,
    itemId: 0,
    rating: 0,
    date: "",
  });

  const handleMovieChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleCastChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCast({ ...cast, [name]: value });
  };

  const handleCreditChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredit({ ...credit, [name]: value });
  };

  const handleReviewChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setReview({ ...review, [name]: value });
  };

  const handleMovieSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await MovieService.createMovie(movie);
    console.log(movie);
    
  };

  const handleCastSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMovie({ ...movie, cast: [...movie.cast, cast] });
    setCast({ id: 0, name: "", role: "" });
  };

  const handleCreditSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMovie({ ...movie, credits: [...movie.credits, credit] });
    setCredit({ id: 0, name: "", role: "" });
  };

  const handleReviewSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMovie({ ...movie, reviews: [...movie.reviews, review] });
    setReview({ id: 0, itemId: 0, rating: 0, date: "" });
  };

  return (
    <form onSubmit={handleMovieSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Title"
            name="title"
            value={movie.title}
            onChange={handleMovieChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Main Image URL"
            name="mainImage"
            value={movie.mainImage}
            onChange={handleMovieChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Genre"
            name="genre"
            value={movie.genre}
            onChange={handleMovieChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Type"
            name="type"
            value={movie.type}
            onChange={handleMovieChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Price"
            name="price"
            value={movie.price}
            onChange={handleMovieChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Description"
            name="description"
            value={movie.description}
            onChange={handleMovieChange}
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="All Reviews URL"
            name="allReviews"
            value={movie.allReviews}
            onChange={handleMovieChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Additional Information"
            name="additionalInformation"
            value={movie.additionalInformation}
            onChange={handleMovieChange}
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Trailer Link"
            name="trailerLink"
            value={movie.trailerLink}
            onChange={handleMovieChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Divider />
          <Typography variant="h6">Cast</Typography>
          {movie.cast.map((c) => (
            <Typography key={c.id}>{`${c.name} (${c.role})`}</Typography>
          ))}
          <form onSubmit={handleCastSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Name"
                  name="name"
                  value={cast.name}
                  onChange={handleCastChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Role"
                  name="role"
                  value={cast.role}
                  onChange={handleCastChange}
                />
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item xs={12}>
          <Divider />
          <Typography variant="h6">Credits</Typography>
          {movie.credits.map((c) => (
            <Typography key={c.id}>{`${c.name} (${c.role})`}</Typography>
          ))}
          <form onSubmit={handleCreditSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Name"
                  name="name"
                  value={credit.name}
                  onChange={handleCreditChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Role"
                  name="role"
                  value={credit.role}
                  onChange={handleCreditChange}
                />
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item xs={12}>
          <Divider />
          <Typography variant="h6">Reviews</Typography>
          {movie.reviews.map((r) => (
            <Typography key={r.id}>{`${r.author ? r.author + ": " : ""}${
              r.text
            }`}</Typography>
          ))}
          <form onSubmit={handleReviewSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Rating"
                  name="rating"
                  type="number"
                  inputProps={{ min: 0, max: 5, step: 0.5 }}
                  value={review.rating}
                  onChange={handleReviewChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Date"
                  name="date"
                  type="date"
                  value={review.date}
                  onChange={handleReviewChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Author"
                  name="author"
                  value={review.author}
                  onChange={handleReviewChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Image URL"
                  name="image"
                  value={review.image}
                  onChange={handleReviewChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Text"
                  name="text"
                  value={review.text}
                  onChange={handleReviewChange}
                  multiline
                  rows={4}
                />
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default MovieForm;
