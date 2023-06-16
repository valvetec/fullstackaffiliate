"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AffiliateUser_controller_1 = require("../Controllers/AffiliateUser.controller");
const router = express_1.default.Router();
router.post('/createUsers', AffiliateUser_controller_1.httpCreateAffiliateUser);
router.post('/login', AffiliateUser_controller_1.httpLogin);
router.get('/affiliateuser/:affiliateuserId', AffiliateUser_controller_1.httpGetSingleUser);
exports.default = router;
