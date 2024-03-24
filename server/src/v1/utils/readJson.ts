import path from "path";
import fsp from "fs/promises";
import fs from "fs";

function getFileData(filePath: string) {
  const fileCheck = fs.existsSync(path.resolve(filePath));
  if (!fileCheck) {
    console.log("This file does not exist");
    return;
  }
  const file = JSON.parse(fs.readFileSync(path.resolve(filePath), "utf-8"));
  return file;
}

export { getFileData };
