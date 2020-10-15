import { readFileSync, readdirSync, statSync, createReadStream, createWriteStream, existsSync, unlinkSync, rmdirSync, mkdirSync, writeFileSync, copyFileSync } from "fs";
import path, { dirname } from "path";
import { IFileData } from "../data/fileData";
import { EnumFileSuffixType, EnumFileType } from "../data/enumFile";

export class FileUnit {
    /**
     * 去读文件或者文件夹
     * @param srcPath 
     * @param fileCall 
     */
    static async read(srcPath: string, fileCall: (data: IFileData) => void) {
        let createFileData = (srcPath: string, fileData: string) => {
            let srcName = path.basename(srcPath);
            let suffixType = (path.extname(srcName) || srcName) as EnumFileSuffixType;
            let fileType = this.getEnumFileType(suffixType);
            let fileName = path.basename(srcName, suffixType) || srcName;
            let data: IFileData = {
                // 地址
                path: srcPath,
                // 数据
                data: fileData,
                // 文件后缀类型
                fileSuffixType: suffixType,
                fileType: fileType,
                fileName: fileName
            }
            return data;
        }
        let exists = existsSync(srcPath);
        if (exists) {
            let state = statSync(srcPath);
            if (state.isFile()) {
                let fileData = readFileSync(srcPath, { encoding: "utf-8" });
                let data = createFileData(srcPath, fileData);
                fileCall && fileCall(data);
            } else if (state.isDirectory()) {
                let dirs = readdirSync(srcPath, "utf-8");
                dirs.forEach(async (value, index, array) => {
                    let nextPath = path.join(srcPath, value);
                    let state = statSync(nextPath);
                    if (state.isFile()) {
                        let fileData = readFileSync(nextPath, { encoding: "utf-8" });
                        let data = createFileData(nextPath, fileData);
                        fileCall && fileCall(data);
                    } else {
                        await this.read(nextPath, fileCall);
                    }
                })
            }
        }
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
     * 删除文件或者文件夹
     * @param srcPath 
     */
    static async delete(srcPath: string) {
        let exists = existsSync(srcPath);
        if (exists) {
            let state = statSync(srcPath);
            if (state.isDirectory()) {
                let files = readdirSync(srcPath);
                files.forEach(async (value, index, array) => {
                    let nextPath = path.join(srcPath, value);
                    let fileState = statSync(nextPath);
                    if (fileState.isDirectory()) {
                        this.delete(nextPath);
                    } else {
                        unlinkSync(nextPath);
                    }
                });
                rmdirSync(srcPath);
            } else if (state.isFile()) {
                unlinkSync(srcPath);
            }
        }
    }
    /**
     * 写入文件或者文件夹
     * @param srcPath 
     * @param indexPath 
     */
    static async write(indexPath: string, data: IFileData) {
        if (this.mkdirs(indexPath)) {
            let state = statSync(indexPath);
            switch (data.fileType) {
                case EnumFileType.IMG:
                    this.copy(data.path, indexPath);
                    break;
                default:
                    if (state.isFile()) {
                        writeFileSync(indexPath, data.data);
                    } else {
                        indexPath = path.join(indexPath, `${data.fileName}${data.fileSuffixType}`);
                        writeFileSync(indexPath, data.data);
                    }
                    break;
            }
        }
    }
    /**
     * 创建文件夹
     * @param path 
     */
    static mkdirs(path: string): boolean {
        if (existsSync(path)) {
            return true;
        } else {
            let dirName = dirname(path);
            if (this.mkdirs(dirName)) {
                mkdirSync(path);
                return true;
            }
            return false;
        }
    }
    /**
     * 复制文件夹或者文件
     * @param srcPath 
     * @param dstPath 
     */
    static async copy(srcPath: string, dstPath: string) {
        let copyWrite = (srcPath: string, dstPath: string) => {
            if (existsSync(dstPath)) {
                let dstPStat = statSync(dstPath);
                if (dstPStat.isDirectory()) {
                    let srcName = path.basename(srcPath)
                    dstPath = path.join(dstPath, srcName);
                }
            }
            copyFileSync(srcPath, dstPath);
            // let readable = createReadStream(srcPath);
            // // 创建写入流
            // let writable = createWriteStream(dstPath);
            // // 通过管道来传输流
            // readable.pipe(writable);
        }
        if (this.mkdirs(dstPath)) {
            let srcStat = statSync(srcPath);
            if (srcStat.isFile()) {
                // copyFileSync(srcPath, dstPath);
                copyWrite(srcPath, dstPath);
            } else if (srcStat.isDirectory()) {
                let dirs = readdirSync(srcPath);
                dirs.forEach((value: string, index: number, array) => {
                    let nextSrcPath = path.join(srcPath, value);
                    let nextDstPath = path.join(dstPath, value);
                    let stat = statSync(nextSrcPath);
                    if (stat.isFile()) {
                        // copyFileSync(nextSrcPath, nextSrcPath);
                        copyWrite(nextSrcPath, nextDstPath);
                    } else {
                        this.copy(nextSrcPath, nextDstPath);
                    }
                })
            }
        }

    }

}





