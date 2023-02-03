import { resolve } from "path";
import readJSONFile from "./readJSONFile";
import writeDataToJson from "./writeJSONFile";

export async function newInputValue({
  numberValue,
  isFloat,
}: {
  numberValue: string;
  isFloat: boolean;
}) {
  const pathToFile = resolve("lib/averageNumberData.json");
  const currentValue =
    isFloat === true ? parseFloat(numberValue) : parseInt(numberValue);
  const data: any = await readJSONFile<Promise<number[]>>(pathToFile);
  if (data.length <= 0) {
    data.push(currentValue);
    writeDataToJson(pathToFile, data);
    return;
  } else {
    const previousValue = data.at(data.length - 1);
    if (typeof previousValue === "undefined") {
      return;
    }
    const calculationResult = (previousValue + currentValue) / 2;
    data.push(calculationResult);
    writeDataToJson(pathToFile, data);
  }
}
