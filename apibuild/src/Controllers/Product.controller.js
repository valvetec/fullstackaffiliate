"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httGetSingleProduct = exports.httpGetAllProduct = exports.httpCreateProduct = void 0;
const AffiliateUsers_mode_1 = require("../Models/AffiliateUsers.mode");
const Product_model_1 = require("../Models/Product.model");
const httpCreateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield AffiliateUsers_mode_1.CreateAffiliateUser.findOne({ where: { userName: req.body.userName } });
        if (!user) {
            return res.status(404).json('user not found');
        }
        let productInfo = {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image
        };
        const createProduct = yield Product_model_1.CreateProduct.create(Object.assign({}, productInfo));
        return res.status(200).json(createProduct);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json('something went wrong');
    }
});
exports.httpCreateProduct = httpCreateProduct;
const httpGetAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const user = await CreateAffiliateUser.findOne({where: { userName: req.body.userName }})
        // if(!user){
        //     return res.status(404).json('user not found')
        // }
        const products = yield Product_model_1.CreateProduct.findAll({ where: {} });
        return res.status(200).json(products);
    }
    catch (error) {
        return res.status(500).json('something went wrong');
    }
});
exports.httpGetAllProduct = httpGetAllProduct;
const httGetSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield AffiliateUsers_mode_1.CreateAffiliateUser.findOne({ where: { userName: req.body.userName } });
        if (!user) {
            return res.status(404).json('user not found');
        }
        const product = yield Product_model_1.CreateProduct.findOne({ where: { id: req.body.id } });
        if (!product) {
            return res.status(404).json('product doesnt exist');
        }
        return res.status(200).json(product);
    }
    catch (error) {
    }
});
exports.httGetSingleProduct = httGetSingleProduct;
