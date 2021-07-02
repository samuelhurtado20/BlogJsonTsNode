"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.articleController = void 0;
const Article_1 = __importDefault(require("../models/Article"));
const path_1 = __importDefault(require("path"));
const helpers_1 = require("../lib/helpers");
class ArticleController {
    Index(req, res) {
        const dirArticles = path_1.default.join(__dirname, "../public/articles/");
        const dirImages = path_1.default.join(__dirname, "../public/images/");
        let articles = [];
        helpers_1.helpers.GetArticlesFiles(articles, dirArticles);
        //console.log(JSON.stringify(articles));
        res.render("articles/index", { articles: articles, title: "Welcome" });
    }
    Add(req, res) {
        const dirArticles = path_1.default.join(__dirname, "../public/articles/");
        const dirImages = path_1.default.join(__dirname, "../public/images/");
        let images = [];
        helpers_1.helpers.GetImagesFiles(images, dirImages);
        res.render("articles/add", { title: "New article", images });
    }
    async Save(req, res) {
        const dirArticles = path_1.default.join(__dirname, "../public/articles/");
        const dirImages = path_1.default.join(__dirname, "../public/images/");
        const { title, author, imageGuid, p1 } = req.body;
        const newArticle = new Article_1.default({ title, author, imageGuid, p1 });
        helpers_1.helpers.SaveArticleFile(newArticle);
        res.redirect("/articles");
    }
    Edit(req, res) {
        const dirArticles = path_1.default.join(__dirname, "../public/articles/");
        const dirImages = path_1.default.join(__dirname, "../public/images/");
        let articles = [];
        helpers_1.helpers.GetArticlesFiles(articles, dirArticles);
        const { id } = req.params;
        let article = articles.find((a) => a._id == id);
        //console.log(article);
        let images = [];
        helpers_1.helpers.GetImagesFiles(images, dirImages);
        res.render("articles/edit", {
            id: article === null || article === void 0 ? void 0 : article._id,
            articleTitle: article === null || article === void 0 ? void 0 : article.title,
            author: article === null || article === void 0 ? void 0 : article.author,
            imageGuid: article === null || article === void 0 ? void 0 : article.imageGuid,
            p1: article === null || article === void 0 ? void 0 : article.p1,
            title: "Edit an Article",
            images,
        });
    }
    async Update(req, res) {
        const dirArticles = path_1.default.join(__dirname, "../public/articles/");
        const dirImages = path_1.default.join(__dirname, "../public/images/");
        const { id, title, author, imageGuid, p1 } = req.body;
        console.log(id);
        helpers_1.helpers.DeleteArticleFile(id, dirArticles);
        const newArticle = new Article_1.default({ title, author, imageGuid, p1 });
        helpers_1.helpers.SaveArticleFile(newArticle);
        res.redirect("/articles");
    }
    Single(req, res) {
        const dirArticles = path_1.default.join(__dirname, "../public/articles/");
        const dirImages = path_1.default.join(__dirname, "../public/images/");
        let articles = [];
        helpers_1.helpers.GetArticlesFiles(articles, dirArticles);
        const { id } = req.params;
        let article = articles.find((a) => a._id == id);
        //console.log(article);
        let images = [];
        helpers_1.helpers.GetImagesFiles(images, dirImages);
        res.render("articles/Single", {
            id: article === null || article === void 0 ? void 0 : article._id,
            articleTitle: article === null || article === void 0 ? void 0 : article.title,
            author: article === null || article === void 0 ? void 0 : article.author,
            imageGuid: article === null || article === void 0 ? void 0 : article.imageGuid,
            p1: article === null || article === void 0 ? void 0 : article.p1,
            title: article === null || article === void 0 ? void 0 : article.title,
            images,
            articles,
        });
    }
}
exports.articleController = new ArticleController();
