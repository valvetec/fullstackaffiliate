"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLinkeAffiliate = void 0;
const database_1 = __importDefault(require("../Services/Database/database"));
const sequelize_1 = require("sequelize");
;
class CreateLinkeAffiliate extends sequelize_1.Model {
}
exports.CreateLinkeAffiliate = CreateLinkeAffiliate;
CreateLinkeAffiliate.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    link: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    affiliateOwnerId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    productId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    revenue: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: '0'
    },
}, {
    sequelize: database_1.default,
    tableName: 'link',
});
