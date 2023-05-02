import { Review } from "./app.model";

export interface Movie {
  id: number;
  mainImage: string;
  title: string;
  averageRating: number;
  genre: string;
  type: string;
  price: string;
  description: string;
  allReviews: string;
  additionalInformation: string;
  reviews: Review[];
  trailerLink: string;
  cast: Cast[];
  credits: Credit[];
}

export interface Cast {
  id: number;
  name: string;
  role: string;
}

export interface Credit {
  id: number;
  name: string;
  role: string;
}
