import type { NextApiRequest, NextApiResponse } from "next";
import newMessage from "@/lib/getMessages";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.body === null) {
    console.log("Request body is null!");
    return;
  }
  newMessage(req.body);
  res.status(200).end("Sended succesfully!");
}
