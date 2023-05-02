import axios from "axios";
import { envs } from "../config/envs";
import { App } from "../models/app.model";
import { Review } from "../models/app.model";
import { Reply } from "../models/app.model";

export const getApps = async (): Promise<App[]> => {
  const response = await axios.get(`${envs.api}/App/GetAppsWithReviews`);
  return response.data;
};

export const getAppById = async (id: number): Promise<App> => {
  const response = await axios.get(`${envs.api}/App/${id}`);
  return response.data;
};

export const getAppWithReviewsById = async (id: number): Promise<App> => {
  const response = await axios.get(`${envs.api}/App/GetAppWithReviews/${id}`);
  return response.data;
};

export const createApp = async (app: App): Promise<App> => {
  const response = await axios.post(`${envs.api}/App`, app);
  return response.data;
};

export const deleteApp = async (id: number): Promise<void> => {
  await axios.delete(`${envs.api}/App/${id}`);
};

export const addReview = async (id: number, review: Review): Promise<void> => {
  await axios.post(`${envs.api}/App/AddReview/${id}`, review);
};

export const addReply = async (id: number, reply: Reply): Promise<void> => {
  await axios.post(`${envs.api}/App/AddReply/${id}`, reply);
};

export const editMainImage = async (
  id: number,
  mainImage: string
): Promise<App> => {
  const response = await axios.patch(
    `${envs.api}/App/images/edit/${id}?mainImage=${mainImage}`
  );
  return response.data;
};

export const editImage1 = async (id: number, image1: string): Promise<App> => {
  const response = await axios.patch(
    `${envs.api}/App/images/edit/image1/${id}?image1=${image1}`
  );
  return response.data;
};

export const editImage3 = async (id: number, image3: string): Promise<App> => {
  const response = await axios.patch(
    `${envs.api}/App/images/edit/image3/${id}?image3=${image3}`
  );
  return response.data;
};

const AppsServices = {
  getApps,
  getAppById,
  getAppWithReviewsById,
  createApp,
  deleteApp,
  addReview,
  addReply,
  editMainImage,
  editImage1,
  editImage3,
};
export default AppsServices;
