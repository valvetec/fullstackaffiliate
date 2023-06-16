"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const AffiliateUser_route_1 = __importDefault(require("./Routes/AffiliateUser.route"));
const Product_route_1 = __importDefault(require("./Routes/Product.route"));
const Link_afffiliate_route_1 = __importDefault(require("./Routes/Link.afffiliate.route"));
const Buy_route_1 = __importDefault(require("./Routes/Buy.route"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, '../build')));
app.use('/api/v1', AffiliateUser_route_1.default);
app.use('/api/v1', Product_route_1.default);
app.use('/api/v1', Link_afffiliate_route_1.default);
app.use('/api/v1', Buy_route_1.default);
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../build', 'index.html'));
});
exports.default = app;
