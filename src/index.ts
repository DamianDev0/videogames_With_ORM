import "reflect-metadata";
import express from "express";
import sequelize from "./config/db";
import router from "./routes/Router";
import cors from "cors";
import bodyParser from 'body-parser';
import path from "path";

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public/uploads' directory under '/api/uploads'
app.use('/api/uploads', express.static(path.join(__dirname, 'public/uploads')));

// CORS configuration
const corsOptions = {
  origin: 'http://127.0.0.1:5500', 
  methods: ['GET', 'POST', 'PUT', 'DELETE',],
  allowedHeaders: ['Content-Type', 'Authorization'] 
};

app.use(cors(corsOptions));

// Routes
app.use('/api', router);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to the database successfully");
    await sequelize.sync();
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.error("Error starting server:", error);
    throw new Error("Error starting");
  }
};

startServer();
