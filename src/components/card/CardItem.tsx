import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router";

export const CardItem = ({ items }: any) => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleClick = (item: any) => {
    if (location.pathname.includes("app")) {
      navigate(`/appdetails/${item.id}`, { state: { item } });
    } else {
      navigate(`/moviedetails/${item.id}`, { state: { item } });
    }
  };
  return (
    <Grid container spacing={2}>
      {items.map((item: any) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={item.id}
          onClick={() => handleClick(item)}
        >
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={item.mainImage}
              alt={item.title}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {`Average Rating: ${item.averageRating}`}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
