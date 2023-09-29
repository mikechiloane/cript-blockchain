"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const env_1 = __importDefault(require("./config/env"));
const index_route_1 = require("./route/index.route");
const app = (0, express_1.default)();
const port = env_1.default.PORT;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/api/v1', index_route_1.indexRouter);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
