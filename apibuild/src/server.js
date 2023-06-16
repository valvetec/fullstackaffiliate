"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const http_1 = __importDefault(require("http"));
const database_1 = __importDefault(require("./Services/Database/database"));
const PORT = process.env.port || 5000;
//connect to the database
database_1.default.sync({ alter: true }).then(() => {
    console.log('connected to datatbase');
}).catch((err) => {
    console.log(err);
});
const server = http_1.default.createServer(app_1.default);
const startServer = () => {
    server.listen(PORT, () => {
        console.log(`server is listening on ${PORT}`);
    });
};
startServer();
