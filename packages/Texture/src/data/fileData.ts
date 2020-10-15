import { EnumFileSuffixType, EnumFileType } from "./enumFile";

// 文件数据
export interface IFileData {
    // 地址
    path: string,
    // 数据
    data: string,
    // 文件名
    fileName: string,
    // 文件后缀类型
    fileSuffixType: EnumFileSuffixType 
    // 
    fileType: EnumFileType
}