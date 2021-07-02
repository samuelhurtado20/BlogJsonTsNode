"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ImageSchema = new mongoose_1.Schema({
    title: String,
    imagePath: String,
    guid: String,
});
exports.default = mongoose_1.model("Image", ImageSchema);
