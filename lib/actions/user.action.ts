"use server";

import User from "@/database/user.model";
import { connectToDb } from "../moongose";

export async function getUserById(params: any) {
  try {
    connectToDb();

    const { userId } = params;
    const user = await User.findOne({ clerkId: userId });

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
