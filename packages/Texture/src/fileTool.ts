import { readFileSync, readdirSync, statSync } from "fs";
import path from "path";
// 文件后缀类型
export enum EnumFileSuffixType {
    PNG = "png",
    JPG = "jpg",
    PREFAB = "prefab",
    TS = "ts"
}
// 文件类型
export enum EnumFileType {
    // 图片
    IMG,
    // 文件
    FILE
}
// 文件数据
export interface IFileData {
    // 地址
    path: string,
    // 数据
    data: string,
    // 文件后缀类型
    fileSuffixType: EnumFileSuffixType | string,
    // 
    fileType: EnumFileType
}

export class FileUnit {
    static fileMap: Map<string, IFileData> = new Map();
    constructor() {

    }
    /**
     * 读取文件夹
     * @param filePath 路径
     */
    static async readDir(filePath: string) {
        let dirs = readdirSync(filePath, "utf-8");
        dirs.forEach(async (value, index, array) => {
            let nextPath = path.join(filePath, value);
            let state = statSync(nextPath);
            if (state.isFile()) {
                await this.readFile(nextPath)
            } else {
                await this.readDir(nextPath);
            }
        })
    }
    /**
     * 读取文件
     * @param path 文件路径
     */
    static async readFile(path: string) {
        let file = path.split(".");
        let fileSuffixType = file[file.length - 1];
        let fileType = this.getEnumFileType(fileSuffixType);
        let data = readFileSync(path, { encoding: "utf-8" });
        let fileData: IFileData = {
            // 地址
            path: path,
            // 数据
            data: data,
            // 文件后缀类型
            fileSuffixType: fileSuffixType,
            // 文件类型
            fileType: fileType
        }
        this.fileMap.set(path, fileData);
        return data;
    }
    /**
     * 根据文件类型获取数据
     * @param fileSuffixType 
     */
    static getFileDatasByFileSuffixType(fileSuffixType: EnumFileSuffixType): Array<IFileData> {
        let arr: Array<IFileData> = [];
        this.fileMap.forEach((value: IFileData, key: string, map) => {
            if (value.fileSuffixType == fileSuffixType) {
                arr.push(value);
            }
        });
        return arr;
    }


    /**
   * 根据文件类型获取数据
   * @param fileType 
   */
    static getFileDatasByFileType(fileType: EnumFileType): Array<IFileData> {
        let arr: Array<IFileData> = [];
        this.fileMap.forEach((value: IFileData, key: string, map) => {
            if (value.fileType == fileType) {
                arr.push(value);
            }
        });
        return arr;
    }

    /**
     * 获取文件类型
     * @param fileSuffixType 文件后缀
     */
    static getEnumFileType(fileSuffixType: EnumFileSuffixType | string): EnumFileType {
        switch (fileSuffixType) {
            case EnumFileSuffixType.JPG:
            case EnumFileSuffixType.PNG:
                return EnumFileType.IMG;
            default:
                return EnumFileType.FILE;
        }
    }
    /**
     * 重置
     */
    static reset() {
        this.fileMap.clear();
    }
}





