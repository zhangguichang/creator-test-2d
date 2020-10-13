import { FileUnit, EnumFileType } from "./fileTool";

export async function main() {
    await FileUnit.readDir("../../assets");
    let imgDatas = FileUnit.getFileDatasByFileType(EnumFileType.IMG);
    let fileDatas = FileUnit.getFileDatasByFileType(EnumFileType.FILE);
}

main();