"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Link_affiliate_controller_1 = require("../Controllers/Link.affiliate.controller");
const router = express_1.default.Router();
router.post('/create/link', Link_affiliate_controller_1.httpCreateLinkAffiliate);
exports.default = router;
