"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routers/index"));
const article_1 = __importDefault(require("./routers/article"));
const image_1 = __importDefault(require("./routers/image"));
//import multer from 'multer';
//import("./database");
// init
const app = express_1.default();
// settings
app.set("port", 3000);
// middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
//app.set("views", path.join(__dirname, "views"));
//app.set("views", path.join(__dirname, "src", "views"));
app.set("views", "./src/views");
console.log(app.get("views"));
app.engine(".hbs", express_handlebars_1.default({
    extname: ".hbs",
    layoutsDir: path_1.default.join(app.get("views"), "layouts"),
    partialsDir: path_1.default.join(app.get("views"), "partials"),
    helpers: require("./lib/helpers"),
}));
app.set("view engine", ".hbs");
// routes
app.use("/", index_1.default);
app.use("/articles", article_1.default);
app.use("/images", image_1.default);
// static files
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
// starting the server
app.listen(app.get("port"), () => {
    console.log("server on port: " + app.get("port"));
});
