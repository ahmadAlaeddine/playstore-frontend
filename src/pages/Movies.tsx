import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { CardItem } from "../components/card/CardItem";
import { Movie } from "../models/movie.model";
import MovieService from "../services/movie.service";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { useNavigate } from "react-router";

export default function Applications() {

  const navigate = useNavigate();

  const [movies, setMovies] = useState<Movie[]>([]);

  const getMovies = async () => {
    const res: Movie[] = await MovieService.getMovies();
    setMovies(res);
  };

  useEffect(() => {
    getMovies();
  }, []);

  let tempMovies = [
    {
      id: 1,
      mainImage:
        "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
      title: "Movie Title 1",
      averageRating: 4.5,
      genre: "Action, Adventure, Sci-Fi",
      type: "Movie",
      price: "$9.99",
      description: "This is the description for Movie Title 1.",
      allReviews:
        "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
      additionalInformation: "Additional information for Movie Title 1.",
      reviews: [
        {
          id: 1,
          itemId: 1,
          author: "John Doe",
          image:
            "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
          rating: 5,
          date: "2023-04-22",
          text: "Great movie! I enjoyed every minute of it.",
        },
        {
          id: 2,
          itemId: 1,
          author: "Jane Smith",
          image:
            "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
          rating: 4,
          date: "2023-04-20",
          text: "Good movie, but not the best I have ever seen.",
        },
      ],
      trailerLink:
        "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
      cast: [
        {
          id: 1,
          name: "Actor One",
          role: "Main Character",
        },
        {
          id: 2,
          name: "Actor Two",
          role: "Supporting Character",
        },
      ],
      credits: [
        {
          id: 1,
          name: "Director One",
          role: "Director",
        },
        {
          id: 2,
          name: "Writer One",
          role: "Writer",
        },
      ],
    },
    {
      id: 2,
      mainImage:
        "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
      title: "Movie Title 2",
      averageRating: 3.5,
      genre: "Drama, Thriller",
      type: "Movie",
      price: "$12.99",
      description: "This is the description for Movie Title 2.",
      allReviews:
        "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
      additionalInformation: "Additional information for Movie Title 2.",
      reviews: [
        {
          id: 3,
          itemId: 2,
          author: "John Doe",
          image:
            "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
          rating: 3,
          date: "2023-04-22",
          text: "Not bad, but could be better.",
        },
        {
          id: 4,
          itemId: 2,
          author: "Jane Smith",
          image:
            "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
          rating: 4,
          date: "2023-04-20",
          text: "Interesting story and good acting.",
        },
      ],
      trailerLink:
        "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
      cast: [
        {
          id: 3,
          name: "Actor Three",
          role: "Main Character",
        },
        {
          id: 4,
          name: "Actor Four",
          role: "Supporting Character",
        },
      ],
      credits: [
        {
          id: 3,
          name: "Director Two",
          role: "Director",
        },
        {
          id: 4,
          name: "Writer Two",
          role: "Writer",
        },
      ],
    },
  ];
  tempMovies = [...tempMovies, ...tempMovies, ...tempMovies];

  return (
    <Box sx={{ height: "100vh" }}>
      <Box>
        <CardItem items={movies} />
        <Button
          sx={{
            position: "absolute",
            zIndex: 999,
            bottom: "10vh",
            right: "2vw",
          }}
        >
          <AddCircleOutlinedIcon onClick={() => navigate("createMovie")} sx={{ fontSize: 50, color: "gray" }} />
        </Button>
      </Box>
    </Box>
  );
}
