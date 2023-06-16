"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_config_1 = __importDefault(require("../Config/env.config"));
const sequelize_1 = require("sequelize");
const sequelizeDB = new sequelize_1.Sequelize(env_config_1.default.DATABASENAME, env_config_1.default.DATABASEUSER, env_config_1.default.PASSWORD, {
    host: env_config_1.default.HOST,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
});
exports.default = sequelizeDB;
