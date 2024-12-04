import { NextApiRequest, NextApiResponse } from "next";
import { MessageData } from "../../model";

export default function handler(
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

    console.log(newMessage);

    return response.status(201).json({
      message: "Message sent and received to owner",
    });
  }
}
