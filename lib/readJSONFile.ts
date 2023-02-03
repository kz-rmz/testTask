import fs from "fs";

export default function readJSONFile<T>(pathToFile: string) {
  return new Promise((resolve, reject) => {
    fs.readFile(pathToFile, (error, data) => {
      if (error) {
        reject(new Error(`File reading error! Check path to file! : {error}`));
      }
      const result: T[] = JSON.parse(data.toString());
      resolve(result);
    });
  });
}
