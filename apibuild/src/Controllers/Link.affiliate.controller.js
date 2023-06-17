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
exports.httpCreateLinkAffiliate = void 0;
const Link_affiliate_model_1 = require("../Models/Link.affiliate.model");
const AffiliateUsers_mode_1 = require("../Models/AffiliateUsers.mode");
const Product_model_1 = require("../Models/Product.model");
const crypto = require("crypto");
//create affiliate link
const httpCreateLinkAffiliate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const affiliateLink = crypto.randomBytes(16).toString("hex");
    const userId = req.body.userId;
    const productId = req.body.productId;
    console.log(productId, 'mee');
    try {
        const user = yield AffiliateUsers_mode_1.CreateAffiliateUser.findOne({ where: { id: userId } });
        const product = yield Product_model_1.CreateProduct.findOne({ where: { id: productId } });
        if (!product) {
            return res.status(500).json('no product found');
        }
        if (!user) {
            return res.status(500).json('no user found');
        }
        const checkLink = yield Link_affiliate_model_1.CreateLinkeAffiliate.findOne({ where: { affiliateOwnerId: user === null || user === void 0 ? void 0 : user.dataValues.id, } });
        if (checkLink) {
            const response = {
                id: checkLink === null || checkLink === void 0 ? void 0 : checkLink.dataValues.id,
                productId: product === null || product === void 0 ? void 0 : product.dataValues.id,
                ownerId: checkLink === null || checkLink === void 0 ? void 0 : checkLink.dataValues.affiliateOwnerId,
                link: checkLink === null || checkLink === void 0 ? void 0 : checkLink.dataValues.link
            };
            return res.status(200).json(response);
        }
        const linkAttributes = {
            link: affiliateLink,
            productId: product === null || product === void 0 ? void 0 : product.dataValues.id,
            affiliateOwnerId: user === null || user === void 0 ? void 0 : user.dataValues.id
        };
        const createLink = yield Link_affiliate_model_1.CreateLinkeAffiliate.create(Object.assign({}, linkAttributes));
        const response = {
            id: createLink === null || createLink === void 0 ? void 0 : createLink.dataValues.id,
            productId: createLink === null || createLink === void 0 ? void 0 : createLink.dataValues.productId,
            ownerId: createLink === null || createLink === void 0 ? void 0 : createLink.dataValues.affiliateOwnerId,
            link: createLink === null || createLink === void 0 ? void 0 : createLink.dataValues.link
        };
        yield user.update({ affiliateLink: response === null || response === void 0 ? void 0 : response.link });
        return res.status(200).json(response);
    }
    catch (error) {
        return res.status(500).json('something went wrong');
    }
});
exports.httpCreateLinkAffiliate = httpCreateLinkAffiliate;
