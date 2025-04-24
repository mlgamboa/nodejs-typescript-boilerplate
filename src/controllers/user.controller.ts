import { Request, Response } from "express";
import { getAllUsersService } from "../services/user.service";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsersService();
    res
      .status(200)
      .json({ message: "Users fetched successfully", data: users });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch users", error: err });
  }
};
