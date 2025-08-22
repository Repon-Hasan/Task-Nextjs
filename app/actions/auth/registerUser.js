"use server";

import dbConnect, { collectionNameObject } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const registerUser = async (payload) => {
  const userCollection = await dbConnect(collectionNameObject.userCollection);

  // Check if user already exists
  const existingUser = await userCollection.findOne({ email: payload.email });
  if (existingUser) {
    return { error: "User already exists" };
  }

  // Hash the password before saving
  //const hashedPassword = await bcrypt.hash(payload.password, 10);

  const result = await userCollection.insertOne({
    email: payload.email,
    password: payload.password,
  });

  return {
    acknowledged: result.acknowledged,
    insertedId: result.insertedId.toString(),
    email: payload.email,
  };
};
