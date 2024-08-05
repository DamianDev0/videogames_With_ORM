"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const _1 = require("./");
const router = (0, express_1.Router)();
router.use('/games', _1.gameRouter);
router.use('/developers', _1.developerRouter);
router.use('/users', _1.userRouter);
router.use('/uploads', _1.fileRouter);
exports.default = router;
