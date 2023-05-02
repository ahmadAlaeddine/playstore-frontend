import Login from "../pages/Login";
import Movies from "../pages/Movies";
import Applications from "../pages/Applications";
import AppDetails from "../pages/AppDetails";
import Wishlist from "../pages/Wishlist";
import MovieDetails from "../pages/MovieDetails";
import CreateMovieForm from "../pages/CreateMovieForm";
import CreateAppForm from "../pages/CreateAppForm";

export interface RouteType {
  path: string;
  component: (prop?: any) => JSX.Element;
  name: string;
}

const routes: RouteType[] = [
  {
    path: "/apps",
    component: Applications,
    name: "Apps Page",
  },
  {
    path: "/movies",
    component: Movies,
    name: "Movies Page",
  },
  {
    path: "/movies/createMovie",
    component: CreateMovieForm,
    name: "Create Movie Page",
  },
  {
    path: "/apps/createApp",
    component: CreateAppForm,
    name: "Create App Page",
  },
  {
    path: "/appdetails/:id",
    component: AppDetails,
    name: "Details Page",
  },
  {
    path: "/moviedetails/:id",
    component: MovieDetails,
    name: "Details Page",
  },
  {
    path: "/wishlist",
    component: Wishlist,
    name: "Wishlist Page",
  },
  {
    path: "/login",
    component: Login,
    name: "Login Page",
  },
];

export default routes;
