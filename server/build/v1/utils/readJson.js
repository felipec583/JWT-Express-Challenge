import path from "path";
import fs from "fs";
function getFileData(filePath) {
    const fileCheck = fs.existsSync(path.resolve(filePath));
    if (!fileCheck) {
        console.log("This file does not exist");
        return;
    }
    const file = JSON.parse(fs.readFileSync(path.resolve(filePath), "utf-8"));
    return file;
}
export { getFileData };
//# sourceMappingURL=readJson.js.map