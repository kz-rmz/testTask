import type { NextApiRequest, NextApiResponse } from "next";
import messagesList from "@/lib/messagesData.json";
import IMessageObject from "@/lib/IMessageObject";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IMessageObject[]>
) {
  switch (req.method) {
    case "GET":
      return res.json(messagesList);
  }
}
