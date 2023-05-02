export interface Review {
  id: number;
  itemId: number;
  author?: string;
  image?: string;
  rating: number;
  date: string;
  text?: string;
  replies?: Reply[];
}

export interface Reply {
  id: number;
  author?: string;
  date: string;
  text?: string;
  reviewId: number;
}

export interface App {
  id: number;
  mainImage?: string;
  title: string;
  averageRating?: number;
  genre: string;
  type: string;
  price?: string;
  description?: string;
  allReviews?: string;
  additionalInformation?: string;
  reviews?: Review[];
  image_1?: string;
  image_2?: string;
  image_3?: string;
}
