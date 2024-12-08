import { NextApiRequest, NextApiResponse } from "next";
import { MessageData } from "../../model";
import { Db, InsertOneResult, MongoClient } from "mongodb";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "POST") {
    const { email, name, message } = request.body;

    if (
      !email ||
      !email.includes("@") ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      return response.status(400).json({
        message: "Invalid input.",
      });
    }

    const newMessage: MessageData = {
      email,
      message,
      name,
    };

    try {
      const dbUrl:
        | string
        | undefined = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.izm0dyb.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
      if (!dbUrl) {
        return response
          .status(500)
          .json({ message: "Could not find Database URL" });
      }

      const client: MongoClient = await MongoClient.connect(dbUrl);
      const db: Db = client.db();

      const result: InsertOneResult = await db
        .collection("messages")
        .insertOne(newMessage);

      newMessage.id = result.insertedId;
      await client.close();
    } catch (error: unknown) {
      if (error instanceof Error)
        response.status(500).json({ message: error.message });
      else response.status(500).json({ message: "Unknown error occured." });
    }

    return response.status(201).json({
      message: "Message sent and received to owner",
    });
  }

  return response.status(405).json({ message: "Method not allowed." });
}
