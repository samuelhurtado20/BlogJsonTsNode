"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageController = void 0;
const Image_1 = __importDefault(require("../models/Image"));
const path_1 = __importDefault(require("path"));
const helpers_1 = require("../lib/helpers");
class ImageController {
    Index(req, res) {
        let images = [];
        const dir = path_1.default.join(__dirname, "../public/images/");
        helpers_1.helpers.GetImagesFiles(images, dir);
        console.log(JSON.stringify(images));
        res.render("images/index", { images: images });
    }
    Add(req, res) {
        res.render("images/add", { title: "New image" });
    }
    // public async Save(req: Request, res: Response) {
    // 	const { title, author, p1 } = req.body;
    // 	const newImage: IImage = new Image({ title, author, p1 });
    // 	helpers.SaveImageFile(newImage);
    // 	res.redirect("/images");
    // }
    // public async UploadPhoto(
    //     title: HTMLInputElement,
    //     description: HTMLTextAreaElement
    //   ): boolean {
    //     this.photoService
    //       .createPhoto(title.value, description.value, this.file)
    //       .subscribe(
    //         (resp) => this.router.navigate(['/photos']),
    //         (error) => console.log(error)
    //       );
    //     return false;
    //   }
    //   createPhoto(title: string, description: string, photo: File) {
    //     const fd = new FormData();
    //     fd.append('title', title);
    //     fd.append('description', description);
    //     fd.append('image', photo);
    //     return this.http.post(this.Uri, fd);
    //   }
    //   export async function AddPhoto(req: Request, res: Response): Promise<Response> {
    //     const { title, description } = req.body;
    //     const newPhoto = { title, description, imagePath: req.file.path };
    //     const photo = new Photo(newPhoto);
    //     await photo.save();
    //     return res.json({
    //         message: "Photo Saved Successfully",
    //         photo,
    //     });
    // }
    async AddPhoto(req, res) {
        var _a, _b, _c, _d, _e, _f;
        const { title } = req.body;
        const newPhoto = {
            title,
            imagePath: "uploads/" + ((_a = req.file) === null || _a === void 0 ? void 0 : _a.filename),
            guid: (_b = req.file) === null || _b === void 0 ? void 0 : _b.filename.replace(path_1.default.extname(req.file.originalname), ""),
        };
        console.log((_c = req.file) === null || _c === void 0 ? void 0 : _c.path);
        console.log((_d = req.file) === null || _d === void 0 ? void 0 : _d.originalname);
        console.log((_e = req.file) === null || _e === void 0 ? void 0 : _e.filename);
        console.log((_f = req.file) === null || _f === void 0 ? void 0 : _f.filename.replace(path_1.default.extname(req.file.originalname), ""));
        const photo = new Image_1.default(newPhoto);
        helpers_1.helpers.SaveImageFile(photo);
        res.redirect("/images");
    }
}
exports.imageController = new ImageController();
