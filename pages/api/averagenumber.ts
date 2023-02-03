import type { NextApiRequest, NextApiResponse } from "next";
import averageNumber from "@/lib/averageNumberData.json";
import { newInputValue } from "@/lib/getAverageNumber";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<number[]>
) {
  switch (req.method) {
    case "POST":
      try {
        newInputValue(req.body);
        return res.status(200).end();
      } catch (e) {
        console.log(`Error posting request: ${e}`);
        return res.status(500).end();
      }
    case "GET":
      return res.status(200).json(averageNumber);
  }
}
