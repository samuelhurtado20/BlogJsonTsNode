"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
//import uuid from "uuid/v1";
const uuid_1 = require("uuid");
// Settings
const storage = multer_1.default.diskStorage({
    destination: path_1.default.join(__dirname, "../public/uploads/"),
    filename: (req, file, cb) => {
        cb(null, uuid_1.v1() + path_1.default.extname(file.originalname));
    },
});
exports.upload = multer_1.default({ storage });
