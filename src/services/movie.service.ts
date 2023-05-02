import axios from "axios";
import { envs } from "../config/envs";
import { Movie } from "../models/movie.model";

const getMovies = async (): Promise<Movie[]> => {
  const response = await axios.get(`${envs.api}/Movie`);
  return response.data;
};

const getMovieById = async (id: number): Promise<Movie> => {
  const response = await axios.get(`${envs.api}/Movie/${id}`);
  return response.data;
};

const createMovie = async (movie: Movie): Promise<Movie> => {
  const response = await axios.post(`${envs.api}/Movie`, movie);
  return response.data;
};

const deleteMovieById = async (id: number): Promise<void> => {
  await axios.delete(`${envs.api}/Movie/movies/${id}`);
};

const updateTrailerLink = async (
  id: number,
  trailer: string
): Promise<Movie> => {
  const response = await axios.patch(`${envs.api}/Movie/trailer/edit/${id}`, {
    trailer,
  });
  return response.data;
};

const MovieService = {
  getMovieById,
  createMovie,
  deleteMovieById,
  updateTrailerLink,
  getMovies,
};

export default MovieService;
