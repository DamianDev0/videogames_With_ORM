"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const Router_1 = __importDefault(require("./routes/Router"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
// Middleware to parse JSON request bodies
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Serve static files from the 'public/uploads' directory under '/api/uploads'
app.use('/api/uploads', express_1.default.static(path_1.default.join(__dirname, 'public/uploads')));
// CORS configuration
const corsOptions = {
    origin: 'http://127.0.0.1:5500',
    methods: ['GET', 'POST', 'PUT', 'DELETE',],
    allowedHeaders: ['Content-Type', 'Authorization']
};
app.use((0, cors_1.default)(corsOptions));
// Routes
app.use('/api', Router_1.default);
const startServer = async () => {
    try {
        await db_1.default.authenticate();
        console.log("Connected to the database successfully");
        await db_1.default.sync();
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    }
    catch (error) {
        console.error("Error starting server:", error);
        throw new Error("Error starting");
    }
};
startServer();
