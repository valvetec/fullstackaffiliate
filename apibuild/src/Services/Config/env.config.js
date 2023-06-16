"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, "./.env") });
const configEnv = () => {
    return {
        HOST: process.env.HOST,
        DATABASENAME: process.env.DATABASENAME,
        DATABASEUSER: process.env.DATABASEUSER,
        DIALECT: process.env.DIALECT,
        PASSWORD: process.env.PASSWORD,
        PAYSTACK_KEY: process.env.PAYSTACK_KEY,
    };
};
const loadEnv = (config) => {
    for (const [key, value] of Object.entries(config)) {
        if (value === undefined) {
            throw new Error(`Missing key ${key} in env file`);
        }
    }
    return config;
};
const config = configEnv();
const sanitizedConfig = loadEnv(config);
exports.default = sanitizedConfig;
