import pool from "../config/db";
import { RowDataPacket } from "mysql2";
import { User } from "../models/user";

export const getUsersFromDB = async (): Promise<User[]> => {
  const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM users");
  return rows as User[];
};
