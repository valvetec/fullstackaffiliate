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
exports.PaymentSystem = void 0;
const axios_1 = __importDefault(require("axios"));
//Payment class with two methods.
class PaymentSystem {
    constructor(secretKey) {
        this.MySecretKey = secretKey;
    }
    //payment initialization method
    initializePayment(userDetail) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                curl: 'https://api.paystack.co/transaction/initialize',
                headers: {
                    Authorization: `Bearer ${this.MySecretKey}`,
                    'content-type': 'application/json',
                    'cache-control': 'no-cache'
                },
                userDetail
            };
            return (0, axios_1.default)({
                method: 'post',
                url: options.curl,
                data: options.userDetail,
                headers: options.headers
            }).then((response) => {
                return response;
            }).catch((err) => {
                return err;
            });
        });
    }
    //payment verify method
    verifyPayment(ref) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                curl: `https://api.paystack.co/transaction/verify/${ref}`,
                headers: {
                    Authorization: `Bearer ${this.MySecretKey}`,
                    'content-type': 'application/json',
                    'cache-control': 'no-cache'
                },
            };
            return (0, axios_1.default)({
                method: 'get',
                url: options.curl,
                headers: options.headers
            }).then((response) => {
                return response;
            }).catch((err) => {
                return err;
            });
        });
    }
}
exports.PaymentSystem = PaymentSystem;
//const Paystack = new PaymentSystem()
