"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Product_controller_1 = require("../Controllers/Product.controller");
const router = express_1.default.Router();
router.post('/create/product', Product_controller_1.httpCreateProduct);
router.get('/get/all/product', Product_controller_1.httpGetAllProduct);
router.post('/get/single/product', Product_controller_1.httGetSingleProduct);
exports.default = router;
