"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const IndexController_1 = require("../controllers/IndexController");
const router = express_1.Router();
router.get("/", IndexController_1.indexController.Index);
router.get("/about", (req, res) => res.render("about"));
exports.default = router;
