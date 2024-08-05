import multer, { FileFilterCallback } from "multer";
import path from "path";

// Configuración del almacenamiento
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads"); // Carpeta para guardar las imágenes
  },
  filename: (req, file, cb) => {
    // Usa el nombre original del archivo, reemplazando los espacios con guiones bajos
    const ext = path.extname(file.originalname);
    const filename = file.originalname.replace(/\s+/g, "_"); // Reemplaza los espacios con guiones bajos
    cb(null, filename); // Nombre del archivo con nombre original
  },
});

// Configuración de Multer
const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Solo se permiten imágenes"));
  }
};

const upload = multer({ storage, fileFilter });

export default upload;
