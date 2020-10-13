import { FileUnit, EnumFile } from "./fileTool";

export async function main() {
    await FileUnit.readDir("../../assets", [EnumFile.JPG, EnumFile.PNG]);
    console.log(FileUnit.fileMap);
}

main();