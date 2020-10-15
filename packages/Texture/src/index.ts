import { FileUnit } from "./unit/FileUnit";
import { argv } from "process";
import { EnumFileType, EnumFileSuffixType } from "./data/enumFile";
import { IFileData } from "./data/fileData";
import path, { normalize } from "path";
import { openSync, writeFileSync, mkdirSync, createReadStream, createWriteStream } from "fs";

export async function main() {
    let indexPath = argv[2];
    let artPath = argv[3];
    let replacePath = argv[4];
    let assetsArr: Array<IFileData> = [];
    await FileUnit.read(indexPath, (data: IFileData) => {
        assetsArr.push(data);
    });

    await FileUnit.read(artPath, (data: IFileData) => {
        let dthName = data.fileName + data.fileSuffixType;
        let isfind: boolean = false;
        for (let i = 0; i < assetsArr.length; i++) {
            let srcAssetData = assetsArr[i];
            let fileName = srcAssetData.fileName + srcAssetData.fileSuffixType;
            if (fileName == dthName) {
                isfind = true;
                FileUnit.copy(data.path, srcAssetData.path);
            }
        }
        if (!isfind) {
            FileUnit.copy(data.path, replacePath);
        }
    });

}
main();