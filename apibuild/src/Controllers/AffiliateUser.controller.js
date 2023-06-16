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
exports.httpGetSingleUser = exports.httpLogin = exports.httpCreateAffiliateUser = void 0;
const AffiliateUsers_mode_1 = require("../Models/AffiliateUsers.mode");
const bcrypt_1 = __importDefault(require("bcrypt"));
const nodeinputerrorhandler_1 = require("nodeinputerrorhandler");
const crypto = require("crypto");
const httpCreateAffiliateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const affiliateLink = crypto.randomBytes(16).toString("hex");
    try {
        //PROVIDE A VALIDATION OF PASSWORD TO BE SURE THE USER INPUT A STRONG PASSWORD
        const validPassword = /^([^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/;
        const salt = yield bcrypt_1.default.genSalt(10);
        const password = req.body.password;
        //CHECK IF USER NAME EXIST IN THE DATABASE
        const checkUserName = yield AffiliateUsers_mode_1.CreateAffiliateUser.findOne({
            where: { userName: req.body.userName },
            attributes: ["userName"],
        });
        //CHECK IS EMAIL EXIST IN THE DATABASE
        const checkEmail = yield AffiliateUsers_mode_1.CreateAffiliateUser.findOne({
            where: { email: req.body.email },
            attributes: ["email"],
        });
        if (checkUserName !== null || checkEmail !== null) {
            return res.status(500).json("username or email already in use");
        }
        //CHECKING IF THE PASSWORD PROVIDED BY A USER IS STRONG AND PASS THE PASSWORD VALIDATION
        if (password.match(validPassword)) {
            return res
                .status(500)
                .json("password must contain at least 1 upper case, lower case, number and special characters");
        }
        if (password.length < 8) {
            return res
                .status(500)
                .json("password must not be less than 8 characters");
        }
        //HASH THE USER PASSWORD, AND COMPARE IF THE PASSWORD EQUAL TO COMFIRM PASSWORD
        const hashedPass = yield bcrypt_1.default.hash(password, salt);
        const confirmPassword = yield bcrypt_1.default.hash(req.body.confirmPassword, salt);
        if (hashedPass !== confirmPassword) {
            return res.status(501).json("Password does not match");
        }
        let userInfo = {
            firstName: req.body.firstName,
            userName: req.body.userName,
            lastName: req.body.lastName,
            country: req.body.country,
            password: hashedPass,
            phoneNumber: "234" + req.body.phoneNumber,
            email: req.body.email,
            affiliateLink: affiliateLink
        };
        const stringError = nodeinputerrorhandler_1.errorInstance.commonGeneralError({ string: [userInfo === null || userInfo === void 0 ? void 0 : userInfo.firstName, userInfo === null || userInfo === void 0 ? void 0 : userInfo.userName, userInfo === null || userInfo === void 0 ? void 0 : userInfo.country, userInfo === null || userInfo === void 0 ? void 0 : userInfo.email, userInfo === null || userInfo === void 0 ? void 0 : userInfo.lastName, userInfo === null || userInfo === void 0 ? void 0 : userInfo.password, userInfo === null || userInfo === void 0 ? void 0 : userInfo.phoneNumber
            ] });
        if (stringError) {
            console.log('I had an eror');
            return res.status(500).json(stringError);
        }
        //CREATE USER
        const user = yield AffiliateUsers_mode_1.CreateAffiliateUser.create(Object.assign({}, userInfo));
        return res.status(200).json(user);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});
exports.httpCreateAffiliateUser = httpCreateAffiliateUser;
const httpLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const password = req.body.password;
    try {
        const userName = req.body.userName;
        const user = yield AffiliateUsers_mode_1.CreateAffiliateUser.findOne({ where: { userName: userName } });
        //console.log(req.body.password)
        if (!user) {
            return res.status(401).json('user not found');
        }
        console.log(user === null || user === void 0 ? void 0 : user.dataValues.password);
        const passValidate = yield bcrypt_1.default.compare(password, user === null || user === void 0 ? void 0 : user.dataValues.password);
        if (!passValidate) {
            return res.status(401).json('wrong user details');
        }
        return res.status(200).json(user);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json('Something went wrong, restart your app');
    }
});
exports.httpLogin = httpLogin;
const httpGetSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const affiliateUserId = req.params.affiliateuserId;
    try {
        const user = yield AffiliateUsers_mode_1.CreateAffiliateUser.findOne({ where: { affiliateLink: affiliateUserId } });
        if (!user) {
            return res.status(401).json('user not found');
        }
        return res.status(200).json(user);
    }
    catch (err) {
        return res.status(500).json(err);
    }
});
exports.httpGetSingleUser = httpGetSingleUser;
