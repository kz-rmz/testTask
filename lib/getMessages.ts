import path from "path";
import IMessageObject from "@/lib/IMessageObject";
import readJSONFile from "./readJSONFile";
import writeDataToJson from "./writeJSONFile";

export default async function newMessage(newData: IMessageObject) {
  const pathToFile = path.resolve("lib/messagesData.json");
  const data: any = await readJSONFile(pathToFile);
  data.push(newData);
  writeDataToJson(pathToFile, data);
}
