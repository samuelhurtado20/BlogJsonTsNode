"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    Index(req, res) {
        res.render("index", { title: "Welcome" });
    }
}
exports.indexController = new IndexController();
