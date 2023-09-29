"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRouter = void 0;
const express_1 = require("express");
const wallet_route_1 = require("./wallet.route");
exports.indexRouter = (0, express_1.Router)();
exports.indexRouter.use('/wallet', wallet_route_1.walletRouter);
