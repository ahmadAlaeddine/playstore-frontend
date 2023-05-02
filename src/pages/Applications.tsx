import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { App } from "../models/app.model";
import AppsServices from "../services/apps.service";
import { CardItem } from "../components/card/CardItem";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { useNavigate } from "react-router";
export default function Applications() {
  const navigate = useNavigate();
  const [apps, setApps] = useState<App[]>([]);

  const getApps = async () => {
    const res: App[] = await AppsServices.getApps();
    setApps(res);
  };

  useEffect(() => {
    getApps();
  }, []);

  let tempApps: App[] = [
    {
      id: 1,
      mainImage:
        "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
      title: "App 1",
      averageRating: 4.5,
      genre: "Productivity",
      type: "Paid",
      price: "$2.99",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      allReviews:
        "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
      additionalInformation:
        "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
      reviews: [
        {
          id: 1,
          itemId: 1,
          author: "John Doe",
          image:
            "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
          rating: 4,
          date: "2023-04-20",
          text: "This app is great!",
          replies: [
            {
              id: 1,
              author: "App Developer",
              date: "2023-04-21",
              text: "Thank you for your review!",
              reviewId: 1,
            },
          ],
        },
      ],
      image_1:
        "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
      image_2:
        "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
      image_3:
        "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
    },
    {
      id: 2,
      mainImage:
        "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
      title: "App 2",
      averageRating: 3.7,
      genre: "Entertainment",
      type: "Free",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      allReviews:
        "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
      additionalInformation:
        "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
      reviews: [
        {
          id: 1,
          itemId: 2,
          author: "Jane Smith",
          image:
            "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
          rating: 5,
          date: "2023-04-18",
          text: "I love this app!",
          replies: [
            {
              id: 1,
              author: "App Developer",
              date: "2023-04-19",
              text: "Thank you for your review!",
              reviewId: 1,
            },
          ],
        },
      ],
      image_1:
        "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
      image_2:
        "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
      image_3:
        "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
    },
  ];
  tempApps = [...tempApps, ...tempApps, ...tempApps];

  return (
    <Box sx={{ height: "100vh" }}>
      <Box></Box>
      <Box>
        <CardItem items={apps} />
        <Button
          sx={{
            position: "absolute",
            zIndex: 999,
            bottom: "10vh",
            right: "2vw",
          }}
        >
          <AddCircleOutlinedIcon
            onClick={() => navigate("createApp")}
            sx={{ fontSize: 50, color: "gray" }}
          />
        </Button>
      </Box>
    </Box>
  );
}
