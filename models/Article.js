"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ArticleSchema = new mongoose_1.Schema({
    title: String,
    author: String,
    imageGuid: String,
    p1: String,
});
exports.default = mongoose_1.model("Article", ArticleSchema);
