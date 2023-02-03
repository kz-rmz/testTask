import type { NextApiRequest, NextApiResponse } from "next";
import IMessageObject from "@/lib/IMessageObject";
import path from "node:path/win32";
import fs from "fs";
import newMessage from "@/lib/getMessages";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.body === null) {
    console.log("Request body is null!");
    return;
  }
  newMessage(req.body);
  res.status(200).end("Sended succesfully!");
}
