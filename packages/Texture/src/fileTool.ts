import { readFileSync, readdirSync, statSync } from "fs";
import path from "path";
// 文件类型
export enum EnumFile {
    PNG = "png",
    JPG = "jpg",
    PREFAB = "prefab",
    TS = "ts"
}

export class FileUnit {
    static fileMap: Map<string, string> = new Map();
    constructor() {

    }

    static async readDir(filePath: string, files: Array<EnumFile>) {
        let dirs = readdirSync(filePath, "utf-8");
        dirs.forEach(async (value, index, array) => {
            let nextPath = path.join(filePath, value);
            let state = statSync(nextPath);
            if (state.isFile()) {
                await this.readFile(nextPath, files)
            } else {
                await this.readDir(nextPath, files);
            }
        })
    }


    static async readFile(path: string, fileTypes?: Array<EnumFile>) {
        let isCanRead: boolean = fileTypes ? false : true;
        let file = path.split(".");
        if (fileTypes) {
            for (let i = 0; i < fileTypes.length; i++) {
                let fileType = fileTypes[i];
                if (fileType == file[file.length - 1]) {
                    isCanRead = true;
                    break;
                }
            }
        }
        if (isCanRead) {
            let data = this.fileMap.get(path);
            if (!data) {
                data = readFileSync(path, { encoding: "utf-8" });
                this.fileMap.set(path, data);
            }
            return data;
        }
        return null;
    }
}





