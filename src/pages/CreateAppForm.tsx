import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Divider,
} from "@mui/material";
import { Review, Reply, App } from "../models/app.model";
import AppsServices from "../services/apps.service";

const AppForm = () => {
  const [app, setApp] = useState<App>({
    id: 0,
    mainImage: "",
    title: "",
    genre: "",
    type: "",
  });

  const [review, setReview] = useState<Review>({
    id: 0,
    itemId: 0,
    rating: 0,
    date: "",
  });

  const [reply, setReply] = useState<Reply>({
    id: 0,
    reviewId: 0,
    date: "",
  });

  const handleAppChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setApp({ ...app, [name]: value });
  };

  const handleReviewChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setReview({ ...review, [name]: value });
  };

  const handleReplyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setReply({ ...reply, [name]: value });
  };

  const handleAppSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await AppsServices.createApp(app);
  };

  const handleReviewSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setApp({ ...app, reviews: [...(app.reviews || []), review] });
    setReview({ id: 0, itemId: 0, rating: 0, date: "" });
  };

  const handleReplySubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const reviewIndex = app.reviews?.findIndex((r) => r.id === reply.reviewId);
    if (reviewIndex !== undefined && reviewIndex !== -1) {
      const updatedReviews = [...app.reviews!];
      const reviewReplies = updatedReviews[reviewIndex].replies || [];
      updatedReviews[reviewIndex].replies = [...reviewReplies, reply];
      setApp({ ...app, reviews: updatedReviews });
    }
    setReply({ id: 0, reviewId: 0, date: "" });
  };

  return (
    <form onSubmit={handleAppSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Title"
            name="title"
            value={app.title}
            onChange={handleAppChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Main Image URL"
            name="mainImage"
            value={app.mainImage}
            onChange={handleAppChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Genre"
            name="genre"
            value={app.genre}
            onChange={handleAppChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Type"
            name="type"
            value={app.type}
            onChange={handleAppChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Price"
            name="price"
            value={app.price}
            onChange={handleAppChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={app.description}
            onChange={handleAppChange}
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="All Reviews URL"
            name="allReviews"
            value={app.allReviews}
            onChange={handleAppChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Additional Information"
            name="additionalInformation"
            value={app.additionalInformation}
            onChange={handleAppChange}
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Image 1 URL"
            name="image_1"
            value={app.image_1}
            onChange={handleAppChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Image 2 URL"
            name="image_2"
            value={app.image_2}
            onChange={handleAppChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Image 3 URL"
            name="image_3"
            value={app.image_3}
            onChange={handleAppChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Divider />
          <Typography variant="h6">Reviews</Typography>
          {app.reviews?.map((r) => (
            <div key={r.id}>
              <Typography>{`Rating: ${r.rating}`}</Typography>
              <Typography>{`Date: ${r.date}`}</Typography>
              {r.author && <Typography>{`Author: ${r.author}`}</Typography>}
              {r.image && <Typography>{`Image: ${r.image}`}</Typography>}
              <Typography>{`Text: ${r.text}`}</Typography>
              {r.replies?.map((reply) => (
                <div key={reply.id}>
                  <Typography>{`- ${reply.text}`}</Typography>
                  <Typography>{` by ${
                    reply.author ? reply.author : "Anonymous"
                  } on ${reply.date}`}</Typography>
                </div>
              ))}
              <Divider />
            </div>
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
          <Divider />
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

export default AppForm;
