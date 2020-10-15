"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumFileType = exports.EnumFileSuffixType = void 0;
// 文件后缀类型
var EnumFileSuffixType;
(function (EnumFileSuffixType) {
    EnumFileSuffixType["PNG"] = ".png";
    EnumFileSuffixType["JPG"] = ".jpg";
    EnumFileSuffixType["PREFAB"] = ".prefab";
    EnumFileSuffixType["TS"] = ".ts";
})(EnumFileSuffixType = exports.EnumFileSuffixType || (exports.EnumFileSuffixType = {}));
// 文件类型
var EnumFileType;
(function (EnumFileType) {
    // 图片
    EnumFileType[EnumFileType["IMG"] = 0] = "IMG";
    // 文件
    EnumFileType[EnumFileType["FILE"] = 1] = "FILE";
})(EnumFileType = exports.EnumFileType || (exports.EnumFileType = {}));
//# sourceMappingURL=enumFile.js.map