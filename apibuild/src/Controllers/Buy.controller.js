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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpBuyAction = void 0;
const Payment_heler_1 = require("../Helper Functions/Payment.heler");
const Product_model_1 = require("../Models/Product.model");
const AffiliateUsers_mode_1 = require("../Models/AffiliateUsers.mode");
const Link_affiliate_model_1 = require("../Models/Link.affiliate.model");
const env_config_1 = __importDefault(require("../Services/Config/env.config"));
const httpBuyAction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const productId = req.body.productId;
    const userId = req.body.userId;
    const linkId = req.body.linkId;
    //paystack accepts amount in kobo. Multiply the total sum of the user cart by 100 kobo
    try {
        const product = yield Product_model_1.CreateProduct.findOne({ where: { id: productId } });
        if (!product) {
            return res.status(404).json('no product found');
        }
        const user = yield AffiliateUsers_mode_1.CreateAffiliateUser.findOne({ where: { id: userId } });
        if (!user) {
            return res.status(404).json('no user found');
        }
        const link = yield Link_affiliate_model_1.CreateLinkeAffiliate.findOne({ where: { id: linkId } });
        if (!link) {
            return res.status(404).json('no user found');
        }
        const getSum = (product === null || product === void 0 ? void 0 : product.dataValues.price) * 100;
        console.log(getSum, 'sum');
        //convert this to string which is what paystack works with
        const convertAmount = getSum.toString();
        const paymentDetails = {
            email: user.dataValues.email,
            amount: convertAmount,
            metadata: JSON.stringify({
                cancel_action: "https://fullstack-cms.onrender.com/about"
            }),
        };
        const paystack = new Payment_heler_1.PaymentSystem(env_config_1.default.PAYSTACK_KEY);
        const response = yield paystack.initializePayment(paymentDetails);
        if (((_b = (_a = response === null || response === void 0 ? void 0 : response.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.status) == false) {
            return res.status(response.response.status).json(response.response.data.message);
        }
        return res.status(200).json(response.data.data.authorization_url);
    }
    catch (error) {
        return res.status(500).json('something went wrong');
    }
});
exports.httpBuyAction = httpBuyAction;
