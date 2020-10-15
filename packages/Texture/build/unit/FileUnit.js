"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUnit = void 0;
var fs_1 = require("fs");
var path_1 = __importStar(require("path"));
var enumFile_1 = require("../data/enumFile");
var FileUnit = /** @class */ (function () {
    function FileUnit() {
    }
    /**
     * 去读文件或者文件夹
     * @param srcPath
     * @param fileCall
     */
    FileUnit.read = function (srcPath, fileCall) {
        return __awaiter(this, void 0, void 0, function () {
            var createFileData, exists, state, fileData, data, dirs;
            var _this = this;
            return __generator(this, function (_a) {
                createFileData = function (srcPath, fileData) {
                    var srcName = path_1.default.basename(srcPath);
                    var suffixType = (path_1.default.extname(srcName) || srcName);
                    var fileType = _this.getEnumFileType(suffixType);
                    var fileName = path_1.default.basename(srcName, suffixType) || srcName;
                    var data = {
                        // 地址
                        path: srcPath,
                        // 数据
                        data: fileData,
                        // 文件后缀类型
                        fileSuffixType: suffixType,
                        fileType: fileType,
                        fileName: fileName
                    };
                    return data;
                };
                exists = fs_1.existsSync(srcPath);
                if (exists) {
                    state = fs_1.statSync(srcPath);
                    if (state.isFile()) {
                        fileData = fs_1.readFileSync(srcPath, { encoding: "utf-8" });
                        data = createFileData(srcPath, fileData);
                        fileCall && fileCall(data);
                    }
                    else if (state.isDirectory()) {
                        dirs = fs_1.readdirSync(srcPath, "utf-8");
                        dirs.forEach(function (value, index, array) { return __awaiter(_this, void 0, void 0, function () {
                            var nextPath, state, fileData, data;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        nextPath = path_1.default.join(srcPath, value);
                                        state = fs_1.statSync(nextPath);
                                        if (!state.isFile()) return [3 /*break*/, 1];
                                        fileData = fs_1.readFileSync(nextPath, { encoding: "utf-8" });
                                        data = createFileData(nextPath, fileData);
                                        fileCall && fileCall(data);
                                        return [3 /*break*/, 3];
                                    case 1: return [4 /*yield*/, this.read(nextPath, fileCall)];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); });
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * 获取文件类型
     * @param fileSuffixType 文件后缀
     */
    FileUnit.getEnumFileType = function (fileSuffixType) {
        switch (fileSuffixType) {
            case enumFile_1.EnumFileSuffixType.JPG:
            case enumFile_1.EnumFileSuffixType.PNG:
                return enumFile_1.EnumFileType.IMG;
            default:
                return enumFile_1.EnumFileType.FILE;
        }
    };
    /**
     * 删除文件或者文件夹
     * @param srcPath
     */
    FileUnit.delete = function (srcPath) {
        return __awaiter(this, void 0, void 0, function () {
            var exists, state, files;
            var _this = this;
            return __generator(this, function (_a) {
                exists = fs_1.existsSync(srcPath);
                if (exists) {
                    state = fs_1.statSync(srcPath);
                    if (state.isDirectory()) {
                        files = fs_1.readdirSync(srcPath);
                        files.forEach(function (value, index, array) { return __awaiter(_this, void 0, void 0, function () {
                            var nextPath, fileState;
                            return __generator(this, function (_a) {
                                nextPath = path_1.default.join(srcPath, value);
                                fileState = fs_1.statSync(nextPath);
                                if (fileState.isDirectory()) {
                                    this.delete(nextPath);
                                }
                                else {
                                    fs_1.unlinkSync(nextPath);
                                }
                                return [2 /*return*/];
                            });
                        }); });
                        fs_1.rmdirSync(srcPath);
                    }
                    else if (state.isFile()) {
                        fs_1.unlinkSync(srcPath);
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * 写入文件或者文件夹
     * @param srcPath
     * @param indexPath
     */
    FileUnit.write = function (indexPath, data) {
        return __awaiter(this, void 0, void 0, function () {
            var state;
            return __generator(this, function (_a) {
                if (this.mkdirs(indexPath)) {
                    state = fs_1.statSync(indexPath);
                    switch (data.fileType) {
                        case enumFile_1.EnumFileType.IMG:
                            this.copy(data.path, indexPath);
                            break;
                        default:
                            if (state.isFile()) {
                                fs_1.writeFileSync(indexPath, data.data);
                            }
                            else {
                                indexPath = path_1.default.join(indexPath, "" + data.fileName + data.fileSuffixType);
                                fs_1.writeFileSync(indexPath, data.data);
                            }
                            break;
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * 创建文件夹
     * @param path
     */
    FileUnit.mkdirs = function (path) {
        if (fs_1.existsSync(path)) {
            return true;
        }
        else {
            var dirName = path_1.dirname(path);
            if (this.mkdirs(dirName)) {
                fs_1.mkdirSync(path);
                return true;
            }
            return false;
        }
    };
    /**
     * 复制文件夹或者文件
     * @param srcPath
     * @param dstPath
     */
    FileUnit.copy = function (srcPath, dstPath) {
        return __awaiter(this, void 0, void 0, function () {
            var copyWrite, srcStat, dirs;
            var _this = this;
            return __generator(this, function (_a) {
                copyWrite = function (srcPath, dstPath) {
                    if (fs_1.existsSync(dstPath)) {
                        var dstPStat = fs_1.statSync(dstPath);
                        if (dstPStat.isDirectory()) {
                            var srcName = path_1.default.basename(srcPath);
                            dstPath = path_1.default.join(dstPath, srcName);
                        }
                    }
                    var readable = fs_1.createReadStream(srcPath);
                    // 创建写入流
                    var writable = fs_1.createWriteStream(dstPath);
                    // 通过管道来传输流
                    readable.pipe(writable);
                };
                if (this.mkdirs(dstPath)) {
                    srcStat = fs_1.statSync(srcPath);
                    if (srcStat.isFile()) {
                        copyWrite(srcPath, dstPath);
                    }
                    else if (srcStat.isDirectory()) {
                        dirs = fs_1.readdirSync(srcPath);
                        dirs.forEach(function (value, index, array) {
                            var nextSrcPath = path_1.default.join(srcPath, value);
                            var nextDstPath = path_1.default.join(dstPath, value);
                            var stat = fs_1.statSync(nextSrcPath);
                            if (stat.isFile()) {
                                copyWrite(nextSrcPath, nextDstPath);
                            }
                            else {
                                _this.copy(nextSrcPath, nextDstPath);
                            }
                        });
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    return FileUnit;
}());
exports.FileUnit = FileUnit;
//# sourceMappingURL=FileUnit.js.map