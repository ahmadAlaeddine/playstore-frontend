import { Review } from "./app.model";

export interface Item {
  id: number;
  mainImage?: string;
  title: string;
  averageRating: number;
  genre: string;
  type: string;
  price?: string;
  description?: string;
  allReviews?: string;
  additionalInformation?: string;
  reviews?: Review[];
}

export interface User {
  id: number;
  username?: string;
  password?: string;
  profile_pic?: string;
  lastViewed?: Item[];
  wishList?: Item[];
  recv_emails: boolean;
  admin: boolean;
}
