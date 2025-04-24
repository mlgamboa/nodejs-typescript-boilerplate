import { getUsersFromDB } from "../dao/user.dao";
import { User } from "../models/user";

export const getAllUsersService = async (): Promise<User[]> => {
  return await getUsersFromDB();
};
