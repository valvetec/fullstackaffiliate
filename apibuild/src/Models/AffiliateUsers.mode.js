"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAffiliateUser = void 0;
const database_1 = __importDefault(require("../Services/Database/database"));
const sequelize_1 = require("sequelize");
;
class CreateAffiliateUser extends sequelize_1.Model {
}
exports.CreateAffiliateUser = CreateAffiliateUser;
CreateAffiliateUser.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    userName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: 'market_user_affilliate'
    },
    affiliateLink: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    sequelize: database_1.default,
    tableName: 'affiliateUsers',
});
