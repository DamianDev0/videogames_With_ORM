"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileRouter = void 0;
const express_1 = require("express");
const multerConfig_1 = __importDefault(require("../middlewares/multerConfig"));
const path_1 = __importDefault(require("path"));
exports.fileRouter = (0, express_1.Router)();
// Ruta para manejar la carga de archivos
exports.fileRouter.post('/', multerConfig_1.default.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded');
    }
    res.send(`Archivo subido exitosamente: ${req.file.originalname}`);
});
// Ruta para obtener imágenes
exports.fileRouter.get('/:filename', (req, res) => {
    const { filename } = req.params;
    const filePath = path_1.default.join(__dirname, '../../public/uploads', filename);
    res.sendFile(filePath, err => {
        if (err) {
            res.status(404).send('Image not found');
        }
    });
});
