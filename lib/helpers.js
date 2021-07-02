"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helpers = void 0;
const path_1 = __importDefault(require("path"));
class Helpers {
    SaveArticleFile(newArticle) {
        // file system module to perform file operations
        const fs = require("fs");
        var jsonContent = JSON.stringify(newArticle);
        //console.log(jsonContent);
        //console.log(path.join(__dirname, "../public/articles/") + newArticle._id.toString() + ".json");
        fs.writeFile(path_1.default.join(__dirname, "../public/articles/") + newArticle._id.toString() + ".json", jsonContent, "utf8", function (err) {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
            }
            console.log("JSON file has been saved.");
        });
    }
    SaveImageFile(newImage) {
        // file system module to perform file operations
        const fs = require("fs");
        var jsonContent = JSON.stringify(newImage);
        //console.log(jsonContent);
        //console.log(path.join(__dirname, "../public/articles/") + newArticle._id.toString() + ".json");
        fs.writeFile(path_1.default.join(__dirname, "../public/images/") + newImage.guid.toString() + ".json", jsonContent, "utf8", function (err) {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
            }
            console.log("JSON file has been saved.");
        });
    }
    GetArticlesFiles(articles, dir) {
        const fs = require("fs");
        // get the directory contents
        const files = fs.readdirSync(dir);
        for (const file of files) {
            // for each make sure it's a file (not a subdirectory)
            let nom = path_1.default.join(dir, file);
            const stat = fs.statSync(nom);
            if (stat.isFile()) {
                // read in the file and parse it as JSON
                const rawdata = fs.readFileSync(nom);
                try {
                    articles.push(JSON.parse(rawdata));
                }
                catch (err) {
                    console.log(`Error working with ${file}. Err: ${err}`);
                }
            }
        }
    }
    GetImagesFiles(images, dir) {
        const fs = require("fs");
        // get the directory contents
        const files = fs.readdirSync(dir);
        for (const file of files) {
            // for each make sure it's a file (not a subdirectory)
            let nom = path_1.default.join(dir, file);
            const stat = fs.statSync(nom);
            if (stat.isFile()) {
                // read in the file and parse it as JSON
                const rawdata = fs.readFileSync(nom);
                try {
                    images.push(JSON.parse(rawdata));
                }
                catch (err) {
                    console.log(`Error working with ${file}. Err: ${err}`);
                }
            }
        }
    }
    DeleteArticleFile(id, dir) {
        const fs = require("fs");
        const pathFile = path_1.default.join(dir, id + ".json");
        try {
            fs.unlinkSync(pathFile);
            console.log(pathFile);
        }
        catch (err) {
            console.error(err);
        }
    }
}
exports.helpers = new Helpers();
// module.exports = function SaveImageFile(newArticle: IArticle) {
//     // file system module to perform file operations
//     const fs = require("fs");
//     var jsonContent = JSON.stringify(newArticle);
//     console.log(jsonContent);
//     console.log(path.join(__dirname, "../public/articles/") + newArticle._id.toString() + ".json");
//     fs.writeFile(
//         path.join(__dirname, "../public/articles/") + newArticle._id.toString() + ".json",
//         jsonContent,
//         "utf8",
//         function (err: any) {
//             if (err) {
//                 console.log("An error occured while writing JSON Object to File.");
//                 return console.log(err);
//             }
//             console.log("JSON file has been saved.");
//         }
//     );
// };
