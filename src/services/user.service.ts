import axios from "axios";
import { envs } from "../config/envs";
import { User } from "../models/user.model";

export const createUser = async (
  user: User,
  password: string
): Promise<User> => {
  const response = await axios.post(`${envs.api}/User`, user, {
    params: { password },
  });
  return response.data;
};

export const loginUser = async (credentials: {
  username: string;
  password: string;
}): Promise<void> => {
  await axios.post(`${envs.api}/User/login`, credentials);
};

export const updateUserLastViewed = async (
  userId: number,
  itemId: number
): Promise<void> => {
  await axios.put(`${envs.api}/User/1/lastViewed/${itemId}`);
};

export const deleteUserLastViewed = async (
  userId: number,
  itemId: number
): Promise<void> => {
  await axios.delete(`${envs.api}/User/1/lastViewed/${itemId}`);
};

export const getUserLastViewedAndWishList = async (
  userId: number
): Promise<any> => {
  const response = await axios.get(
    `${envs.api}/User/1/lastViewedAndWishList`
  );
  return response.data;
};

export const updateUserWishList = async (
  userId: number,
  itemId: number
): Promise<void> => {
  await axios.put(`${envs.api}/User/1/WishList/${itemId}`);
};

const UserService = {
  createUser,
  loginUser,
  updateUserLastViewed,
  deleteUserLastViewed,
  getUserLastViewedAndWishList,
  updateUserWishList,
};

export default UserService;
