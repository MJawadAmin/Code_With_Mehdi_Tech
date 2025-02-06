import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import route from "./routes/routes.js";
import bodyParser from "body-parser";

dotenv.config();

const PORT = process.env.PORT;
const MONGODB = process.env.MONGO_DB_URL;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(MONGODB)
  .then(() => console.log("Database connected successfully"))
  .catch(() => console.log("Connection error"));

app.use("/storage", express.static("storage")); // Serve uploaded files

app.use("/api", route);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
