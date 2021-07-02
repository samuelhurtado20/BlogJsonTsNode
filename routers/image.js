"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ImageController_1 = require("../controllers/ImageController");
const multer_1 = require("../lib/multer");
const ImagesRoutes = express_1.Router();
ImagesRoutes.get("/", ImageController_1.imageController.Index);
ImagesRoutes.get("/add", ImageController_1.imageController.Add);
ImagesRoutes.post("/AddPhoto", multer_1.upload.single("image"), ImageController_1.imageController.AddPhoto);
// ImagesRoutes.post("/", upload.single("image"), (req, res) => {
// 	const fs = require("fs");
// 	var img = fs.readFileSync(req.file.path);
// 	var encode_image = img.toString("base64");
// 	// Define a JSONobject for the image attributes for saving to database
// 	var finalImg = {
// 		contentType: req.file.mimetype,
// 		image: new Buffer(encode_image, "base64"),
// 	};
// });
//router.route("/photos").get(GetPhotos).post(upload.single("image"), AddPhoto);
exports.default = ImagesRoutes;
