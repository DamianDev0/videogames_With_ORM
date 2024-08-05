"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
// Configuración del almacenamiento
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads"); // Carpeta para guardar las imágenes
    },
    filename: (req, file, cb) => {
        // Usa el nombre original del archivo, reemplazando los espacios con guiones bajos
        const ext = path_1.default.extname(file.originalname);
        const filename = file.originalname.replace(/\s+/g, "_"); // Reemplaza los espacios con guiones bajos
        cb(null, filename); // Nombre del archivo con nombre original
    },
});
// Configuración de Multer
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
        cb(null, true);
    }
    else {
        cb(new Error("Solo se permiten imágenes"));
    }
};
const upload = (0, multer_1.default)({ storage, fileFilter });
exports.default = upload;
