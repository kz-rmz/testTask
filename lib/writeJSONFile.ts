import fs from "fs";

export default function writeDataToJson<T>(
  pathToFile: string,
  data: T[]
): void {
  let dataToWrite;
  if (typeof data === "object") {
    dataToWrite = JSON.stringify(data);
  } else {
    dataToWrite = data;
  }
  fs.writeFile(pathToFile, dataToWrite, (err) => {
    if (err) {
      throw err;
    }
    console.log("Data added successfuly!");
  });
}
